<!DOCTYPE html>
<html>

<head>
    <title>Giriş Kontrol - G201210050</title>
</head>

<body>

    <?php
    $idCheck = "g201210050@sakarya.edu.tr";
    $pasCheck = "g201210050";
    if ($_POST['kullaniciAdi'] == $idCheck && $_POST['sifre'] == $pasCheck) {
        echo 'Hoşgeldiniz "' . $pasCheck . '"';
        echo '<a href="index.html"><br>Giriş sayfasına geri dönmek için tıklayın.</a>';;
    } else {
        header('Location: /proje/giris.html#loginFailed');
    }
    ?>
</body>




</html>