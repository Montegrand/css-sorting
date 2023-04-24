import * as vscode from 'vscode';
import * as sorter from './sortCss/sortCss';
const packageJson = require('../package.json');
let order = packageJson.contributes.order.default;
let config = vscode.workspace.getConfiguration('cssSorting');
let customOrder:any = config.get('customOrder');

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
                lineArray.push(document.lineAt(i).text.replace(/\t*/g, ''));
            };
        };

        if (config && customOrder && customOrder.length) {
          order = customOrder;
        }

        lineArray = lineArray.map(function (v) {
            return sorter.rearrangeCSS(v, order);
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