class NegotiationController {
    constructor() {
        this.$            = document.querySelector.bind(document);
        this._inputDate   = this.$('#date');
        this._inputAmount = this.$('#amount');
        this._inputValue  = this.$('#value');
    }

    add(event) {
        event.preventDefault();

        console.log(this._inputDate.value);

        let negotiation = new Negotiation(
            new Date(...this._inputDate.value.split('-')
                .map((item, index) => item - index % 2 )),
            this._inputAmount.value,
            this._inputValue.value
        );

        console.log(negotiation);
    }
}