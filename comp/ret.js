

document.addEventListener("DOMContentLoaded", function () {
   

var ressa = JSON.parse(localStorage.getItem("ressa")) || [];

let rezer = ``
ressa.forEach(resi => {

    rezer +=
    `
    <div class="card bg-secondary bg-gradient bg-opacity-10 " style="width: 18rem;">
  <div class="card-header">
  Name: ${resi.name}   ${resi.lname}
  </div>
  <ul class="list-group list-group-flush ">
    <li class="list-group-item">Date :${resi.date}  </li>
    <li class="list-group-item">Time :  ${resi.time    }</li>
    <li class="list-group-item">Email :  ${resi.email    }</li>
    <li class="list-group-item">Phone No. : ${resi.phone}</li>
  </ul>
</div>`

document.getElementById("resst").innerHTML = rezer;
 return rezer
} 
);



});