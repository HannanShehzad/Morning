var selectedRow = null

function onFormSubmit () {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }

}

function readFormData () {
    var formData = {};
    formData["srNo"] = document.getElementById("srNo").value; 

    formData["cattleType"] = document.getElementById("cattleType").value;

    formData["cattleColor"] = document.getElementById("cattleColor").value;

    formData["milkProduction"] = document.getElementById("milkProduction").value;

    formData["gender"] = document.getElementById("gender").value;
  
    formData["dateOfBirth"] = document.getElementById("dateOfBirth").value;

    formData["weight"] = document.getElementById("weight").value;


}

function insertNewRecord(data) {
    var table = document.getElementById(cattleList).getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    call1 = newRow.insertCell(0);
    cell1.innerHTML = data.srNo;

    call1 = newRow.insertCell(1);
    cell1.innerHTML = data.cattleType;

    call1 = newRow.insertCell(2);
    cell1.innerHTML = data.cattleColor;

    call1 = newRow.insertCell(3);
    cell1.innerHTML = data.milkProduction;

    call1 = newRow.insertCell(4);
    cell1.innerHTML = data.gender;

    call1 = newRow.insertCell(5);
    cell1.innerHTML = data.dateOfBirth;

    call1 = newRow.insertCell(6);
    cell1.innerHTML = data.weight;

    call1 = newRow.insertCell(7);
    cell1.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;


    
}