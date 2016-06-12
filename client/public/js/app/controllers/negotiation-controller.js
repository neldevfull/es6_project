class NegotiationController {
    constructor() {
        this.$            = document.querySelector.bind(document);
        this._inputDate   = this.$('#date');
        this._inputAmount = this.$('#amount');
        this._inputValue  = this.$('#value');
    }

    add(event) {
        event.preventDefault();

        let negotiation = new Negotiation(
            DateHelper.convertForDate(this._inputDate.value),
            this._inputAmount.value,
            this._inputValue.value
        );

        console.log(DateHelper.convertForString(negotiation.date));
        console.log(negotiation);
    }
}