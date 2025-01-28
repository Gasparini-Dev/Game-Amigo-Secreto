## Pré-requisitos
Para executar o projeto, você precisa de:
- Um navegador web atualizado.
- (Opcional) Um editor de código, como Visual Studio Code, para realizar alterações.

## Como Executar o Projeto
1. Faça o download ou clone este repositório:
  
   git@github.com:Gasparini-Dev/Game-Amigo-Secreto.git

  
2. Abra o arquivo `index.html` diretamente no navegador ou utilize uma extensão para servidores locais, como Live Server, no Visual Studio Code.

## Estrutura do Projeto
A estrutura de arquivos é a seguinte:
```
/
├── index.html         # Arquivo principal da aplicação
├── style.css          # Estilos visuais (opcional)
├── app.js             # Lógica da aplicação em JavaScript
└── assets/            # Pasta para imagens e ícones usados na interface
```

## Como Utilizar
1. Insira o nome de um amigo no campo de texto e clique no botão "Adicionar".
2. Repita o processo até que todos os amigos estejam na lista.
3. Clique no botão "Sortear amigo" para realizar o sorteio.
4. O nome sorteado será exibido na tela.

## Funcionalidades Futuras
- Permitir a remoção de nomes da lista.
- Evitar a repetição de nomes ao adicionar.
- Salvar a lista de amigos localmente (usando Local Storage).

## Possíveis Problemas e Soluções
- **A lista de amigos não é exibida:** Certifique-se de que o arquivo `app.js` está corretamente vinculado ao `index.html`.
- **Nada acontece ao clicar no botão "Sortear amigo":** Verifique se há nomes adicionados à lista antes de sortear.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma *issue* ou enviar um *pull request* com sugestões e melhorias.
