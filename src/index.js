/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const  capitalizeString = str => str.split(' ').map((str) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`).join(' ');


/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString (string) {
    let resoultWord = '';
    let resoultArr = string.split('');
    for (let i = 0; i < resoultArr.length; i++) {
        if (i % 2 === 0) {
            resoultWord = `${resoultWord}${resoultArr[i].toLowerCase()}`
        } else {resoultWord = `${resoultWord}${resoultArr[i].toUpperCase()}`};
    }
    return resoultWord
 };



/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function (action,str) {
    if(action === 'uppercase') {
        return str.toUpperCase()
    } else if(action === 'lowercase'){
        return str.toLowerCase()
    } else if (action === 'capitalize') {
        return capitalizeString(str)
    } else if(action === 'fence'){
        return fenceString(str)
    } else {return str}

    }

;

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (action, str) => {
    switch (action){
        case "uppercase":
            return str.toUpperCase();
        case "lowercase":
            return str.toLowerCase();
        case "capitalize":
            return capitalizeString(str);
        case "fence":
            return fenceString(str);
        default: return str;
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = string => {
    const letterArr = string.split("")
    for(letter of letterArr) {
        console.log (letter);
    }
}

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = str => {
    const letterArr = str.split("")
    for(let i = 0; i < letterArr.length; i++) {
        console.log(letterArr[i]);
    };
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = str => {
    const letterArr = str.split("")
    let i = 0;
    while (i < letterArr.length ) {
        console.log(letterArr[i]);
        i++;
    };
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = str => {
    const letterArr = str.split("")
    letterArr.forEach(letter => {
        console.log(letter);
    })
};
