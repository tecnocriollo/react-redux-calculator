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

const calculate = (polish) => {
    return "";
}

export const calculateExpression = (expression) => {
    const infix = getInfix(expression)
    const polish = getPolish(infix)
    const result = calculate(polish);
    return result;
}