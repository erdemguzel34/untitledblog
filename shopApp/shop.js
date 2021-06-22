let bakiye = 100.00;
let ekmek_1adet = 2.00;
let sogan_1kg = 3.75;
let domates_1kg = 3.00;
let danaKıyma_1kg = 47.00;

console.log(bakiye / ekmek_1adet);
console.log(bakiye / sogan_1kg);
console.log(bakiye / domates_1kg);
console.log(bakiye / danaKıyma_1kg);
// Yukarıdaki kod mevcut bakiye ile kaç kg ya da adet alınabileceğini verir.

let hesap = ekmek_1adet + sogan_1kg + domates_1kg + danaKıyma_1kg;
console.log(hesap);

bakiye = bakiye - hesap;
console.log(bakiye);