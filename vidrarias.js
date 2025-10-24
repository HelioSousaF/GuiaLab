const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modal-titulo");
const modalImg = document.getElementById("modal-img");
const modalTexto = document.getElementById("modal-texto");
const fechar = document.querySelector(".fechar");

const conteudo = {
  "destilacao": {
    titulo: "Balão de Destilação",
    img: "imagens/balao_destilacao.png",
    texto: "O balão de destilação é utilizado para separar líquidos com diferentes pontos de ebulição. Deve ser aquecido uniformemente sobre manta aquecedora. É importante não enchê-lo completamente e fixá-lo firmemente no suporte para evitar acidentes."
  },
  "fundo-redondo": {
    titulo: "Balão de Fundo Redondo",
    img: "imagens/redondo.png",
    texto: "Ideal para aquecimento de soluções em processos de ebulição controlada. Seu fundo arredondado distribui o calor de forma homogênea. Deve ser usado com suporte e presilha, evitando o contato direto com a chama."
  },
  "volumetrico": {
    titulo: "Balão Volumétrico",
    img: "imagens/volumetrico.png",
    texto: "Usado para preparar soluções com precisão. Deve ser preenchido até a marca de aferição no pescoço do balão, com a menisco tocando a linha de marca. Não é indicado para aquecimento."
  },
  "bequer": {
    titulo: "Béquer",
    img: "imagens/bequer.png",
    texto: "O béquer é uma vidraria versátil para reações químicas, dissoluções e aquecimento de líquidos. Deve ser colocado sobre tela de amianto para evitar choques térmicos. Limpe-o com água destilada após o uso."
  },
  "erlenmeyer": {
    titulo: "Erlenmeyer",
    img: "imagens/erlen.png",
    texto: "Amplamente usado em titulações e preparo de soluções. Seu formato cônico evita respingos e facilita a agitação. Pode ser fechado com rolha ou papel alumínio para evitar contaminações."
  },
  "cubeta": {
  titulo: "Cubeta",
  img: "imagens/cubeta.png",
  texto: "Usada em espectrofotômetros para medir absorbância. Deve estar limpa e seca para evitar distorções ópticas."
},
"dessecador": {
  titulo: "Dessecador",
  img: "imagens/esqueci.png",
  texto: "Serve para armazenar amostras livres de umidade. Contém sílica gel no interior para manter a secagem."
},
"lamina": {
  titulo: "Lâmina de Microscópio",
  img: "imagens/lamina.png",
  texto: "Base de vidro fina usada para colocar amostras observadas ao microscópio. Deve ser limpa e manuseada pelas bordas."
},
"microplaca": {
  titulo: "Microplaca",
  img: "imagens/micro.png",
  texto: "Usada para ensaios bioquímicos e análises de microescala. Cada poço pode conter uma amostra diferente."
},
"perolas": {
  titulo: "Pérolas de Vidro",
  img: "imagens/perolas.png",
  texto: "Usadas em frascos e tubos para melhorar a agitação e evitar fervura irregular."
},
"placa-cultivo": {
  titulo: "Placa de Cultivo Celular",
  img: "imagens/celular.png",
  texto: "Usada para cultivar células e tecidos em ambiente estéril. Deve ser mantida em incubadora controlada."
},
"placa-kline": {
  titulo: "Placa de Kline",
  img: "imagens/kn.png",
  texto: "Usada em testes sorológicos e reações imunológicas. Deve ser limpa e seca antes de cada uso."
},
"placa-petri": {
  titulo: "Placa de Petri",
  img: "imagens/dexter.png",
  texto: "Usada para o cultivo de microrganismos. Deve ser esterilizada antes e após o uso."
},
"vidro-relogio": {
  titulo: "Vidro de Relógio",
  img: "imagens/relogio.png",
  texto: "Serve para evaporação de líquidos ou cobertura de recipientes. Manipule pelas bordas para evitar sujeira."
}
};

// Abre modal ao clicar
document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("click", () => {
    const id = item.getAttribute("data-item");
    modalTitulo.textContent = conteudo[id].titulo;
    modalImg.src = conteudo[id].img;
    modalTexto.textContent = conteudo[id].texto;
    modal.style.display = "flex";
  });
});

// Fechar modal
fechar.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
