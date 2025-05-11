const uploadBtn = document.querySelector("#upload-btn"); // Botão de upload
const inputUpload = document.querySelector("#imagem-upload"); // Input de upload

uploadBtn.addEventListener("click", () => {
  // Adiciona o evento de clique ao botão de upload
  inputUpload.click(); // Simula o clique no input de upload
});

document.querySelector("#imagem-upload").addEventListener("change", (event) => {
  // Adiciona o evento de mudança ao input de upload
  const file = event.target.files[0]; // Pega o primeiro arquivo selecionado
  if (!file.type.match("image.*")) {
    // Verifica se o arquivo é uma imagem
    alert("Por favor, selecione uma imagem."); // Alerta se não for uma imagem
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    // Verifica se o arquivo é maior que 2MB
    alert("Por favor, selecione uma imagem menor que 2MB."); // Alerta se for maior
    return;
  }
});

function lerConteudoDoArquivo(arquivo) {
  return new Promise((resolve, reject) => {
    const leitor = new FileReader(); // Cria um novo FileReader
    leitor.onload = () => {
      // Adiciona o load ao FileReader
      resolve({ url: leitor.result, nome: arquivo.name }); // Resolve a promise com o resultado
    };
    leitor.onerror = () => {
      // Adiciona o evento de erro ao FileReader
      reject(`Erro ao ler o arquivo ${arquivo.name}`); // Rejeita a promise com um erro
    };
    leitor.readAsDataURL(arquivo); // Lê o arquivo como URL de dados
  });
}

const imagemPrincipal = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

inputUpload.addEventListener("change", async (evento) => {
  const arquivo = evento.target.files[0];

  if (arquivo) {
    try {
      const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
      imagemPrincipal.src = conteudoDoArquivo.url;
      nomeDaImagem.textContent = conteudoDoArquivo.nome;
    } catch (erro) {
      console.error("Erro na leitura do arquivo");
    }
  }
});

const inputTags = document.getElementById("input-tags"); // Seleciona o input de tags
const listaTags = document.getElementById("lista-tags"); // Seleciona a lista de tags

const tagsDisponiveis = [
  "Front-end",
  "Back-end",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Node.js",
]; // Array de tags disponíveis

async function verificaTagsDisponiveis(tag) {
  // Agora a função recebe a tag como argumento
  return new Promise((resolve) => {
    // Retorna uma promise
    setTimeout(() => {
      // Simula uma chamada assíncrona
      resolve(tagsDisponiveis.includes(tag)); // Verifica se a tag recebida está disponível
    }, 200); // Simula uma chamada assíncrona
  });
}

inputTags.addEventListener("keypress", async (evento) => {
  // Adiciona o evento de tecla pressionada ao input de tags
  if (evento.key === "Enter") {
    // Verifica se a tecla pressionada é Enter
    evento.preventDefault(); // Previne o comportamento padrão
    const tagTexto = inputTags.value.trim(); // Pega o valor do input e remove espaços em branco
    if (tagTexto !== "") {
      // Verifica se o valor não está vazio
      try {
        //  Tenta executar o código
        const tagExiste = await verificaTagsDisponiveis(tagTexto); // Passa tagTexto como argumento
        if (tagExiste) {
          // Verifica se a tag existe
          const tagNova = document.createElement("li"); // Cria um novo elemento li
          tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`; // Adiciona o texto e o botão de remover
          listaTags.appendChild(tagNova); // Adiciona a nova tag à lista
          inputTags.value = ""; // Limpa o input
        } else {
          // Se a tag não existe
          alert("Tag não foi encontrada."); // Alerta que a tag não foi encontrada
        }
      } catch (error) {
        // Se ocorrer um erro
        console.error("Erro ao verificar a existência da tag"); // Loga o erro no console
        alert("Erro ao verificar a existência da tag. Verifique o console."); // Alerta o usuário
      }
    }
  }
});

listaTags.addEventListener("click", (evento) => {
  // Adiciona o evento de clique à lista de tags
  if (evento.target.classList.contains("remove-tag")) {
    // Verifica se o elemento clicado tem a classe remove-tag
    const tagRemover = evento.target.parentNode; // Pega o elemento pai do botão de remover
    listaTags.removeChild(tagRemover); // Remove a tag da lista
  }
}); // Adiciona o evento de clique à lista de tags

const botaoPublicar = document.querySelector(".botao-publicar"); // Seleciona o botão de publicar

function publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto) {
  // Função para publicar o projeto
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simula uma chamada assíncrona
      const deuCerto = Math.random() > 0.5;

      if (deuCerto) {
        // Se deu certo
        resolve("Projeto publicado com sucesso!"); // Resolve a promise com sucesso
      } else {
        // Se não deu certo
        reject("Erro ao publicar o projeto."); // Rejeita a promise com erro
      }
    }, 2000); // Simula um tempo de espera
  });
}

botaoPublicar.addEventListener("click", async (evento) => {
  //  Adiciona o evento de clique ao botão de publicar
  evento.preventDefault(); // Previne o comportamento padrão

  const nomeDoProjeto = document.getElementById("nome").value; // Pega o valor do input de nome do projeto
  const descricaoDoProjeto = document.getElementById("descricao").value; // Pega o valor do input de descrição do projeto
  const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map(
    (tag) => tag.textContent
  ); // Pega as tags da lista e transforma em um array de texto

  try {
    // Tenta executar o código
    const mensagem = await publicarProjeto(
      nomeDoProjeto,
      descricaoDoProjeto,
      tagsProjeto
    ); // Chama a função de publicar projeto
    alert(mensagem); // Alerta a mensagem de sucesso
  } catch (erro) {
    // Se ocorrer um erro
    console.error(erro); // Loga o erro no console
    alert(erro); // Alerta o usuário
  }
});

botaoDescartar.addEventListener("click", (evento) => {
  // Adiciona o evento de clique ao botão de descartar
  evento.preventDefault(); // Previne o comportamento padrão

  const formulario = document.querySelector("form"); // Seleciona o formulário
  formulario.reset(); //  Reseta o formulário

  imagemPrincipal.src = "./img/imagem1.png"; // Reseta a imagem principal
  nomeDaImagem.textContent = "image_projeto.png"; // Reseta o nome da imagem

  listaTags.innerHTML = ""; // Limpa a lista de tags
});
