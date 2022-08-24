let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if (produtoA.internacional === true) {
    console.log(`O produto ${produtoA.nome} é internacional e custa ${produtoA.valor}. Portanto pagará ${produtoA.valor*1.2} com imposto.`);
} else {
    console.log(`O produto ${produtoA.nome} é nacional e custa ${produtoA.valor}. Portanto pagará ${produtoA.valor*1.12} com imposto.`);
}

if (produtoB.internacional === true) {
    console.log(`O produto ${produtoB.nome} é internacional e custa ${produtoB.valor}. Portanto pagará ${produtoB.valor*1.2} com imposto.`);
} else {
    console.log(`O produto ${produtoB.nome} é nacional e custa ${produtoB.valor}. Portanto pagará ${produtoB.valor*1.12} com imposto.`);
}

if (produtoC.internacional === true) {
    console.log(`O produto ${produtoC.nome} é internacional e custa ${produtoC.valor}. Portanto pagará ${produtoC.valor*1.2} com imposto.`);
} else {
    console.log(`O produto ${produtoC.nome} é nacional e custa ${produtoC.valor}. Portanto pagará ${produtoC.valor*1.12} com imposto.`);
}