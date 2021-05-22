var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

var f1Pilots = document.getElementById("f1pilots");
var year = document.getElementById("year");


function validateYear(year) {
    var format = /[0-9]{4}/;
    return format.test(year);
}

f1Pilots.onclick = function() {
    if (!validateYear(year.value)) {
        alert("Geçersiz yıl formatı.");
    } else if (parseInt(year.value) < 1950 || parseInt(year.value) > 2021) {
        alert("Geçersiz yıl.");
    } else {
        const url = `http://ergast.com/api/f1/${year.value}/drivers.json`;
        document.getElementById("f1pilotShow").innerHTML = 'Yanıt bekleniyor.';
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    document.getElementById("f1pilotShow").innerHTML = 'Yanıt alınamadı. Bir süre sonra tekrar deneyin.';
                    throw Error("ERROR");
                }
                return response.json();
            })
            .then(result => {
                console.log(result.MRData.DriverTable.Drivers)
                const html = result.MRData.DriverTable.Drivers.map(user => {
                    return `<tr><td>${user.code}</td> <td>${user.givenName}</td> <td>${user.familyName}</td> <td>${user.permanentNumber}</td> <td>${user.nationality}</td></tr>`
                }).join('');
                document.getElementById("f1pilotShow").innerHTML = `<table class="d-block"> <tbody class="cv-table"> <tr class="fw-bold"><td>KOD</td> <td>AD</td> <td>SOYAD</td> <td>NUMARA</td> <td>UYRUK</td></tr> ${html} </tbody> </table>`;
            })
            .catch(error => console.log('error', error));
    }

}