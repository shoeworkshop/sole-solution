export interface Dummyable {
  dummy?: boolean;
}

export interface ProgramItem extends Dummyable {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
}

export interface WorkflowStep extends Dummyable {
  step: number;
  title: string;
  description: string;
}

export interface ComparisonRow {
  feature: string;
  generalRepair: string;
  inHouse: string;
  soleSolution: string;
}

export interface PartnerLogoSlot extends Dummyable {
  id: string;
  label: string;
  category: string;
}

export interface AsymmetricPhotoSlot extends Dummyable {
  id: string;
  title: string;
  caption: string;
  aspectClass: string;
  tag: string;
  colSpanClass: string;
  images: string[];
}

export interface TestimonialItem extends Dummyable {
  id: string;
  quote: string;
  role: string;
  companyType: string;
}

export interface FaqItem extends Dummyable {
  id: string;
  question: string;
  answer: string;
}

export interface SiteContent {
  trackingLive: boolean;
  brand: {
    name: string;
    subBrand: string;
    foundingFact: string;
    whatsappNumber: string;
    whatsappDefaultMessage: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    singleSentence: string;
    ctaButtonText: string;
    photoSlot: {
      label: string;
      caption: string;
    };
  };
  comparison: {
    title: string;
    subtitle: string;
    foundingFact: string;
    columns: {
      general: string;
      inHouse: string;
      soleSolution: string;
    };
    rows: ComparisonRow[];
  };
  programs: {
    title: string;
    subtitle: string;
    items: ProgramItem[];
  };
  workflow: {
    title: string;
    subtitle: string;
    steps: WorkflowStep[];
  };
  evidence: {
    title: string;
    subtitle: string;
    partnerLogos: PartnerLogoSlot[];
    photos: AsymmetricPhotoSlot[];
    featuredTestimonial: TestimonialItem;
    alternativeTestimonial?: TestimonialItem;
  };
  faq: {
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    note: string;
  };
  footer: {
    copyright: string;
    workshopNotice: string;
  };
}

