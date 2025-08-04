let listaDeAmigos = [];
let nomeInserido;
let nomes = 2;

const botaoAdicionar = document.querySelector('.button-add');
botaoAdicionar.addEventListener('click', adicionarAmigo);

const botaoSortear = document.querySelector('.button-draw');
botaoSortear.addEventListener('click', sortearAmigo);

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let amigo = listaDeAmigos[i];
        let elementoLista = document.createElement('li');
        elementoLista.textContent = amigo; // Exibe apenas o nome do amigo
        lista.appendChild(elementoLista);
    }
}

function adicionarAmigo(){
    let nome = document.querySelector('input[type=text]').value;
    nomeInserido = nome;
    //VERIFICANDO SE O NOME EXISTE NA LISTA
    if (listaDeAmigos.includes(nome)) {
        alert('Nome já existente no sorteio');
        return;
    } else {
        listaDeAmigos.push(nome);
        limparCampo();
        exibirListaDeAmigos();
        alert('Amigo adicionado com sucesso!');
    }
}

function sortearAmigo(){
    // VERIFICAR SE TEM PELO MENOS 2 NOMES
    if (listaDeAmigos.length < 2) {
        alert('É necessário ter pelo menos dois amigos para o sorteio');
        return;
    }

    let sorteiaAmigoSecreto = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSecreto = listaDeAmigos[sorteiaAmigoSecreto];

    //NÃO SE TIRAR
    if (amigoSecreto === nomeInserido) {
        return sortearAmigo(); // Sorteia novamente
    } else {
        exibirTextoNaTela('h1', `Seu amigo secreto é ${amigoSecreto}`)
        return;
    }
}

function limparCampo() {
    let listaTotal = document.getElementById('listaAmigos');
    //document.querySelector('input').value = '';
    listaTotal.innerHTML = '';



        totalDeAmigos++;
    }

