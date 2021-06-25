let inputVal = document.querySelector('#inVal');
let inputSec = document.querySelector('#inVal2');
let listField = document.querySelector('.list-main');
let btnSub = document.querySelector('.btn');
let form = document.querySelector('form');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  let db = JSON.parse(localStorage.getItem('data'));
  let newDb;
  if (db == null) {
    newDb = [];
    newDb.push({
      title: inputVal.value,
      description: inputSec.value
    });
    localStorage.setItem('data', JSON.stringify(newDb));
  } else {

    db.push({
      title: inputVal.value.toUpperCase(),
      description: inputSec.value
    });
    localStorage.setItem('data', JSON.stringify(db));

    let html = '';
    db.map((item, index) => {
      html += ` <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">${item.title}</div>
        <p>${item.description}</p>
      </div>
      <button class="btn btn-warning" onClick="remove(${index})"><i class="fa fa-trash" aria-hidden="true"></i></button>
    </li>`;
    });

    listField.innerHTML = html;
  }
  fetchData();

  inputVal.value = '';
  inputSec.value = '';


})

fetchData();

function fetchData() {
  let localDb = JSON.parse(localStorage.getItem('data'));
  let db;
  if (localDb === null) {
    db = [];
  } else {
    db = localDb;
  }

  let html = '';
  db.map((item, index) => {
    html += ` <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">${item.title}</div>
      <p>${item.description}</p>
    </div>
    <button class="btn btn-warning" onClick="remove(${index})"><i class="fa fa-trash" aria-hidden="true"></i></button>
  </li>`;
  });

  listField.innerHTML = html;

}


function remove(index) {
  let db = JSON.parse(localStorage.getItem('data'));
  db.splice(index, 1);
  localStorage.setItem('data', JSON.stringify(db));
  fetchData();

}