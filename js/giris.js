if (window.location.hash == "#loginFailed") {
    document.getElementById("loginfailed").innerHTML =
        "Giriş başarısız. Kullanıcı adı veya şifre hatalı.";
}

function validateEmail(email) {
    var format = /\S+@\S+[.]\S+/;
    return format.test(email);
}
var form = document.forms["formGiris"];
var kullaniciAdi = document.getElementById("kullaniciAdi");
var sifre = document.getElementById("sifre");

form.onsubmit = function() {
    if (kullaniciAdi.value == "" || sifre.value == "") {
        alert("Kullanıcı Adı veya Şifre boş bırakılamaz.");
        return false;
    } else if (!validateEmail(kullaniciAdi.value)) {
        alert("Geçersiz E-Posta formatı.");
        return false;
    }
};