import { keydownAccept } from "@types";

export const keydown = (accept: keydownAccept, callback: false | Function, callbackDelete: false | Function, callbackAccept: false | Function) => {

    const handler = (e: KeyboardEvent) => {
        const { key } = e;
        const action = accept[key];

        if(!action) return;

        if(action.active == 'delete' && callbackDelete) callbackDelete();
        if(action.active == 'accept' && callbackAccept) callbackAccept();
        if(action.active == 'default' && callback) callback(action)
    }

    document.addEventListener('keydown', handler);

}