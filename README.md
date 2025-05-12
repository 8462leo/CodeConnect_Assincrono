# CodeConnect! - Interface de Publicação de Projetos

Este código representa a interface de usuário para a publicação de novos projetos em uma plataforma chamada "CodeConnect!". Permite aos usuários carregar uma imagem, inserir o nome e a descrição do projeto, adicionar tags relevantes e, finalmente, publicar ou descartar a submissão.

## Funcionalidades Principais

* **Carregamento de Imagem:** Os usuários podem carregar uma imagem para o projeto através de um botão dedicado. Há validações para garantir que o arquivo selecionado seja uma imagem e não exceda 2MB. A imagem carregada é exibida na interface.
* **Nome do Projeto:** Um campo de texto permite que os usuários definam um nome para o projeto.
* **Descrição do Projeto:** Uma área de texto oferece espaço para os usuários fornecerem uma descrição detalhada do projeto.
* **Tags:** Um sistema de tags permite que os usuários associem palavras-chave ao projeto. As tags são inseridas em um campo de texto e adicionadas à uma lista ao pressionar "Enter". Há uma funcionalidade que simula a verificação de tags disponíveis (uma lista predefinida de tags como "Front-end", "Back-end", "JavaScript", etc.). As tags adicionadas podem ser removidas individualmente.
* **Publicação:** Um botão "Publicar" simula o processo de envio do projeto. Uma mensagem de sucesso ou erro é exibida após uma simulação de tempo de espera.
* **Descarte:** Um botão "Descartar" limpa todos os campos do formulário, remove a imagem carregada e as tags adicionadas, permitindo que o usuário comece novamente.
* **Navegação:** Uma barra lateral (aside) oferece links para outras seções da plataforma: "Publicar" (a página atual), "Feed", "Perfil", "Sobre nós" e "Sair".

## Estrutura do Código

O código é composto por três arquivos principais:

* **`index.html`:** Contém a estrutura HTML da página, incluindo os elementos para carregamento de imagem, formulário de descrição, entrada de tags, lista de tags e botões de ação. Também inclui a barra de navegação lateral.
* **`scripts.js`:** Contém a lógica JavaScript para adicionar interatividade à página. Isso inclui:
    * Manipulação do clique no botão de upload para abrir o diálogo de seleção de arquivos.
    * Validação do tipo e tamanho do arquivo de imagem carregado.
    * Leitura e exibição da imagem carregada.
    * Adição de tags à lista ao pressionar "Enter" no campo de tags, com uma simulação de verificação de tags disponíveis.
    * Remoção de tags da lista ao clicar no ícone de "fechar".
    * Simulação da publicação do projeto com uma promise e exibição de um alerta.
    * Implementação da funcionalidade do botão "Descartar" para limpar o formulário e redefinir a imagem e as tags.
* **`styles.css`:** Contém as regras de estilo CSS para a apresentação visual da página, incluindo cores, fontes, layouts e responsividade. Utiliza variáveis CSS para facilitar a manutenção das cores e outros estilos.

## Imagens Utilizadas

O projeto utiliza as seguintes imagens, localizadas na pasta `./img/`:

* `Logo.svg`: Logotipo do CodeConnect.
* `feed.svg`: Ícone para a seção de Feed.
* `account_circle.svg`: Ícone para a seção de Perfil.
* `info.svg`: Ícone para a seção "Sobre nós".
* `logout.svg`: Ícone para a função de Sair.
* `imagem1.png`: Imagem padrão exibida inicialmente.
* `close.svg`: Ícone para remover a imagem carregada.
* `close-black.svg`: Ícone para remover tags.
* `upload.svg`: Ícone para o botão de carregar imagem.
* `trash.svg`: Ícone para o botão de descartar.
* `arrow_forward2.svg`: Ícone para o botão de publicar.

Certifique-se de que a pasta `img` com essas imagens esteja localizada no mesmo diretório dos arquivos HTML, CSS e JavaScript para que a interface funcione corretamente.

## Como Utilizar

1.   Certifique-se de ter todos os arquivos (`index.html`, `styles.css`, `scripts.js`) e a pasta `img` com as imagens no mesmo diretório.
2.   Abra o arquivo `index.html` em seu navegador web.
3.   Você poderá interagir com a interface para carregar uma imagem, inserir os detalhes do projeto e adicionar tags.
4.   Os botões "Publicar" e "Descartar" simularão suas respectivas ações com alertas informativos.

Este código fornece uma base para a funcionalidade de publicação de projetos em uma plataforma web, com foco na experiência do usuário através de uma interface clara e interativa.
