import * as vscode from 'vscode';
import * as sorter from './sortCss/sortCss';
const packageJson = require('../package.json');
let order = packageJson.contributes.order.default;
let config = vscode.workspace.getConfiguration('cssSorting');
let customOrder: any = config.get('customOrder') || [];
let endSemicolon: boolean = config.get('endSemicolon') || false;

function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('CSS-sorting', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor || editor.document.languageId !== 'css') {
            vscode.window.showErrorMessage('CSS 파일이 아닙니다.');
            return;
        };

        const document = editor.document;
        const text = document.getText();
        let lineArray = new Array();

        for (let i = 0; i < document.lineCount; i++) {
            if (!document.lineAt(i).isEmptyOrWhitespace) {
                lineArray.push(document.lineAt(i).text.replace(/^\s*/g, '').replace(/\t*/g, ''));
            };
        };
        for (let i = 0; i < lineArray.length; i++) {

            if ((lineArray[i].match(/[,;'"0-9a-z]$/g) && !lineArray[i - 1]?.match(/[}/]$/g) && !lineArray[i - 1]?.match(/^@.*/g)) || (lineArray[i]?.match(/}$/g) && !lineArray[i - 1]?.match(/[}/]$/g) && !lineArray[i - 1]?.match(/^@.*/g)) || (lineArray[i - 1]?.match(/^@.*\,$/g))) {
                if (i > 0) {
                    lineArray[i - 1] += lineArray[i];
                    lineArray.splice(i, 1);
                    i = i -2;
                }
            }
        }

        if (config && customOrder && customOrder.length) {
            order = customOrder;
        }

        lineArray = lineArray.map(function (v) {
            return sorter.rearrangeCSS(v, order, endSemicolon);
        });

        const edit = new vscode.WorkspaceEdit();
        const fullDocumentRange = new vscode.Range(
            document.positionAt(0),
            document.positionAt(text.length)
        );

        edit.replace(document.uri, fullDocumentRange, lineArray.join('\n'));
        vscode.workspace.applyEdit(edit);

        vscode.window.showInformationMessage('DONE!');
    });

    context.subscriptions.push(disposable);
}

exports.activate = activate;