export const siteContent: SiteContent = {
  trackingLive: true,
  brand: {
    name: "Sole Solution",
    subBrand: "",
    foundingFact: "Sole Solution, Bandung, sejak 2017.",
    whatsappNumber: "6285168125219",
    whatsappDefaultMessage: 
`Halo Tim Sole Solution,

Saya ingin konsultasi reglue B2B untuk bisnis kami:
- Nama Bisnis (Brand / Laundry): 
- Estimasi Volume per Bulan: 
- Jenis Kebutuhan: 

Mohon informasi alur kerja sama. Terima kasih!`,
  },
  hero: {
    eyebrow: "Layanan reglue (lem & jahit) sepatu",
    headline: "Partner reglue sepatu untuk brand dan laundry sepatu.",
    singleSentence: "Sol lepas dan jahitan terlepas dikerjakan di workshop kami di Bandung: dua kali QC, jalur terpisah dari antrean ritel, estimasi 10-15 hari kerja.",
    ctaButtonText: "Konsultasi Sekarang",
    photoSlot: {
      label: "Foto close-up proses reglue",
      caption: "Reglue dan mesin press",
    },
  },
  comparison: {
    title: "Reglue yang dikerjakan terpisah dan diperiksa dua kali",
    subtitle: "Perbandingan alur penanganan sepatu yang butuh reglue.",
    foundingFact: "Sole Solution, Bandung, sejak 2017.",
    columns: {
      general: "Reparasi umum (satuan)",
      inHouse: "Tim internal brand",
      soleSolution: "Sole Solution",
    },
    rows: [
      {
        feature: "Antrean pengerjaan",
        generalRepair: "Bergabung dengan antrean pelanggan umum",
        inHouse: "Berbagi kapasitas dengan lini produksi",
        soleSolution: "Jalur dan rak khusus B2B, terpisah dari antrean ritel",
      },
      {
        feature: "Quality control",
        generalRepair: "Bergantung pada masing-masing pengrajin",
        inHouse: "QC dirancang untuk produksi, bukan perbaikan",
        soleSolution: "3x QC: QC Awal, QC Hasil Pengerjaan, dan QC Akhir",
      },
      {
        feature: "Dokumentasi",
        generalRepair: "Bervariasi",
        inHouse: "Dicatat manual di internal",
        soleSolution: "Kondisi sepatu didata sebelum dan sesudah pengerjaan",
      },
      {
        feature: "Kepastian waktu",
        generalRepair: "Tidak selalu ada target",
        inHouse: "Bergantung beban produksi",
        soleSolution: "Estimasi 10-15 hari kerja per batch",
      },
      {
        feature: "Skala order",
        generalRepair: "Umumnya satuan",
        inHouse: "Mengikuti prioritas internal",
        soleSolution: "Batch kecil hingga menengah",
      },
      {
        feature: "Pemantauan status",
        generalRepair: "Tanya via chat",
        inHouse: "Tidak terpusat",
        soleSolution: "Portal tracking",
      },
    ],
  },
  programs: {
    title: "Tiga Program Kerja Sama",
    subtitle: "Pilih model yang sesuai dengan kebutuhan Anda. Fokus kami: reglue dan jahit sol.",
    items: [
      {
        id: "program-restorasi-toko",
        number: "01",
        title: "Restorasi Stok Sepatu (Untuk Toko)",
        tagline: "Kembalikan kelayakan jual inventaris sepatu Anda dengan pengeleman ulang standar pabrik.",
        description:
          "Bagi toko sepatu, kondisi lem sol yang menguning, getas, atau lepas pada stok lama (deadstock) sering menjadi kendala penjualan. Kirimkan inventaris sepatu Anda secara massal ke workshop kami. Kami akan membersihkan residu dan me-ngelem ulang solnya agar kokoh dan kembali layak jual.",
        items: [
          "Pembersihan residu lem lama",
          "Reglue sol yang getas/lepas",
          "Jahit ulang sambungan sol (opsional)",
        ],
      },
      {
        id: "program-rework-stok",
        number: "02",
        title: "Rework Stok Produksi (untuk brand)",
        tagline: "Perbaikan cacat minor pada stok sebelum masuk rak penjualan.",
        description:
          "Sepatu dengan sol terangkat atau perekat berlebih tidak perlu dijual obral. Kami lakukan reglue ulang dan pembersihan residu lem agar layak jual.",
        items: [
          "Sortir unit cacat ringan",
          "Reglue area sol terangkat",
          "Pembersihan residu lem",
        ],
      },
      {
        id: "program-laundry",
        number: "03",
        title: "Reglue untuk Laundry & Jasa Perawatan",
        tagline: "Terima order reglue dari pelanggan Anda tanpa menambah teknisi atau alat.",
        description:
          "Pelanggan membawa sepatu dengan sol lepas, sementara Anda belum punya layanan reglue. Kirim ke workshop kami, kami kerjakan pengeleman ulang dan jahitnya, lalu sepatu kembali ke Anda untuk diserahkan ke pelanggan.",
        items: [
          "Reglue sol lepas",
          "Jahit ulang sambungan sol",
          "QC sebelum dikirim balik",
        ],
      },
    ],
  },
  workflow: {
    title: "Alur Kerja 7 Langkah",
    subtitle: "Bagaimana batch sepatu diproses dari kedatangan sampai siap dikirim kembali.",
    steps: [
      {
        step: 1,
        title: "Terima & Sortir",
        description: "Batch tiba di workshop. Tim mencocokkan jumlah fisik dengan daftar kiriman Anda.",
      },
      {
        step: 2,
        title: "QC Awal",
        description: "Kondisi sepatu dan jenis kerusakan sol serta jahitan diperiksa dan didata.",
      },
      {
        step: 3,
        title: "Pencatatan Batch",
        description: "Setiap unit dicatat agar alur tiap pasang sepatu jelas. Status dapat dipantau lewat portal tracking.",
      },
      {
        step: 4,
        title: "Pengerjaan di Jalur B2B",
        description: "Sepatu dikerjakan di ruang dan rak khusus B2B sesuai kebutuhan reglue atau jahit ulang.",
      },
      {
        step: 5,
        title: "QC Akhir",
        description: "Kekuatan rekat sol dan kerapian jahitan diperiksa sebelum sepatu keluar dari jalur kerja.",
      },
      {
        step: 6,
        title: "Pembersihan",
        description: "Sisa perekat dibersihkan dan sepatu dirapikan.",
      },
      {
        step: 7,
        title: "Pengiriman",
        description: "Sepatu dikemas dan dikirim kembali ke alamat Anda.",
      },
    ],
  },
  evidence: {
    title: "Dokumentasi Pengerjaan",
    subtitle: "Foto hasil kerja nyata di workshop kami.",
    partnerLogos: [],
    photos: [
      {
        id: "photo-main",
        title: "Proses Pengerjaan",
        caption: "Tim kami sedang mengerjakan sepatu di workshop",
        aspectClass: "aspect-[16/9]",
        tag: "Ruang Kerja",
        colSpanClass: "md:col-span-6",
        dummy: false,
        images: ["/pengerjaan2.png", "/pengerjaan3.png"],
      },
      {
        id: "photo-sq",
        title: "Peralatan Jahit & Mesin",
        caption: "Mesin industri khusus perbaikan sepatu",
        aspectClass: "aspect-[16/9]",
        tag: "Peralatan",
        colSpanClass: "md:col-span-6",
        dummy: false,
        images: ["/pengerjaan.png", "/mesin-industri.png"],
      },
      {
        id: "photo-rack",
        title: "Manajemen Rak B2B",
        caption: "Rak sepatu masuk dan rak sepatu hasil dipisah",
        aspectClass: "aspect-[16/9]",
        tag: "Area Rak",
        colSpanClass: "md:col-span-6",
        dummy: false,
        images: ["/rak b2b.png", "/rak after.png"],
      },
      {
        id: "photo-qc",
        title: "Quality Control",
        caption: "Pengecekan kualitas akhir sebelum dikirim",
        aspectClass: "aspect-[16/9]",
        tag: "QC",
        colSpanClass: "md:col-span-6",
        dummy: false,
        images: ["/QC.png"],
      },
    ],
    testimonials: [
      {
        id: "testi-1",
        quote: "Kerja sama dengan Sole Solution sangat membantu operasional laundry kami. Sepatu pelanggan yang solnya lepas bisa langsung di-reglue dengan rapi tanpa bekas lem, dan yang terpenting sepenuhnya white-label!",
        role: "Owner",
        companyType: "Premium Shoe Laundry",
        dummy: false,
      },
      {
        id: "testi-2",
        quote: "Sebagai brand lokal, kadang ada cacat minor pada pengeleman produksi. Tim Sole Solution bisa handle rework stok kami dengan cepat dan presisi. Proses QC-nya ketat banget, standar pabrik.",
        role: "Production Manager",
        companyType: "Local Footwear Brand",
        dummy: false,
      },
      {
        id: "testi-3",
        quote: "Dulu pusing cari vendor buat reparasi deadstock toko yang lemnya sudah getas. Sekarang tinggal kirim per batch ke Bandung, balik-balik sepatu sudah kokoh dan siap jual lagi.",
        role: "Founder",
        companyType: "Sneaker Store",
        dummy: false,
      }
    ],
  },
  faq: {
    title: "Pertanyaan yang Sering Diajukan",
    subtitle: "Informasi seputar cara kerja sama dan pengiriman batch sepatu.",
    items: [
      {
        id: "faq-1",
        question: "Jenis pekerjaan apa yang diterima?",
        answer: "Fokus kami reglue (pengeleman ulang) dan jahit ulang sol. Kebutuhan lain bisa dikonsultasikan lebih dulu.",
      },
      {
        id: "faq-2",
        question: "Berapa minimal jumlah pasang per batch?",
        answer: "Minimal 50 pasang per batch.",
      },
      {
        id: "faq-3",
        question: "Berapa lama pengerjaan?",
        answer: "Estimasi 10-15 hari kerja per batch.",
      },
      {
        id: "faq-4",
        question: "Bagaimana kerahasiaan brand kami dijaga?",
        answer: "Identitas dan produk Anda tidak kami publikasikan tanpa izin tertulis. Kami juga mendukung penandatanganan Perjanjian Kerahasiaan (NDA).",
      },
      {
        id: "faq-5",
        question: "Bagaimana sistem pembayarannya?",
        answer: "Skema pembayaran disesuaikan dengan skala dan jenis kerja sama, dibahas saat konsultasi.",
      },
      {
        id: "faq-6",
        question: "Bagaimana pengiriman dari luar kota?",
        answer: "Batch dikirim ke workshop kami di Bandung melalui ekspedisi kargo pilihan Anda, dan kami kirim kembali menggunakan metode yang sama setelah selesai.",
      },
      {
        id: "faq-7",
        question: "(Untuk laundry) Apakah sepatu dikembalikan atas nama bisnis kami?",
        answer: "Ya, tentu saja. Kami mendukung layanan white-label penuh sehingga sepatu akan dikirim kembali sepenuhnya atas nama bisnis Anda (tanpa menyertakan identitas Sole Solution).",
      },
    ],
  },
  cta: {
    title: "Mulai Bahas Kebutuhan Anda",
    description: "Kirim pesan ke WhatsApp kami untuk konsultasi awal: jenis sepatu, perkiraan volume, dan skema kerja sama.",
    buttonText: "Hubungi Kami Sekarang",
    note: "Pesan WhatsApp sudah terisi format awal kebutuhan Anda.",
  },
  footer: {
    copyright: "© 2026 Sole Solution. Hak Cipta Dilindungi.",
    workshopNotice: "Layanan reglue (lem & jahit) B2B (Bandung, sejak 2017).",
  },
};

