let tr = document.body.querySelectorAll("tr");
for(let i=0; i < tr.length; i++){
    let td = tr[i].cells[i];
    td.style.backgroundColor = 'red';
}