class Negotiations {
    constructor() {
        this._list = [];
    }

    add(negotiation) {
        this._list.push(negotiation);
    }

    // --- Getters --- //

    get list() {
        return this._list;
    }
}