export function createWhatsAppUrl(customParams?: {
  brandName?: string;
  volume?: string;
  issues?: string;
}): string {
  const phone = siteContent.brand.whatsappNumber;
  let text = siteContent.brand.whatsappDefaultMessage;

  if (customParams) {
    const brand = customParams.brandName || "";
    const vol = customParams.volume || "";
    const iss = customParams.issues || "";

    text = `Halo Tim Sole Solution,

Saya ingin konsultasi reglue B2B untuk bisnis kami:
- Nama Bisnis (Brand / Laundry): ${brand}
- Estimasi Volume per Bulan: ${vol}
- Jenis Kebutuhan: ${iss}

Mohon informasi alur kerja sama. Terima kasih!`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export const jalurB2B = {
  photo: "/grid.png",       
  photoMobile: "",   
  alt: "Area pengerjaan B2B Sole Solution di workshop Bandung",
  caption: "Sole Solution, Bandung, sejak 2017.",
  dummy: false,
  spots: [
    { id: "rak",   label: "Rak B2B",              x: 15, y: 25, xm: 15, ym: 25,
      text: "Sepatu brand disimpan di rak sendiri, tidak bercampur dengan antrean ritel.",
      notes: "SOP: rak B2B terpisah.", image: "/rak b2b.png" },
    { id: "kerja", label: "Ruang Pengerjaan B2B", x: 55, y: 25, xm: 55, ym: 25,
      text: "Reglue dan jahit sol dikerjakan di ruang khusus B2B.",
      notes: "SOP: ruang pengerjaan B2B.", image: "/pengerjaan3.png" },
    { id: "qc",    label: "Area QC",              x: 15, y: 75, xm: 15, ym: 75,
      text: "Diperiksa dua kali: saat masuk dan sebelum dikirim kembali.",
      notes: "VERIFIKASI: QC awal dan QC akhir di area yang sama?", image: "/QC.png" },
    { id: "hasil", label: "Rak Hasil",            x: 65, y: 75, xm: 65, ym: 75,
      text: "Sepatu yang selesai menunggu di rak hasil B2B sebelum dikirim.",
      notes: "SOP: rak hasil B2B.", image: "/rak after.png" },
  ],
};
