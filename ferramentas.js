const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modal-titulo");
const modalImg = document.getElementById("modal-img");
const modalTexto = document.getElementById("modal-texto");
const fechar = document.querySelector(".fechar");

const conteudo = {
    // Conteúdos para a lista definitiva de Equipamentos e Utensílios
    "balanca": {
        titulo: "Balança Digital",
        img: "imagens/balança_digital.png",
        texto: "Usada para medições de massa de alta precisão. Deve ser sempre nivelada, protegida de vibrações e correntes de ar, e tarada (zerada) antes de cada pesagem. Mantenha a limpeza constante da plataforma."
    },
    "phmetro": {
        titulo: "PHmetro de Bancada",
        img: "imagens/ph.png",
        texto: "Equipamento eletrônico usado para medir o pH (acidez ou basicidade) com alta precisão. O eletrodo deve ser calibrado regularmente e mantido hidratado em solução de armazenamento."
    },
    "microscopio": {
        titulo: "Microscópio Digital",
        img: "imagens/micro_digital.png",
        texto: "Permite a observação de estruturas microscópicas e a captura de imagens digitais em um computador. Ideal para demonstrações em grupo ou aulas práticas interativas."
    },
    "manta": {
        titulo: "Manta Aquecedora",
        img: "imagens/lembrei.png",
        texto: "Equipamento elétrico que fornece aquecimento uniforme e controlado, especialmente para balões de fundo redondo, sendo ideal para líquidos inflamáveis, pois não usa chama aberta."
    },
    "estufa": {
        titulo: "Estufa",
        img: "imagens/estufa.png",
        texto: "Equipamento essencial para secagem de materiais (evitando umidade em vidrarias ou amostras) e para esterilização de instrumentos a seco. Deixe os itens esfriarem antes de retirá-los."
    },
    "banho-maria": {
        titulo: "Banho-Maria",
        img: "imagens/banho maria.png",
        texto: "Usado para incubar amostras ou reagentes em temperatura constante e precisa, utilizando água quente. É ideal para reações sensíveis à variação de temperatura."
    },
    "bomba": {
        titulo: "Bomba de Vácuo",
        img: "imagens/bomba.png",
        texto: "Equipamento usado para reduzir a pressão em sistemas fechados, como no Kitassato para filtração rápida ou em sistemas de destilação. Requer manutenção periódica do óleo e filtros."
    },
    "microcentrifuga": {
        titulo: "Microcentrífuga",
        img: "imagens/microcentrifuga.png",
        texto: "Equipamento de bancada que gira pequenos tubos (microtubos) a alta velocidade para separar componentes. Sempre equilibre o rotor com tubos de massa igual opostos antes de ligar."
    },
    "pipetador": {
        titulo: "Pipetador",
        img: "imagens/pipetador.png",
        texto: "O Pipetador é usado para criar vácuo e preencher pipetas de forma segura, garantindo que líquidos perigosos não sejam aspirados pela boca. Permite um controle fino do volume aspirado e dispensado."
    },
    "filtro": {
        titulo: "Filtro de Papel",
        img: "imagens/filtro de papel.png",
        texto: "Material consumível descartável, utilizado para separar componentes sólidos de uma mistura líquida, geralmente em conjunto com um funil. Deve ser dobrado corretamente para caber no funil."
    },
    "papel-ph": {
        titulo: "Papel Indicador de pH",
        img: "imagens/papel indicador de ph.png",
        texto: "Pequena tira de papel que muda de cor de acordo com o pH da solução. É um método rápido para estimar acidez/basicidade, mas menos preciso que o PHmetro."
    },
    "caixa-crio": {
        titulo: "Caixa para Tubo Criogênico",
        img: "imagens/caixa para tubo.png",
        texto: "Caixa plástica ou de papelão projetada para organizar e armazenar tubos de amostras que precisam ser mantidas em temperaturas ultrabaixas, como em freezers -80°C ou nitrogênio líquido."
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