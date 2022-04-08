const checkParenthesis = (str) => {
    const getParenthesisArrayLength = () => {
        let parenthesis = [];
    for (let i = 0; i < str.length; i++) {     
        if (str[i] === "(" || str[i] === "[" || str[i] === "{" ) {
            parenthesis.push(str[i]);
        } else if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
            if (parenthesis[parenthesis.length - 1] === "(" || parenthesis[parenthesis.length - 1] === "[" || parenthesis[parenthesis.length - 1] === "{" ) parenthesis.pop();
            else parenthesis.push("#");
        }
    }
    return parenthesis.length;
    }
    const printBalance = () => {
        let balanced = false;
        if(getParenthesisArrayLength() === 0){
            balanced = true;
        }
        return balanced
    }
    return { printBalance }
}


const balanced = checkParenthesis('()[]{}}')

console.log(balanced.printBalance());