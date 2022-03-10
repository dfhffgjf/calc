export interface keydownAccept {
    [details: string]: {
        key: string,
        value: string | number,
        active: 'default' | 'delete' | 'accept',
        check?(current: string): Boolean
    }
}