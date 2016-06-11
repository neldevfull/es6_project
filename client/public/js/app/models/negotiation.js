class Negotiation {
    constructor(date, amount, value) {
        this._date   = date // private attribute;
        this._amount = amount // private attribute;
        this._value  = value // private attribute;

        // Freeze object
        Object.freeze(this);
    }

    // --- Getters --- //

    get total() {
        return this._amount * this._value;
    }

    get date() {
        return this._date;
    }

    get amount() {
        return this._amount;
    }

    get value() {
        return this._value;
    }
}