// Ativar link

const links = Array.from(document.querySelectorAll('.header-menu a'))
links.forEach(ativarLinks)

function ativarLinks(link) {
  const url = location.href
  const href = link.href
  if(url.includes(href)) {
    link.classList.add('ativo')
  }
}

// Parâmetros para o orçamento

const parametros = new URLSearchParams(location.search)
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro)
  if(elemento) {
    elemento.checked = true
  }
}
parametros.forEach(ativarProduto)

// Perguntas Frequentes

const perguntas = Array.from(document.querySelectorAll('.perguntas button'))
perguntas.forEach(adicionarClique)

function adicionarClique(pergunta) {
  pergunta.addEventListener('click', mostrarResposta)
}

function mostrarResposta(button) {
  const pergunta = button.currentTarget
  const controle = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(controle)


  resposta.classList.toggle('ativa')
  const ativo = resposta.classList.contains('ativa')
  pergunta.setAttribute('aria-expanded', ativo)
}

// Galeria Bicicletas

const imagens = document.querySelectorAll('.bicicleta-imgs img')
const galeriaImagens = document.querySelector('.bicicleta-imgs')

imagens.forEach(ativarClique)
function ativarClique(imagem) {
  imagem.addEventListener('click', trocarImagem)
}
function trocarImagem(imagem) {
  const imagemClicada = imagem.currentTarget

  const media = matchMedia('(min-width: 1000px)').matches

  if(media) {
    galeriaImagens.prepend(imagemClicada)
  }

}

// Animação Plugin


if(window.SimpleAnime) {
  new SimpleAnime()
}