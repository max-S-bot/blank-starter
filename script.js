window.addEventListener('load', init);
document.getElementById("b").addEventListener("click",alterObj);
const table = document.getElementById("table");
const numDropDown = document.getElementById("num");



//store employees array in localStorage
//each employee has its own id in local
function init() {
  for (let employee of employees) {
    addRow(employee);
    objToLocal(employee);
    const op = document.createElement("option");
    op.value = employee.num;
    op.textContent = employee.num;
    numDropDown.appendChild(op);
  }
}

// store an object in localStorage
function objToLocal(obj) {
  const s = JSON.stringify(obj);
  localStorage.setItem(obj.num,s);
}

// retrieve object with index/num
// property "i" from localStorage
function objFromLocal(i) {
  const s  = localStorage.getItem(i);
  const obj = JSON.parse(s);
  return obj;
}

//alter obj selected in html
function alterObj() {
  const i = document.getElementById("num").value;
  const key = document.getElementById("key").value;
  const val = document.getElementById("val").value;
  const obj = objFromLocal(i);
  obj[key] = val;
  objToLocal(obj);
  const cell = document.getElementById(key+i);
  cell.textContent = val;
}

//adds a row with each of
//obj's properties to the table
function addRow(obj) {
  const row = document.createElement("tr");
  row.id = obj.num;
  for (key in obj) {
    const cell = document.createElement("td");
    cell.id = key+obj.num;
    cell.textContent = obj[key];
    row.appendChild(cell);
  }
  table.appendChild(row);
}

//deletes an object from the table

//should it have this feature?
//should it have an addNewRow
//feature as well?

/*
if deleteRow is added
then the indices (num property)
need to be adjusted for all employees
in both localStorage and the table
*/
function deleteRow() {

}


