export class Like {
    constructor (private _count: number, private _state: boolean){}

    get count() {
        return this._count;
    }

    set count(value) {
        if (value < 0 ){
            throw new Error('Like count can not be negative');
        }
        this._count = value;
    }

    get state() {
        return this._state;
    }

    set state(toggle) {
        this._state = toggle;
    }
    
}