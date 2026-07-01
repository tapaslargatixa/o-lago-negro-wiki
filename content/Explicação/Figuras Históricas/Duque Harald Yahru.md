---
cssclasses:
  - dashboard-lago
---

![[da43ae365e18854bde973b78babb95d6 (1).webp]]
### O Leão de Yahru • Herdeiro do Sangue Real • Senhor do Ducado de Yahru

> _"Reis recebem coroas. Soberanos conquistam o direito de usá-las."_  
> — Harald Yahru

Poucos nobres em Middangeard carregam um sobrenome tão antigo quanto **Harald Yahru**. Senhor do Ducado de Yahru e descendente direto da linhagem que governou parte do antigo Reino dos Menn antes da unificação promovida por Gilgamesh, Harald jamais escondeu o orgulho de seu sangue. Em sua corte, os retratos dos antigos reis ocupam posição de destaque, e toda cerimônia começa com a leitura da genealogia da Casa Yahru, uma tradição preservada há séculos. Para muitos, trata-se apenas de vaidade; para Harald, é um lembrete constante de que sua família governava homens quando outras ainda aprendiam a erguer muralhas.

Criado entre estrategistas, juristas e comandantes militares, Harald recebeu uma educação destinada a formar um governante, não um guerreiro. Desde muito jovem demonstrou uma inteligência incomum para a política, aprendendo a transformar alianças em armas tão eficientes quanto qualquer exército. Poucos conseguem igualá-lo em negociações, e menos ainda percebem quando já foram manipulados por suas palavras. Sua reputação como estrategista é tamanha que diversos conflitos entre ducados foram encerrados antes mesmo de uma única espada ser desembainhada, simplesmente porque Harald convenceu seus adversários de que lutar seria um erro.

Sua personalidade, entretanto, é tão admirada quanto criticada. Astuto, refinado e dono de uma confiança quase inabalável, Harald frequentemente ultrapassa a linha que separa a segurança da arrogância. Ele raramente trata outros governantes como iguais, acreditando que poucos possuem a capacidade necessária para conduzir um reino em tempos tão sombrios. Mesmo entre aliados, sua postura distante e calculista alimenta rumores de que considera a maioria dos nobres indigna do poder que possui. Ainda assim, seus resultados tornam difícil contestá-lo. Sob sua liderança, o Ducado de Yahru tornou-se uma das regiões mais prósperas e militarmente organizadas das Terras Livres.

A força de seu ducado repousa sobre uma nobreza rigidamente disciplinada e um exército profissional, treinado desde a juventude para atuar em formação. No centro desse poder encontra-se sua lendária guarda pessoal, conhecida em todo o continente como as **Seis Lanças Imperiais**. Composta por apenas seis cavaleiros escolhidos entre os maiores guerreiros das Terras Livres, a ordem representa o ápice da cavalaria humana. Cada Lanceiro Imperial recebe uma lança forjada especificamente para si, além do direito de responder apenas ao próprio duque. Embora atuem como guarda pessoal de Harald, é comum que sejam enviados para liderar batalhões inteiros durante grandes campanhas, e a simples notícia de que uma das Seis Lanças marchará para o campo de batalha costuma elevar o moral dos exércitos aliados. Entre os soldados, existe um antigo ditado: _"Se uma Lança Imperial caiu, é porque um exército inteiro caiu antes dela."_

Apesar de sua fidelidade às Terras Livres, muitos observam Harald com cautela. Seu sangue remonta aos antigos reis dos Menn, uma linhagem que jamais desapareceu completamente após a ascensão de Gilgamesh e a posterior queda de Mah'rath. Embora nunca tenha reivindicado qualquer direito ao antigo trono, sua ascendência alimenta especulações constantes entre a nobreza. Há quem o veja como o legítimo herdeiro de uma monarquia perdida; outros acreditam que ele próprio aguarda apenas o momento certo para restaurar a antiga dinastia. Harald nunca confirma nem desmente esses rumores, limitando-se a afirmar que "o continente precisa de estabilidade antes de discutir coroas".

Em público, demonstra absoluto respeito pelos demais governantes das Terras Livres e mantém relações diplomáticas sólidas com Aurora, Valdrheim e Albion. Nos bastidores, porém, poucos duvidam de que acompanha atentamente cada mudança no equilíbrio de poder do continente. Para Harald, alianças são permanentes apenas enquanto forem úteis, e nenhum governante prudente ignora uma peça importante do tabuleiro.

Ainda assim, mesmo seus críticos reconhecem uma qualidade inquestionável: Harald jamais coloca seus interesses acima da sobrevivência de Middangeard. Orgulhoso, ambicioso e convencido de sua própria superioridade, ele acredita sinceramente que nasceu para liderar. E talvez seja justamente essa convicção, mais do que seu sangue ou seu título, que faz tantos homens estarem dispostos a marchar para a guerra sob o estandarte do Leão de Yahru.

<script>
(function() {
  function ligarLightbox() {
    // Evita duplicar o lightbox na tela
    if (document.getElementById("global-lightbox")) return;

    // Cria a estrutura preta de fundo
    const lightbox = document.createElement("div");
    lightbox.id = "global-lightbox";
    lightbox.className = "custom-lightbox";
    lightbox.innerHTML = '<span class="lightbox-close">&times;</span><img id="lightbox-img" src="" alt="Zoom">';
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector("#lightbox-img");

    // Escuta o clique nas imagens do seu dashboard
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (target.tagName === "IMG" && target.closest(".dashboard-lago")) {
        lightboxImg.src = target.src;
        lightbox.classList.add("active");
      }
    });

    // Fecha ao clicar fora
    lightbox.addEventListener("click", (e) => {
      if (e.target !== lightboxImg) {
        lightbox.classList.remove("active");
      }
    });
  }

  // Roda o código e garante que ele funcione nas transições de página do Quartz
  ligarLightbox();
  document.addEventListener("nav", ligarLightbox);
})();
</script>
