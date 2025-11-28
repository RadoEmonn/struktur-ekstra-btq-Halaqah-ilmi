// TAB SYSTEM
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(btn => {
    btn.addEventListener("click", () => {
        tabs.forEach(b => b.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.target).classList.add("active");
    });
});

// DATA ANGGOTA
const anggota = [
    "Ahmad Ramzi",
    "Fathur Rahman",
    "Siti Rohmah",
    "Maya Putri",
    "Ahmad Fauzan",
    "Yasmin Zahra",
    "Rahmat Hidayat",
    "Laila Salsabila"
];

// STRUKTUR EKSTRA
const struktur = [
    "Pembina: Ust. Muhammad Al-Fatih",
    "Ketua: Ahmad Ramzi",
    "Wakil Ketua: Fathur Rahman",
    "Sekretaris: Siti Rohmah",
    "Bendahara: Maya Putri",
    "Koordinator Materi: Ahmad Fauzan",
    "Koordinator Hafalan: Yasmin Zahra",
    "Koordinator Kegiatan: Rahmat Hidayat"
];

// ANALISA OTOMATIS
const analisaToday = `
• Kegiatan berjalan kondusif dan efektif  
• Fokus utama hari ini: Peningkatan bacaan dan makhraj  
• Evaluasi: Beberapa anggota menunjukkan peningkatan signifikan  
• Rencana berikutnya: Penambahan sesi latihan tajwid dan murojaah  
`;

// TAMPILKAN KE WEBSITE
const anggotaList = document.getElementById("anggota-list");
anggota.forEach(n => {
    const li = document.createElement("li");
    li.textContent = n;
    anggotaList.appendChild(li);
});

const strukturList = document.getElementById("struktur-list");
struktur.forEach(s => {
    const li = document.createElement("li");
    li.textContent = s;
    strukturList.appendChild(li);
});

document.getElementById("analisa-text").innerText = analisaToday;
