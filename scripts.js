let numero = Number(prompt("Digite um número para verificar se e primo:"));


let Primo = true;

if (numero < 2) {
    Primo = false;
} else {
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            Primo = false;
            break;
        }
    }
}

if (Primo) {
    alert(numero + " e um numero primo.");
} else {
    alert(numero + " nao e um numero primo.");
}
