// Ambil tombol back to top
var backToTopBtn = document.getElementById("back-to-top-btn");

// Tambahkan event listener saat pengguna melakukan scroll
window.addEventListener("scroll", function() {
  if (window.pageYOffset > 300) { // Jika jarak scroll dari atas lebih dari 300 piksel
    backToTopBtn.style.display = "block"; // Tampilkan tombol back to top
  } else {
    backToTopBtn.style.display = "none"; // Sembunyikan tombol back to top
  }
});

// Tambahkan event listener saat tombol back to top diklik
backToTopBtn.addEventListener("click", function() {
  window.scrollTo(0, 0); // Scroll halaman kembali ke bagian atas
});
