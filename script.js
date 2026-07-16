// ===============================
// EFEITO DE DIGITAÇÃO
// ===============================

const texto = [
    "Desenvolvedora Web",
    "Estudante de ADS",
    "Apaixonada por Tecnologia",
    "Em busca da primeira oportunidade"
];

let contadorTexto = 0;
let contadorLetra = 0;
let apagando = false;

const elemento = document.getElementById("digitando");

function escrever() {

    const palavra = texto[contadorTexto];

    if (!apagando) {

        elemento.textContent = palavra.substring(0, contadorLetra++);
        
        if (contadorLetra > palavra.length) {
            apagando = true;
            setTimeout(escrever, 1500);
            return;
        }

    } else {

        elemento.textContent = palavra.substring(0, contadorLetra--);

        if (contadorLetra < 0) {
            apagando = false;
            contadorTexto = (contadorTexto + 1) % texto.length;
        }

    }

    setTimeout(escrever, apagando ? 50 : 100);
}

escrever();


// ===============================
// MODO ESCURO
// ===============================

const botaoDark = document.getElementById("darkMode");

botaoDark.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        botaoDark.innerHTML = '<i class="fas fa-sun"></i>';
    }else{
        botaoDark.innerHTML = '<i class="fas fa-moon"></i>';
    }

});


// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const topo = document.getElementById("topo");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        topo.style.display = "block";
    }else{
        topo.style.display = "none";
    }

});

topo.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// ===============================
// ANIMAÇÃO AO ROLAR
// ===============================

const secoes = document.querySelectorAll("section");

function revelar(){

    const altura = window.innerHeight * 0.85;

    secoes.forEach(secao => {

        const topoSecao = secao.getBoundingClientRect().top;

        if(topoSecao < altura){
            secao.classList.add("mostrar");
        }

    });

}

window.addEventListener("scroll", revelar);

revelar();
