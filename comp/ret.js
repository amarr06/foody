

document.addEventListener("DOMContentLoaded", function () {
   

var ressa = JSON.parse(localStorage.getItem("ressa")) || [];

let rezer = ``
ressa.forEach(resi => {

    rezer +=
    `
    <div class="card col-3 m-2 g-1 bg-success bg-gradient bg-opacity-10" style="width: 18rem;">
  <div class="card-header">
  Name: <strong>${resi.name}   ${resi.lname}</strong>
  </div>
  <ul class="list-group list-group-flush ">
    <li class="list-group-item bg-light bg-gradient bg-opacity-25">Date : <strong> ${resi.date}</strong>  </li>
    <li class="list-group-item bg-light bg-gradient bg-opacity-25">Time :  <strong>${resi.time    }</strong></li>
    <li class="list-group-item bg-light bg-gradient bg-opacity-25">Email :  <strong>${resi.email    }</strong></li>
    <li class="list-group-item bg-light bg-gradient bg-opacity-25">Phone No. : <strong>${resi.phone}</strong></li>
  </ul>
</div>`

document.getElementById("resst").innerHTML = rezer;
 return rezer
} 
);



});