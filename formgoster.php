<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Form Bilgileri - G201210050</title>
</head>

<body>
    <?php
    function TrimData($veri)
    {
        $veri = trim($veri);
        $veri = stripslashes($veri);
        $veri = htmlspecialchars($veri);
    }
    error_reporting(0);
    echo "<h1>FORM BİLGİLERİ</h1>";
    echo "<br>Adınız-Soyadınız: " . $_POST['adsoyad'];
    echo "<br>E-Posta Adresi: ";
    if (isset($_POST['epostachk'])) {
        echo $_POST['eposta'];
    } else echo "Belirtilmemiş.";
    echo "<br>Telefon Numarası: ";
    if (isset($_POST['telchk'])) {
        echo $_POST['telefon'];
    } else echo "Belirtilmemiş.";
    echo "<br>Ulaşılabilecek yollar: ";
    if (isset($_POST['telchk'])) {
        echo "Telefon ";
    }
    if (isset($_POST['epostachk'])) {
        echo " E-Posta";
    }
    echo "<br>Ulaşma Sebebi: " . $_POST["sebep"];
    echo "<br>Şehir: " . $_POST["sehirler"];
    echo "<br>Konu: " . $_POST["konu"];
    echo "<br>Mesaj: " . $_POST["mesaj"];
    echo "<br>Dosya :" . $_POST["ekdosya"];
    echo '<br><br><a href="index.html">Anasayfaya dönmek için tıklayın.</a>';

    ?>
</body>

</html>