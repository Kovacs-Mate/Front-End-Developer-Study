alert('üdvözöljük')
document.write(Date())
console.log('1.blokk kezdete')
console.log('2.blokk kezdete')
document.write('Helló világ!')
console.log('2. blokk vége')

let testtomeg = prompt('Mi a testtömeged? (kg)');
//A testmagasság bekérése
let testmagassag = prompt('Milyen magas vagy? (cm)') / 100;

let tti = (testtomeg / (testmagassag * testmagassag)).toFixed(2);

document.write('<p>A testtömegindexed ' + tti + '</p>');


