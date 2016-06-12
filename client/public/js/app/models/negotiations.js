class Negotiations {
    constructor() {
        this._list = [];
    }

    add(negotiation) {
        this._list.push(negotiation);
    }

    // --- Getters --- //

    get list() {
        // Concat in array for armor list
        return [].concat(this._list);
    }
}