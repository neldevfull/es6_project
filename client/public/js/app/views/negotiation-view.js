class NegotiationView {
    constructor(view) {
        this._view = view;
    }

    render() {
        this._view.innerHTML = this._template();
    }

    _template() {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Value</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody id="values"></tbody>

                <tfoot>
                </tfoot>
            </table>
        `;
    }
}