'use strict';

/**
 * param {text} lineArray value text
 * param {order} lineArray index
 */
export function rearrangeCSS(text:string, order:string[]) {
    text = text.replace(/(\s+)?(?=[{}])/g, '')
               .replace(/(?<=[{}])\s*/g, '')
               .replace(/(?<!\S)\/\*/g, '\n\/\*');

    var annotate = text.match(/\/\*.*?\*\//g)?.toString().replace(/(?<=\*\/)\,(?=\/\*)/g,'');
    text = text.replace(/\/\*.*?\*\//g, '') + (annotate || '');
    const cssRegex = /{([^}]+)}/gm;
    let match = cssRegex.exec(text);
    while ((match) !== null) {
        const properties = match[1].replace(/\s*(?=[;:])/g, '').replace(/(?<=[;:])\s*/g, '').split(/(?<!\(.*);(?!.*\))/g);
        for(var i = 0; i < properties.length; i++){
            if (properties[i] === '') {
              properties.splice(i, 1);
              i--;
            }
          }
        const sortedProperties = properties.sort(function(a, b) {
            const aIndex = order.indexOf(a.split(':')[0]);
            const bIndex = order.indexOf(b.split(':')[0]);

            if (aIndex > -1 && bIndex > -1) {
                return aIndex - bIndex;
            } else if (aIndex > -1) {
                return -1;
            } else if (bIndex > -1) {
                return 1;
            }
            return a.localeCompare(b);
        }).join(';');
        text = text.replace(match[1], sortedProperties);
        match = cssRegex.exec(text);
    }
    if(text.match(/^\/\*.*/g)?.length || 0 > 0){
        text = '\n' + text;
    }
    return text;
}