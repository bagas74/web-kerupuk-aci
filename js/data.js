// js/data.js

function shopData() {
  return {
    // --- DATA KONTAK ---
    contact: {
      wa: "6281328264534", // Nomor Admin Pusat
      ig: "https://www.instagram.com/pundungbarokah?igsh=MWthdTl6anU2cTlzbQ==",
      tiktok: "https://www.tiktok.com/@pundung.barokah?_r=1&_t=ZS-92h6R0C35q1",
      email: "pundungbarokah03@gmail.com",
      address:
        "Jl. Semin - Karangsari, Pundungsari, Pundung Sari, Kec. Semin, Kabupaten Gunungkidul",
      map_embed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.275859886487!2d110.73708637031936!3d-7.866174360843461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a35f02a2f88bb%3A0x4333ecfe4816e049!2sCesa%20Steak!5e0!3m2!1sid!2sid!4v1766640552080!5m2!1sid!2sid",
    },

    // --- DATA PRODUK ---
    products: [
      // =========================================
      // KATEGORI 1: MAKANAN (KULINER)
      // =========================================
      {
        name: "Emping Jagung - Lestari",
        category: "makanan", // Penanda Kategori
        desc: "Renyah gurih dengan bumbu bawang asli.",
        detail:
          "Resep warisan sejak 1990. Rasa bawangnya kuat namun tidak bikin eneg. Cocok untuk teman makan nasi atau camilan santai.",
        price: "Rp 15.000",
        weight: "250 Gram",
        composition: "Tepung Tapioka, Bawang Putih, Garam",
        image: "img/empingjagung-lestari1.jpeg",
        wa: "6285868641748", // WA Khusus Produk Ini
      },
      {
        name: "Gatot Instan - Lestari",
        category: "makanan",
        desc: "Varian pedas nampol dengan cabai kering.",
        detail:
          "Khusus pecinta pedas! Menggunakan cabai rawit merah asli yang dikeringkan dan ditumbuk kasar.",
        price: "Rp 18.000",
        weight: "200 Gram",
        composition: "Tepung Tapioka, Cabai Kering, Bawang",
        image: "img/gatot-lestari.jpeg",
        wa: "6285868641748",
      },
      {
        name: "keripik Tempe - Annisa",
        category: "makanan",
        desc: "Inovasi baru krupuk bantat bumbu kencur.",
        detail:
          "Krupuk digoreng bantat (tidak mekar) lalu diaduk dengan bumbu kencur & irisan daun jeruk segar.",
        price: "Rp 20.000",
        weight: "150 Gram",
        composition: "Krupuk Aci, Kencur, Daun Jeruk, Cabai",
        image: "img/kripiktempe-annisa.jpeg",
        wa: "",
      },
      {
        name: "Keripik Debok's Kurnia",
        category: "makanan",
        desc: "Varian seblak original tanpa pedas.",
        detail: "Krupuk bantat dengan aroma bawang putih goreng yang kuat.",
        price: "Rp 20.000",
        weight: "150 Gram",
        composition: "Krupuk Aci, Bawang Putih, Penyedap",
        image: "img/kripikdeboks-kurnia.jpeg", // Pastikan nama file gambar benar
        wa: "",
      },
      {
        name: "Keripik Pisang - Annisa",
        category: "makanan",
        desc: "Pedas level maksimal untuk tantangan.",
        detail: "Kombinasi cabai rawit setan dan bumbu kencur yang nendang.",
        price: "Rp 22.000",
        weight: "150 Gram",
        composition: "Krupuk Aci, Cabai Setan, Kencur",
        image: "img/kripikpisang-annisa.jpeg",
        wa: "",
      },
      {
        name: "Keripik Singkong - Griyo Sepe",
        category: "makanan",
        desc: "Pedas level maksimal untuk tantangan.",
        detail: "Kombinasi cabai rawit setan dan bumbu kencur yang nendang.",
        price: "Rp 22.000",
        weight: "150 Gram",
        composition: "Krupuk Aci, Cabai Setan, Kencur",
        image: "img/kripiksingkong-griyosepe.jpeg",
        wa: "",
      },
      {
        name: "Kerupuk Rajang - Parsi",
        category: "makanan",
        desc: "Pedas level maksimal untuk tantangan.",
        detail: "Kombinasi cabai rawit setan dan bumbu kencur yang nendang.",
        price: "Rp 22.000",
        weight: "150 Gram",
        composition: "Krupuk Aci, Cabai Setan, Kencur",
        image: "img/krupukrajang-parsi.jpeg",
        wa: "",
      },
      {
        name: "Lempeng Singkong - Nando",
        category: "makanan",
        desc: "Pedas level maksimal untuk tantangan.",
        detail: "Kombinasi cabai rawit setan dan bumbu kencur yang nendang.",
        price: "Rp 22.000",
        weight: "150 Gram",
        composition: "Krupuk Aci, Cabai Setan, Kencur",
        image: "img/lempengsingkong-nando.jpeg",
        wa: "",
      },
      {
        name: "Manggleng - Lestari",
        category: "makanan",
        desc: "Pedas level maksimal untuk tantangan.",
        detail: "Kombinasi cabai rawit setan dan bumbu kencur yang nendang.",
        price: "Rp 22.000",
        weight: "150 Gram",
        composition: "Krupuk Aci, Cabai Setan, Kencur",
        image: "img/manggleng-lestari.jpeg",
        wa: "6285868641748",
      },

      // =========================================
      // KATEGORI 2: KERAJINAN (CRAFT)
      // (Saya buatkan contoh data dummy, silakan diedit)
      // =========================================
      {
        name: "Wayang Tepus",
        category: "kerajinan", // Penanda Kategori
        desc: "Tas belanja ramah lingkungan estetik.",
        detail:
          "Dianyam manual oleh pengrajin desa Pundungsari. Kuat, tahan lama, dan mengurangi penggunaan plastik.",
        price: "Rp 78.000",
        weight: "200 Gram",
        composition: "Bambu Apus, Tali Agel",
        image: "img/wayang-wayangtepus.jpeg", // Ganti dengan nama file foto kerajinan
        wa: "62895322635800", // Nomor pengrajin (jika ada) atau admin
      },
      {
        name: "Seruling",
        category: "kerajinan",
        desc: "Wadah hantaran unik dari bambu.",
        detail:
          "Cocok untuk wadah souvenir pernikahan atau hantaran makanan. Tersedia berbagai ukuran.",
        price: "Rp 5.000",
        weight: "50 Gram",
        composition: "Bambu Alami",
        image: "img/suling.jpeg", // Ganti dengan nama file foto kerajinan
        wa: "",
      },
      {
        name: "Otok - otok",
        category: "kerajinan",
        desc: "Caping tani dengan sentuhan seni.",
        detail:
          "Caping bambu tradisional yang dilukis tangan dengan motif bunga dan pemandangan desa.",
        price: "Rp 45.000",
        weight: "300 Gram",
        composition: "Bambu, Cat Minyak",
        image: "img/otok-otok.jpeg", // Ganti dengan nama file foto kerajinan
        wa: "",
      },
      {
        name: "Gasing Bambu",
        category: "kerajinan",
        desc: "Caping tani dengan sentuhan seni.",
        detail:
          "Caping bambu tradisional yang dilukis tangan dengan motif bunga dan pemandangan desa.",
        price: "Rp 45.000",
        weight: "300 Gram",
        composition: "Bambu, Cat Minyak",
        image: "img/gasing-bambu.jpeg", // Ganti dengan nama file foto kerajinan
        wa: "",
      },
      {
        name: "Kesset Sakti",
        category: "kerajinan",
        desc: "Caping tani dengan sentuhan seni.",
        detail:
          "Caping bambu tradisional yang dilukis tangan dengan motif bunga dan pemandangan desa.",
        price: "Rp 45.000",
        weight: "300 Gram",
        composition: "Bambu, Cat Minyak",
        image: "img/kesset.jpeg", // Ganti dengan nama file foto kerajinan
        wa: "",
      },
      {
        name: "Peluit Seruling",
        category: "kerajinan",
        desc: "Caping tani dengan sentuhan seni.",
        detail:
          "Caping bambu tradisional yang dilukis tangan dengan motif bunga dan pemandangan desa.",
        price: "Rp 45.000",
        weight: "300 Gram",
        composition: "Bambu, Cat Minyak",
        image: "img/peluit-seruling.jpeg", // Ganti dengan nama file foto kerajinan
        wa: "",
      },
    ],
  };
}
