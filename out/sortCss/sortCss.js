'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.rearrangeCSS = void 0;
/**
 * param {text} lineArray value text
 * param {order} lineArray index
 */
function rearrangeCSS(text, order) {
    text = text.replace(/\s*(?=[{}])/g, '').replace(/(?<=[{}])\s*/g, '').replace(/\/\*/g, '\n\/\*');
    const cssRegex = /{([^}]+)}/gm;
    let match = cssRegex.exec(text);
    while ((match) !== null) {
        const properties = match[1].replace(/\s*(?=[;:])/g, '').replace(/(?<=[;:])\s*/g, '').split(/(?<!\(.*);(?!.*\))/g);
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
        }).join(';');
        text = text.replace(match[1], sortedProperties);
        match = cssRegex.exec(text);
    }
    return text;
}
exports.rearrangeCSS = rearrangeCSS;
//# sourceMappingURL=sortCss.js.map