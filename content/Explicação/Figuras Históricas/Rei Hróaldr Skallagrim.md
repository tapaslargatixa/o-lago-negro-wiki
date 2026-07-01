---
cssclasses:
  - dashboard-lago
---

![[be9cda1c387a94abf17fd0f941be099c.jpg]]
### O Rei do Norte • O Colosso de Gelo • Senhor de Helmfjord • Guardião dos Mares Congelados

> _"O frio não mata os fracos. Apenas revela quem sempre foi."_  
> — Hróaldr Skallagrim

No extremo norte de Middangeard, onde o mar se transforma em gelo durante boa parte do ano e o vento é capaz de arrancar a carne dos ossos, ergue-se Helmfjord, governada por um rei que poucos acreditam ser inteiramente mortal. **Hróaldr Skallagrim** é um homem de proporções monstruosas, ultrapassando facilmente os três metros de altura e possuindo um corpo que mais se assemelha às montanhas geladas de seu reino do que ao de qualquer Menn. Muitos estrangeiros, ao vê-lo pela primeira vez, acreditam estar diante de um Jötunn. Os habitantes do norte, porém, apenas sorriem e respondem que seu rei nasceu do mesmo gelo que moldou aquelas terras.

A linhagem Skallagrim afirma descender de antigos pactos firmados entre os primeiros homens e os gigantes de gelo muito antes da fundação de Mah'rath. Se essa história é verdadeira ou apenas uma lenda, ninguém sabe ao certo. O fato é que cada geração da família produz indivíduos maiores e mais resistentes do que qualquer guerreiro comum, mas nenhum alcançou as proporções de Hróaldr. Sua simples presença domina qualquer salão, obrigando arquitetos de Helmfjord a construir portas, tronos e corredores especialmente para acomodar seu soberano.

Apesar da aparência brutal, Hróaldr governa com surpreendente serenidade. Fala pouco, raramente eleva a voz e nunca desperdiça palavras. Entre os nórdicos existe o costume de que o primeiro a levantar a voz durante uma negociação já perdeu a discussão, e nenhum governante personifica melhor essa tradição do que ele. Seu silêncio pesa mais do que discursos inteiros, e quando finalmente decide falar, até os jarls interrompem suas disputas para ouvi-lo.

Sua força tornou-se lendária em todo o continente. Cronistas afirmam que o rei maneja uma espada cujo peso impediria qualquer outro homem de sequer erguê-la do chão. Durante a **Batalha da Baía Congelada**, quando uma criatura colossal emergiu do Mar do Oeste e destruiu parte da frota de Helmfjord, Hróaldr enfrentou o monstro praticamente sozinho sobre o gelo, abatendo-o após um combate que durou horas. Os pescadores ainda mostram as enormes rachaduras congeladas na baía, afirmando que foram abertas pelos golpes de sua espada.

Entretanto, reduzir Hróaldr à sua força seria ignorar aquilo que realmente sustenta seu reino. Helmfjord sobrevive porque seu rei compreende o mar como poucos homens vivos. Foi ele quem reorganizou a frota do norte, fortaleceu os portos costeiros e estabeleceu rotas marítimas que mantêm as Terras Livres abastecidas mesmo durante os invernos mais rigorosos. Enquanto Valdrheim protege as fronteiras terrestres e Aurora alimenta o continente, é Helmfjord que impede Middangeard de ser isolada pelos mares.

Entre os povos do norte, coragem não é medida pelo número de inimigos derrotados, mas pela capacidade de enfrentar o inverno sem perder a humanidade. Hróaldr incorpora esse ideal como ninguém. Caminha pelas aldeias sem escolta, participa das celebrações ao lado de pescadores e lenhadores e exige que seus filhos vivam sob as mesmas dificuldades enfrentadas pelo restante do povo. Em Helmfjord, um rei que desconhece o frio não merece usar a coroa.

Embora prefira permanecer distante das disputas políticas do sul, Hróaldr jamais ignora um chamado da Muralha dos Sinos. Para ele, o norte só continuará existindo enquanto Middangeard permanecer de pé.

Entre os marinheiros circula uma antiga superstição. Dizem que, durante as tempestades mais violentas, é possível enxergar uma figura gigantesca caminhando sobre o gelo, espada em mãos, guiando navios perdidos de volta ao porto. Alguns afirmam tratar-se do espírito de antigos reis. Outros juram que é o próprio Hróaldr patrulhando suas fronteiras mesmo quando ninguém consegue vê-lo.

No fim, pouco importa qual versão seja verdadeira. Em Helmfjord existe uma certeza compartilhada por todos: **enquanto o Rei do Norte permanecer de pé, o inverno jamais pertencerá aos inimigos de Middangeard.**


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