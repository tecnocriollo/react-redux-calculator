const symbolRegex = /[+\-*/]/;
const symbolNumberRegex = /([+\-*/]|[0-9]+)/g;

const precedences = {
    "+":0,
    "-":0,
    "*":1,
    "/":1
};

export const hasSymbol = (str) => {
return str.search(symbolRegex) !== -1
}

export const findFirstSymbol = (calcValues) => {
    const symbolIndex = calcValues.findIndex( val => {
        return hasSymbol(val);
    });
    return symbolIndex !== -1 ? {symbol: calcValues[symbolIndex], index: symbolIndex}:null;
}

const getInfix = (expression) => {
    return expression.match(symbolNumberRegex)
}


const symbolHasGreaterPrecedence = (symbol, symbolToCompare) => { 
    return precedences[symbolToCompare] > precedences[symbol];
}

const pushToPolish = (polish, item) => {
    return [...polish, item]
}


const pushToStack = (stack, item) => {
    return [...stack, item];
}

const popFromStack = (stack) => {
    return stack.pop();
}

const getPolish = (infix) =>  {
    let stack = [];
    let polish = [];
    let [head, ...rest] = infix;

    while(head){
        if(!hasSymbol(head)){
            polish = pushToPolish(polish, head);
        }
        else{
            while(stack.length > 0){
                const topStackItem = stack[stack.length -1];
                if(symbolHasGreaterPrecedence(head, topStackItem)){
                    polish = pushToPolish(polish, popFromStack(stack))
                }
                else break;
            }
            stack = pushToStack(stack, head);            
        }
        [head, ...rest] = rest;
        console.log("")
    }
    if(stack.length > 0){
        while(stack.length > 0){
            polish = pushToPolish(polish, popFromStack(stack))
        }
    }
    return polish;
}

const calcPair = (left, right, symbol) => {
    let value = 0;
    switch(symbol){
        case '+':
            value = parseFloat(left) + parseFloat(right);
            break;
        case '-':
            value = parseFloat(left) - parseFloat(right);
            break;
        case '*':
            value = parseFloat(left) * parseFloat(right);
            break;
        case '/':
            value = parseFloat(left) / parseFloat(right);
            break;
        default:
            value = 0;
    }
    return value.toString();
}

const calculate = (polish) => {
    let calcValues = [...polish];
    while(calcValues.length > 1){
        const firstSymbol = findFirstSymbol(calcValues);
        const leftvalue = calcValues[firstSymbol.index - 2];
        const rightvalue = calcValues[firstSymbol.index - 1];
        const symbol = firstSymbol.symbol;
        const result = calcPair(leftvalue,rightvalue, symbol);
        if(calcValues.length > 3){
        calcValues = [...calcValues.slice(0, firstSymbol.index -2), 
                        result, 
                        ...calcValues.slice(firstSymbol.index + 1, calcValues.length)]
        }
        else{
            calcValues = [result];
        }
    }
    return calcValues[0];
}

export const calculateExpression = (expression) => {
    const infix = getInfix(expression)
    const polish = getPolish(infix)
    const result = calculate(polish);
    return result;
}