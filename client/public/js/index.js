var fields  = [
    document.querySelector('#date'),
    document.querySelector('#amount'),
    document.querySelector('#value')
];

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var tr      = document.createElement('tr');
    var tdTotal = document.createElement('td');
    var tBody   = document.querySelector('#values');

    fields.forEach(function(field) {
        var td = document.createElement('td');

        td.textContent = field.value;
        tr.appendChild(td);
    });

    tdTotal.textContent = fields[1].value * fields[2].value;
    tr.appendChild(tdTotal);

    tBody.appendChild(tr);

    // Reset
    fields[0].value = "";
    fields[1].value = 1;
    fields[2].value = 0.0;
});