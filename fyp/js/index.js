
var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }
// Read operation using this function
function readFormData(){
    var formData = {};
    formData["srNo"] = document.getElementById("srNo").value;
    formData["cattleType"] = document.getElementById("cattleType").value;
    formData["cattleBreed"] = document.getElementById("cattleBreed").value;
    formData["cattleColor"] = document.getElementById("cattleColor").value;

    formData["gender"] = document.getElementById("gender").value;
    formData["dateOfBirth"] = document.getElementById("dateOfBirth").value;
    formData["milkProductionPerDay"] = document.getElementById("milkProductionPerDay").value;
    formData["weight"] = document.getElementById("weight").value;



    return formData;
}

// Create operation
function insertNewRecord(data){
    var table = document.getElementById("cattleList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.srNo;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.cattleType;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.cattleBreed;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.cattleColor;
    
        var cell4 = newRow.insertCell(4);
        cell4.innerHTML = data.gender;

        
    var cell4 = newRow.insertCell(5);
    cell4.innerHTML = data.dateOfBirth;

    
    var cell4 = newRow.insertCell(6);
        cell4.innerHTML = data.milkProductionPerDay;

        
    var cell4 = newRow.insertCell(7);
    cell4.innerHTML = data.weight;

    var cell5 = newRow.insertCell(8);
        cell5.innerHTML = `<a href="#" style="color:blue; padding-right:20px;" onClick='onEdit(this)'>Edit</a>
                        <a href="#" style="color:red ;" onClick='onDelete(this)'>Delete</a>`;
}

// To Reset the data of fill input
function resetForm(){
    document.getElementById('srNo').value = '';
    document.getElementById('cattleType').value = '';
    document.getElementById('cattleBreed').value = '';
    document.getElementById('cattleColor').value = '';

    document.getElementById('gender').value = '';
    document.getElementById('dateOfBirth').value = '';
    document.getElementById('milkProductionPerDay').value = '';
    document.getElementById('weight').value = '';


    selectedRow = null;
}

// For Edit operation
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('srNo').value = selectedRow.cells[0].innerHTML;
    document.getElementById('cattleType').value = selectedRow.cells[1].innerHTML;
    document.getElementById('cattleBreed').value = selectedRow.cells[2].innerHTML;
    document.getElementById('cattleColor').value = selectedRow.cells[3].innerHTML;

    document.getElementById('gender').value = selectedRow.cells[4].innerHTML;
    document.getElementById('dateOfBirth').value = selectedRow.cells[5].innerHTML;
    document.getElementById('milkProductionPerDay').value = selectedRow.cells[6].innerHTML;
    document.getElementById('weight').value = selectedRow.cells[7].innerHTML;

}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.srNo;
    selectedRow.cells[1].innerHTML = formData.cattleType;
    selectedRow.cells[2].innerHTML = formData.cattleBreed;
    selectedRow.cells[3].innerHTML = formData.cattleColor;

    selectedRow.cells[4].innerHTML = formData.gender;
    selectedRow.cells[5].innerHTML = formData.dateOfBirth;
    selectedRow.cells[6].innerHTML = formData.milkProductionPerDay;
    selectedRow.cells[7].innerHTML = formData.weight;

}
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('cattleList').deleteRow(row.rowIndex);
        resetForm();
    }    
}