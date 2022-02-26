const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papansKor = document.querySelectorAll('.papan-skor');
const pop = document.querySelectorAll('#pop')

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.leght);
    const tRandom = tanah[t];
    if (tRandom == tanahSebelumnya) {
      randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  }