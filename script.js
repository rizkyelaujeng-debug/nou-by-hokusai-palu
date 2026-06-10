
document.addEventListener("DOMContentLoaded", function() {
    

    const elemenSapaan = document.getElementById("teks-sapaan");
    if (elemenSapaan) {
        const jamSekarang = new Date().getHours();
        let sapaanWaktu = "Selamat Datang";
        if (jamSekarang >= 5 && jamSekarang < 11) {
            sapaanWaktu = "Selamat Pagi";
        } else if (jamSekarang >= 11 && jamSekarang < 15) {
            sapaanWaktu = "Selamat Siang";
        } else if (jamSekarang >= 15 && jamSekarang < 18) {
            sapaanWaktu = "Selamat Sore";
        } else {
            sapaanWaktu = "Selamat Malam";
        }
        elemenSapaan.textContent = `${sapaanWaktu} di NOU BY HOKUSAI`;
    }
});