'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.rearrangeCSS = void 0;
/**
 * Rearrange CSS properties in a given text according to a custom order.
 * @param {string} text - The CSS text to be rearranged.
 * @param {string[]} order - The custom order of CSS properties.
 * @param {boolean} endSemicolon - Whether to add a semicolon at the end of the last property.
 * @returns {string} - The rearranged CSS text.
 */
function rearrangeCSS(text, order, endSemicolon) {
    text = text.replace(/(\s+)?(?=[{}])/g, '')
        .replace(/(?<=[{}])\s*/g, '')
        .replace(/(?<!\S)\/\*/g, '\n\/\*');
    var annotate = text.match(/\/\*.*?\*\//g)?.toString().replace(/(?<=\*\/)\,(?=\/\*)/g, '');
    text = text.replace(/\/\*.*?\*\//g, '') + (annotate || '');
    const cssRegex = /{([^}]+)}/gm;
    let match = cssRegex.exec(text);
    while ((match) !== null) {
        const properties = match[1].replace(/\s*(?=[;:])/g, '').replace(/(?<=[;:])\s*/g, '').split(/(?<!\([a-zA-Z0-9:;,.+\-*/%#&@\s'"]*);(?![a-zA-Z0-9:;,.+\-*/%#&@\s'"]]*\))/g);
        for (var i = 0; i < properties.length; i++) {
            if (properties[i] === '') {
                properties.splice(i, 1);
                i--;
            }
        }
        const sortedProperties = properties.sort(function (a, b) {
            const aIndex = order.indexOf(a.split(':')[0]);
            const bIndex = order.indexOf(b.split(':')[0]);
            if (aIndex > -1 && bIndex > -1) {
                return aIndex - bIndex;
            }
            else if (aIndex > -1) {
                return -1;
            }
            else if (bIndex > -1) {
                return 1;
            }
            return a.localeCompare(b);
        });
        let sortedTxt = sortedProperties.join(';');
        if (endSemicolon) {
            sortedTxt += ';';
        }
        ;
        text = text.replace(match[1], sortedTxt);
        match = cssRegex.exec(text);
    }
    if (text.match(/^\/\*.*/g)?.length || 0 > 0) {
        text = '\n' + text;
    }
    return text;
}
exports.rearrangeCSS = rearrangeCSS;
//# sourceMappingURL=sortCss.js.map