---
cssclasses:
  - dashboard-lago
---

![[Lorde Viktor Corvus.-1782922407023.webp]]
### O Abençoado da Morte • Senhor de Ravenhold • A Lâmina Silenciosa

> "Os monstros me chamam de carrasco. Os homens me chamam quando precisam de um."
> — Viktor Corvus

Poucos homens inspiram tanto temor quanto Lorde Viktor Corvus. Governante de Ravenhold e um dos mais antigos Abençoados ainda vivos, sua presença desperta um silêncio imediato mesmo entre veteranos da guerra. Não porque seja cruel ou imprevisível, mas porque todos sabem que ninguém permanece tanto tempo enfrentando o Lago Negro sem perder parte de si pelo caminho. Em Middangeard, há um ditado que atravessou gerações: "Se Viktor chegou, então alguém já morreu... ou vai morrer."

Muito antes de herdar Ravenhold, Viktor era apenas mais um guerreiro enviado para defender a Muralha dos Sinos. Destacava-se pela disciplina e pela habilidade incomum com a lança, mas foi durante uma incursão ao Lago Negro que seu destino mudou para sempre. Seu batalhão foi completamente aniquilado ao enfrentar uma criatura cuja simples existência parecia desafiar as leis da realidade. Viktor foi o único sobrevivente. Quando retornou, carregava dentro de si uma Bênção divina que jamais soube explicar. Desde então, deixou de ser apenas um homem.

Como todo Abençoado, Viktor recebeu poder suficiente para enfrentar horrores que nenhum exército comum conseguiria derrotar. Em troca, a bênção começou lentamente a consumir sua humanidade. Seu corpo tornou-se resistente além dos limites mortais, seus reflexos adquiriram precisão sobrenatural e sua presença passou a provocar um desconforto instintivo em qualquer pessoa ao seu redor. Muitos afirmam que o silêncio o acompanha como uma sombra, e há quem jure que animais se recusam a aproximar-se dele.

Com o passar das décadas, Viktor participou de praticamente todas as grandes campanhas contra o Lago Negro. Enfrentou Aberrações, Devoradores, Colossos e criaturas cujo nome jamais foi registrado pelos cronistas. Em inúmeras ocasiões foi dado como morto, apenas para surgir dias depois caminhando sozinho entre os destroços da batalha, trazendo consigo a cabeça da criatura responsável pela carnificina. Nenhum outro Abençoado acumula tantas histórias quanto ele, embora o próprio Viktor jamais confirme qualquer uma delas.

Quando o antigo senhor de Ravenhold morreu durante uma invasão, foi o próprio povo quem ofereceu o governo da cidade a Viktor. Ele recusou três vezes antes de aceitar, convencido de que Ravenhold precisava de alguém que compreendesse o verdadeiro custo da guerra. Sob sua liderança, a cidade tornou-se o maior centro de caçadores de monstros do continente. Mercenários, rastreadores, alquimistas, ferreiros e aventureiros chegam de todos os cantos de Middangeard em busca de contratos, treinamento ou fama. Para Viktor, porém, Ravenhold nunca foi um lugar para heróis. É uma cidade construída por sobreviventes.

Sua forma de governar reflete sua própria personalidade. Poucas leis, pouca burocracia e tolerância quase absoluta para qualquer profissão, desde que fortaleça a cidade ou contribua para a guerra contra o Lago Negro. Em Ravenhold, reputação vale mais do que títulos, e competência pesa mais do que sangue nobre. Um mercenário capaz de eliminar uma criatura pode conquistar mais respeito do que um cavaleiro de linhagem centenária.

Fisicamente, Viktor tornou-se quase tão intimidante quanto as criaturas que caça. Seu rosto permanece oculto por uma máscara metálica desgastada, marcada pelas cicatrizes de incontáveis batalhas. Longos cabelos negros escapam sob o elmo, enquanto um pesado manto escuro cobre uma armadura que parece absorver a luz ao redor. Em suas mãos repousa uma arma lendária recuperada das incursões ao lago, Murasama. 

Apesar de sua reputação, Viktor não demonstra prazer algum na violência. Pelo contrário. Os poucos que convivem com ele descrevem um homem silencioso, cansado e profundamente melancólico. Ele raramente participa de celebrações, evita discursos e prefere caminhar sozinho pelas muralhas de Ravenhold durante a noite. Muitos acreditam que cada monstro abatido leva consigo mais um fragmento de sua alma, e que o verdadeiro motivo de nunca retirar a máscara seja esconder um rosto que ele próprio já não reconhece.

Nas tavernas de Ravenhold, uma velha frase continua sendo repetida por quem aceita contratos perigosos:

"Se Viktor Corvus vier te buscar, reze para que seja para lutar ao lado dele. Os monstros nunca têm essa sorte."


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