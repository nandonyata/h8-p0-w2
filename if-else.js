// untuk nama = '' dan peran = ''
var nama = '';
var peran = '';
var defaultName;

if (nama) {
  defaultName = nama;
} else {
  defaultName = 'Nama harus diisi!';
}

console.log(defaultName);

// untuk nama = 'mikael' dan peran = ''
var nama = 'mikael';
var peran = '';

if (true) {
  console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
}

//untuk nama = 'nina' dan peran = 'ksatria'
var nama = 'nina';
var peran = 'ksatria';

if (nama) {
  console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
} else {
  console.log('masukkan nama');
}

console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`);

// untuk nama = 'danu' dan peran = 'tabib'
var nama = 'danu';
var peran = 'tabib';

if (nama) {
  console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
} else {
  console.log('masukkan nama!');
}

console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`);

// untuk nama = 'zero' dan peran = 'penyihir'
var nama = 'zero';
var peran = 'penyihir';

if (nama) {
  console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
} else {
  console.log('masukkan nama!');
}

console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`);
