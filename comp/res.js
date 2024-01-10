 function submitRes() {

    var name = document.getElementById("First-Name").value;
    var lname = document.getElementById("Last-Name").value;
    var date = document.getElementById("Reservation-Date").value;
    var time = document.getElementById("Time").value;
    var email = document.getElementById("Email").value;
    var phone = document.getElementById("Phone-Number").value;
    var resi = {
        name: name,
        lname: lname,
        email: email,
        time: time,
        date: date,
        phone: phone
    };

    saveRes(resi);

    var resSubmit = document.getElementById("submit");
    
 
}

function saveRes(resi) {

    var pastRes = JSON.parse(localStorage.getItem("ressa")) || [];

    pastRes.push(resi);

    localStorage.setItem("ressa", JSON.stringify(pastRes));
}

