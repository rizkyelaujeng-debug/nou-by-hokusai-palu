// Memastikan seluruh HTML selesai dimuat sebelum menjalankan script
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. DOM SELECTION: Mencari elemen h1 berdasarkan ID
    const elemenSapaan = document.getElementById("teks-sapaan");

    // Jika elemen ditemukan di halaman (mencegah error di halaman lain)
    if (elemenSapaan) {
        
        // 2. Mengambil waktu (jam) dari komputer pengguna saat ini
        const jamSekarang = new Date().getHours();
        let sapaanWaktu = "Selamat Datang";

        // 3. Logika penentuan sapaan berdasarkan jam
        if (jamSekarang >= 5 && jamSekarang < 11) {
            sapaanWaktu = "Selamat Pagi";
        } else if (jamSekarang >= 11 && jamSekarang < 15) {
            sapaanWaktu = "Selamat Siang";
        } else if (jamSekarang >= 15 && jamSekarang < 18) {
            sapaanWaktu = "Selamat Sore";
        } else {
            sapaanWaktu = "Selamat Malam";
        }

        // 4. DOM MANIPULATION: Mengubah isi teks HTML secara dinamis
        elemenSapaan.textContent = `${sapaanWaktu} di NOU BY HOKUSAI`;
    }
});