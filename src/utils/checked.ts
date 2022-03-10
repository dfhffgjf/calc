export const checkDops = (current: string): Boolean => {
    let flag = true;

    if(current.length == 0) flag = false;
    if(!current[current.length-1]?.match('[0-9)]')) flag = false;

    return flag;
}

export const checkBracket = (current: string): Boolean => {
    let flag = true;

    if(!current[current.length-1]?.match('[+-/*]')) flag = false;
    if(current.length == 0) flag = true;

    return flag;
}

export const checkBracketReverse = (current: string): Boolean => {
    let flag = true;

    if(!current.match('[(].*[^)]$')) flag = false;

    return flag;
}