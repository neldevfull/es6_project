var fields  = [
    [document.querySelector('#date'), ""],
    [document.querySelector('#amount'), 1],
    [document.querySelector('#value'), 0.0]
];

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var tr      = document.createElement('tr');
    var tdTotal = document.createElement('td');
    var tBody   = document.querySelector('#values');

    fields.forEach(function(field) {
        var td = document.createElement('td');

        td.textContent = field[0].value;
        tr.appendChild(td);

        // Reset
        field[0].value = field[1];
    });

    tdTotal.textContent = fields[1].value * fields[2].value;
    tr.appendChild(tdTotal);

    tBody.appendChild(tr);
});