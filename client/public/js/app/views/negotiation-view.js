class NegotiationView {
    constructor(view) {
        this._view = view;
    }

    render(negotations) {
        this._view.innerHTML = this._template(negotations);
    }

    _template(negotations) {
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
                <tbody>
                    ${
                        negotations.map(negotation => `
                            <tr>
                                <td>${DateHelper.convertForString(negotation.date)}</td>
                                <td>${negotation.amount}</td>
                                <td>${negotation.value}</td>
                                <td>${negotation.total}</td>
                            </tr>
                        `).join('')
                    }
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        `;
    }
}