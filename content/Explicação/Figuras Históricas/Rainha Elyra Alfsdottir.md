---
cssclasses:
  - dashboard-lago
---

![[Rainha da Fertilidade.png]]

### A Rainha das Flores • A Rainha da Fertilidade • Senhora de Aurora

> _"Enquanto houver uma única semente capaz de brotar, Middangeard ainda não estará condenado."_  
> — Elyra Alfsdottir

Entre todos os soberanos das Terras Livres, nenhum nome desperta tanto respeito quanto **Elyra Alfsdottir**, Rainha de Aurora. Conhecida pelos povos do continente como **Rainha das Flores** ou **Rainha da Fertilidade**, Elyra tornou-se símbolo da própria persistência da vida em uma era marcada pela fome, pela guerra e pela corrupção. Enquanto outros reis são lembrados pelas batalhas que venceram, Elyra é reverenciada pelas incontáveis vidas que salvou sem jamais precisar empunhar uma espada.

Nascida como a segunda filha da Casa Alfsdottir, Elyra jamais foi preparada para governar. Desde a infância demonstrava pouco interesse pelos assuntos militares que dominavam a corte de Aurora, preferindo acompanhar botânicos, herbalistas e druidas pelos vastos campos do reino. Conta-se que ainda criança era capaz de reconhecer centenas de espécies apenas pelo aroma de suas folhas, passando mais tempo entre jardins e plantações do que nos salões do palácio. Muitos nobres consideravam sua postura um sinal de fraqueza, acreditando que jamais sobreviveria aos tempos difíceis que se aproximavam.

Seu destino mudou durante o chamado **Inverno Cinzento**, quando uma sucessão de geadas, pragas e ataques das criaturas do Lago Negro destruiu quase toda a produção agrícola das Terras Livres. Milhares morreram de fome antes mesmo que a guerra pudesse alcançá-los. Enquanto os demais governantes discutiam como dividir os poucos estoques restantes, Elyra percorreu pessoalmente vilarejos devastados, organizando caravanas, redistribuindo sementes, incentivando novas técnicas de cultivo e abrindo os celeiros reais para alimentar até mesmo estrangeiros. Muitos cronistas afirmam que foi naquele inverno, e não em sua coroação, que Aurora reconheceu sua verdadeira rainha.

Pouco depois da crise, a morte inesperada de seu pai colocou a jovem no trono. Diversos senhores tentaram contestar sua sucessão, convencidos de que uma soberana dedicada às flores jamais conseguiria proteger o reino. Elyra respondeu sem levantar exércitos. Em poucos anos transformou Aurora no maior produtor de alimentos de Middangeard, ampliando seus canais de irrigação, recuperando terras consideradas estéreis e financiando pesquisas sobre plantas capazes de resistir à corrupção emanada pelo Lago Negro. Sua política tornou Aurora indispensável para todas as demais cidades livres; atacar seu reino significaria condenar todo o continente à fome.

Sob seu governo, Aurora abandonou a imagem de simples província agrícola para tornar-se um centro de pesquisa botânica e alquímica. Jardins sagrados ocupam o interior da cidade, estufas gigantescas preservam espécies consideradas extintas e monges jardineiros catalogam plantas vindas de todas as regiões de Middangeard. Diz-se que nenhuma semente é plantada em Aurora sem antes passar pelas mãos dos sacerdotes da rainha, que veem na agricultura um ato sagrado de resistência contra a morte.

Apesar de sua reputação pacífica, Elyra está longe de ser ingênua. Ela compreende que colheitas precisam de soldados para existir e mantém uma das maiores forças de defesa das Terras Livres. Os chamados [[Espantalhos]] patrulham permanentemente as fazendas do reino, protegendo agricultores e caravanas de abastecimento com a mesma dedicação com que outros exércitos defendem castelos. Em Aurora, perder um campo de trigo é considerado tão grave quanto perder uma fortaleza.

Sua maior preocupação, entretanto, não são as guerras entre reinos nem as disputas políticas das Terras Livres. Elyra acredita que a verdadeira batalha do continente será travada contra a fome. Para ela, a corrupção do Lago Negro não destrói apenas cidades; ela contamina rios, empobrece solos e transforma campos férteis em desertos silenciosos. É por isso que financia expedições científicas, mantém relações diplomáticas até mesmo com antigos rivais e investe fortunas na preservação de sementes e espécies vegetais raras. Enquanto outros soberanos contam soldados, Elyra conta estações de plantio.

Entre o povo, sua imagem transcendeu a de uma simples monarca. Muitos agricultores iniciam o plantio pronunciando seu nome como uma bênção, crianças recebem coroas de flores durante festivais em sua homenagem e viajantes costumam carregar pequenas pétalas secas de Aurora como amuletos contra a fome. Poucos governantes na história de Middangeard conquistaram tamanho carinho de seus súditos.

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
