// soal 1
console.log('LOOPING PERTAMA');
var flag = 2;
while (flag < 21) {
  console.log(flag + ' - i love coding');
  flag = flag + 2;
}
console.log('LOOPING KEDUA');
var haha = 20;
while (haha > 1) {
  console.log(haha + ' - i love coding');
  haha = haha - 2;
}

// soal 2
console.log('LOOPING PERTAMA');
for (var angka = 1; angka < 21; angka++) {
  console.log(angka + ' - i love coding');
}
console.log('LOOPING KEDUA');
for (var haha = 20; haha >= 1; haha--) {
  console.log(haha + ' - i will become fullstack developer');
}

// soal 3
for (var i = 1; i < 101; i++) {
  if (i % 2 == 0) {
    console.log(i + ' adalah bilangan genap');
  } else {
    console.log(i + ' adalah bilangan ganjil');
  }
}
