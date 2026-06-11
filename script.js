document.addEventListener("DOMContentLoaded", function() {
    
    const elemenSapaan = document.getElementById("teks-sapaan");
    const elemenJam = document.getElementById("live-clock");
    const elemenStatus = document.getElementById("toko-status");

    function updateWaktuDanStatus() {
        const sekarang = new Date();
        const jam = sekarang.getHours();
        const menit = sekarang.getMinutes();
        const detik = sekarang.getSeconds();
        const hari = sekarang.getDay(); 

        if (elemenSapaan) {
            let sapaanWaktu = "Selamat Datang";
            if (jam >= 5 && jam < 11) {
                sapaanWaktu = "Selamat Pagi";
            } else if (jam >= 11 && jam < 15) {
                sapaanWaktu = "Selamat Siang";
            } else if (jam >= 15 && jam < 18) {
                sapaanWaktu = "Selamat Sore";
            } else {
                sapaanWaktu = "Selamat Malam";
            }
            elemenSapaan.textContent = `${sapaanWaktu} Coffeeholic!`;  
        }


        if (elemenJam) {
            const jamStr = jam.toString().padStart(2, '0');
            const menitStr = menit.toString().padStart(2, '0');
            const detikStr = detik.toString().padStart(2, '0');
            
            elemenJam.textContent = `Waktu Saat Ini: ${jamStr}:${menitStr}:${detikStr} WITA`;
        }

        if (elemenStatus) {
            let isBuka = false;
            let teksJadwal = "";

            if (hari >= 1 && hari <= 5) {
                teksJadwal = "Tutup jam 22.00";
                if (jam >= 8 && jam < 22) {
                    isBuka = true;
                }
            } else {
                teksJadwal = "Tutup jam 23.00";
                if (jam >= 9 && jam < 23) {
                    isBuka = true;
                }
            }

            if (isBuka) {
                elemenStatus.innerHTML = `<span style="background-color: #258a00; padding: 4px 12px; border-radius: 20px; font-weight: bold;"> Buka!</span> <span style="font-size: 0.9rem;">(${teksJadwal})</span>`;
            } else {
                elemenStatus.innerHTML = `<span style="background-color: #b30101; padding: 4px 12px; border-radius: 20px; font-weight: bold;"> Yah Tutup</span> <span style="font-size: 0.9rem;">(Buka kembali besok pagi)</span>`;
            }
        }
    }

    updateWaktuDanStatus();
    
    setInterval(updateWaktuDanStatus, 1000);
});