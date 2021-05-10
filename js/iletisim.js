var form = document.forms["formIletisim"];
var adsoyad = document.getElementById("adsoyad");
var eposta = document.getElementById("eposta");
var telefon = document.getElementById("telefon");
var sehir = document.getElementById("sehirler");
var epostachk = document.getElementById("epostachk");
var telchk = document.getElementById("telchk");
var sebep = document.getElementById("sebep");
var konu = document.getElementById("konu");
var mesaj = document.getElementById("mesaj");

function validateEmail(email) {
  var format = /\S+@\S+[.]\S+/;
  return format.test(email);
}
function validatePhone(phone) {
  var format = /[0-9]{3}[-][0-9]{3}[-][0-9]{2}[-][0-9]{2}/;
  return format.test(phone);
}
epostachk.onchange = function () {
  eposta.disabled = !this.checked;
};
telchk.onchange = function () {
  telefon.disabled = !this.checked;
};
document.getElementById("sifirla").onclick = function () {
  eposta.disabled = false;
  telefon.disabled = false;
};

form.onsubmit = function () {
  var str = "";
  if (adsoyad.value == "") {
    str += "\nAd-Soyad boş bırakılamaz.";
  }
  if (epostachk.checked == false && telchk.checked == false) {
    str += "\nUlaşılabilecek en az bir yer işaretlemelisiniz.";
  }
  if (epostachk.checked == true && eposta.value == "") {
    str += "\nE-Posta boş bırakılamaz.";
  }
  if (epostachk.checked == true && eposta.value != "") {
    if (!validateEmail(eposta.value)) {
      str += "\nGeçersiz E-Posta formatı.";
    }
  }
  if (telchk.checked == true && telefon.value == "") {
    str += "\nTelefon Numarası boş bırakılamaz.";
  }
  if (telchk.checked == true && telefon.value != "") {
    if (!validatePhone(telefon.value)) {
      str += "\nGeçersiz Telefon Numarası formatı.";
    }
  }
  if (sehir.value == 0) {
    str += "\nBir şehir seçmelisiniz.";
  }
  if (konu.value == "") {
    str += "\nKonu boş bırakılamaz.";
  }
  if (mesaj.value == "") {
    str += "\nMesaj boş bırakılamaz.";
  }

  if (str == "") {
    alert("İşlem başarılı.");
  } else {
    alert("Form gönderilemedi. Çünkü;\n" + str);
    return false;
  }
};
