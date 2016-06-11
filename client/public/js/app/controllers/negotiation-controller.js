class NegotiationController {
    constructor() {
        this.$           = document.querySelector.bind(document);
        this._inputDate   = this.$('#date');
        this._inputAmount = this.$('#amount');
        this._inputValue  = this.$('#value');
    }

    add(event) {
        event.preventDefault();

        console.log(this._inputDate.value);

        let negotiation = new Negotiation(
            this._formatDate(this._inputDate.value),
            this._inputAmount.value,
            this._inputValue.value
        );

        console.log(negotiation);
    }

    _formatDate(strDate) {
        var date = strDate.split('-');
        return new Date(date[0], --date[1], date[2]);
    }
}