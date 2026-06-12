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
            if (jam >= 5 && jam < 11) sapaanWaktu = "Selamat Pagi";
            else if (jam >= 11 && jam < 15) sapaanWaktu = "Selamat Siang";
            else if (jam >= 15 && jam < 18) sapaanWaktu = "Selamat Sore";
            else sapaanWaktu = "Selamat Malam";
            
            elemenSapaan.textContent = `${sapaanWaktu} Coffeeholic!`;  
        }

        if (elemenJam) {
            const jamStr = jam.toString().padStart(2, '0');
            const menitStr = menit.toString().padStart(2, '0');
            const detikStr = detik.toString().padStart(2, '0');
            elemenJam.textContent = `Waktu Saat Ini: ${jamStr}:${menitStr}:${detikStr} WITA`;
        }

        if (elemenStatus) {
            let isBuka = (hari >= 1 && hari <= 5 && jam >= 8 && jam < 22) || (hari === 0 || hari === 6 && jam >= 9 && jam < 23);
            let teksJadwal = (hari >= 1 && hari <= 5) ? "Tutup jam 22.00" : "Tutup jam 23.00";

            if (isBuka) {
                elemenStatus.innerHTML = `<span style="background-color: #258a00; padding: 4px 12px; border-radius: 20px; font-weight: bold; color: white;"> Buka!</span> <span style="font-size: 0.9rem;">(${teksJadwal})</span>`;
            } else {
                elemenStatus.innerHTML = `<span style="background-color: #b30101; padding: 4px 12px; border-radius: 20px; font-weight: bold; color: white;"> Yah Tutup</span> <span style="font-size: 0.9rem;">(Buka kembali besok pagi)</span>`;
            }
        }
    }
    updateWaktuDanStatus();
    setInterval(updateWaktuDanStatus, 1000);


    for (let i = 0; i < 3; i++) {
        let kopi = document.createElement("div");
        kopi.innerHTML = "☕";
        
        kopi.style.position = "fixed";
        kopi.style.fontSize = "25px";
        kopi.style.cursor = "grab";
        kopi.style.zIndex = "1000";
        kopi.style.userSelect = "none";
        kopi.style.touchAction = "none"; 
        document.body.appendChild(kopi);

        let x = Math.random() * (window.innerWidth - 60);
        let y = Math.random() * (window.innerHeight - 60);
        let vx = (Math.random() - 0.5) * 1.5; 
        let vy = (Math.random() - 0.5) * 1.5;
        let digeser = false;

        function melayang() {
            if (!digeser) {
                x += vx;
                y += vy;
                
                
                if (x <= 0 || x >= window.innerWidth - 60) vx *= -1;
                if (y <= 0 || y >= window.innerHeight - 60) vy *= -1;

                kopi.style.left = x + "px";
                kopi.style.top = y + "px";
            }
            requestAnimationFrame(melayang);
        }
        melayang();

        
        kopi.onmousedown = kopi.ontouchstart = function() {
            digeser = true;
            kopi.style.cursor = "grabbing";
        };

        
        function geser(e) {
            if (!digeser) return;
            if (e.type.includes("touch")) e.preventDefault(); 
            
            let kursorX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            let kursorY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;

            x = kursorX - 25; 
            y = kursorY - 25;
            kopi.style.left = x + "px";
            kopi.style.top = y + "px";
        }

        
        document.addEventListener("mousemove", geser);
        document.addEventListener("touchmove", geser, {passive: false});

        
        function lepas() {
            digeser = false;
            kopi.style.cursor = "grab";
        }

        
        document.addEventListener("mouseup", lepas);
        document.addEventListener("touchend", lepas);

        kopi.ondragstart = () => false; 
    }

});