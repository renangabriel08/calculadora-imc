const inicio = document.querySelector('.inicio');
const calculadora = document.querySelector('.calculadora');
const resultado = document.querySelector('.resultado');

function trocaDiv (divAtual, proximaDiv) {
    let displayNone
    let displayFlex

    if (divAtual == 1) {
        displayNone = inicio;
    } else if (divAtual == 2) {
        displayNone = calculadora;
    } else {
        displayNone = resultado;
    }
    displayNone.style.display = 'none';

    if (proximaDiv == 1) {
        displayFlex = inicio;
    } else if (proximaDiv == 2) {
        displayFlex = calculadora;
    } else {
        displayFlex = resultado;
    }
    displayFlex.style.display = 'flex';
}

function validar() {
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');

    if(!peso.value || !altura.value) {
        if (!peso.value && !altura.value) {
            peso.style.border = 'solid 1px red';
            altura.style.border = 'solid 1px red';
        } else if (!peso.value) {
            peso.style.border = 'solid 1px red';
            altura.style.border = 'none';
        } else if (!altura.value) {
            altura.style.border = 'solid 1px red';
            peso.style.border = 'none';
        }
    } else {
        let imc = peso.value / (altura.value * altura.value);
        const valorResultado = document.getElementById ('resultado');

        if (imc<18.5) {
            valorResultado.innerHTML = 'Abaixo do peso normal';
            valorResultado.style.color = 'yellow'
        }
        else if (imc>18.4 && imc<25) {
            valorResultado.innerHTML = 'Peso normal';
            valorResultado.style.color = 'green'
        }
        else if (imc>24.9 && imc<30) {
            valorResultado.innerHTML = 'Excesso de peso';
            valorResultado.style.color = 'yellow'
        }
        else if (imc>29.9 && imc<35) {
            valorResultado.innerHTML = 'Obesidade classe 1';
            valorResultado.style.color = 'red'
        }
        else if (imc>34.9 && imc<40) {
            valorResultado.innerHTML = 'Obesidade classe 2';
            valorResultado.style.color = 'red'
        }
        else if (imc>=40) {
            valorResultado.innerHTML = '| Obesidade classe 3';
            valorResultado.style.color = 'red'
        }
        trocaDiv(2, 3);
    }
}