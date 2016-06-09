class Negotiation {
    constructor(date, amount, value) {
        this._date   = date // private attribute;
        this._amount = amount // private attribute;
        this._value  = value // private attribute;
    }

    total() {
        return this._amount * this._value;
    }

    // Getters

    getDate() {
        return this._date;
    }

    getAumount() {
        return this._amount;
    }

    getValue() {
        return this._values;
    }
}