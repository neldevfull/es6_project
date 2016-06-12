class NegotiationView {
    constructor(view) {
        this._view = view;
    }

    render(negotiations) {
        this._view.innerHTML = this._template(negotiations);
    }

    _template(negotiations) {
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
                        negotiations.map(negotiation => `
                            <tr>
                                <td>${DateHelper.convertForString(negotiation.date)}</td>
                                <td>${negotiation.amount}</td>
                                <td>${negotiation.value}</td>
                                <td>${negotiation.total}</td>
                            </tr>
                        `).join('')
                    }
                </tbody>
                <tfoot>
                    <td colspan="3">Sub total</td>
                    <td>
                        ${
                            negotiations.reduce((result, negotiation) =>
                                result + negotiation.total ,0.0)
                        }
                    </td>
                </tfoot>
            </table>
        `;
    }
}