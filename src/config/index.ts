import {keydownAccept} from "@types";
import {checkDops, checkBracket, checkBracketReverse} from "@utils/checked";

const config: {
    app: any,
    api: any,
    keydown: keydownAccept
} = {
    app: {
        title: "Calculator"
    },
    api: {
        url: "http://localhost:3241/api"
    },
    keydown: {
        '0': {
            key: '0',
            value: 0,
            active: 'default'
        },
        '1': {
            key: '1',
            value: 1,
            active: 'default'
        },
        '2': {
            key: '2',
            value: 2,
            active: 'default'
        },
        '3': {
            key: '3',
            value: 3,
            active: 'default'
        },
        '4': {
            key: '4',
            value: 4,
            active: 'default'
        },
        '5': {
            key: '5',
            value: 5,
            active: 'default'
        },
        '6': {
            key: '6',
            value: 6,
            active: 'default'
        },
        '7': {
            key: '7',
            value: 7,
            active: 'default'
        },
        '8': {
            key: '8',
            value: 8,
            active: 'default'
        },
        '9': {
            key: '9',
            value: 9,
            active: 'default'
        },
        '+': {
            key: '+',
            value: '+',
            active: 'default',
            check: checkDops,
        },
        '-': {
            key: '-',
            value: '-',
            active: 'default',
            check: checkDops,
        },
        '*': {
            key: '*',
            value: '*',
            active: 'default',
            check: checkDops,
        },
        '/': {
            key: '/',
            value: '/',
            active: 'default',
            check: checkDops,
        },
        '(': {
            key: '(',
            value: '(',
            active: 'default',
            check: checkBracket,
        },
        ')': {
            key: ')',
            value: ')',
            active: 'default',
            check: checkBracketReverse,
        },
        'Backspace': {
            key: 'Backspace',
            value: '',
            active: 'delete'
        },
        'Enter': {
            key: 'Enter',
            value: '',
            active: 'accept'
        }
    }
}

export default config;