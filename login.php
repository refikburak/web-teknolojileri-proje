<?php
    $idCheck = "g201210050@sakarya.edu.tr";
    $pasCheck = "g201210050";
    $logCheck = false;
    if($_POST['kullaniciAdi']==$idCheck && $_POST['sifre']==$pasCheck){
        echo 'Hoşgeldiniz "'.$pasCheck.'"';
        echo '<a href="index.html"><br>Giriş sayfasına geri dönmek için tıklayın.</a>';
        $logCheck=true;
    }else{
        header('Location: /proje/giris.html');
    }
?>