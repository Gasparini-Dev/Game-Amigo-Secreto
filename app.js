//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Declara um array para armazenar nomes
const amigos = [];

// Seleciona os elementos do DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nome = inputAmigo.value.trim(); // Captura o valor do campo de entrada e remove espaços extras

    // Valida a entrada
    if (nome === "") {
        alert("Por favor, insira um nome."); // Exibe um alerta se o campo estiver vazio
        return;
    }

    // Atualiza o array de amigos
    amigos.push(nome);

    // Atualiza a lista exibida no HTML
    atualizarListaAmigos();

    // Limpa o campo de entrada
    inputAmigo.value = "";
}

// Função para atualizar a lista exibida na página
function atualizarListaAmigos() {
    // Limpa a lista HTML existente
    listaAmigos.innerHTML = "";

    // Percorre o array de amigos e cria elementos <li>
    for (const amigo of amigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    // Valida se há amigos no array
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
        return;
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado na tela
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}




