---
cssclasses:
  - dashboard-lago
---

![[Arquimago Cedric Ainsworth-1782929067875.webp]]
### O Sábio de Albion • Guardião da Era de Ouro • Senhor do Círculo Arcano

> _"Espadas vencem batalhas. Conhecimento decide quem sobreviverá para lutar a próxima."_  
> — Cedric Ainsworth

Entre todos os homens vivos em Middangeard, poucos acumulam tanto conhecimento quanto **Cedric Ainsworth**. Arquimago de Albion e líder do Círculo Arcano, ele é considerado a maior autoridade em magia, engenharia arcana e história da Era de Ouro. Reis disputam sua opinião antes de declarar guerras, generais aguardam seus pareceres antes de iniciar campanhas e estudiosos atravessam o continente apenas para receber alguns minutos de sua atenção. Em uma época onde bibliotecas queimam mais rápido do que podem ser reconstruídas, Cedric tornou-se o maior guardião do conhecimento humano.

Diferentemente da maioria dos grandes magos, Cedric jamais buscou poder político. Nascido em uma família de escribas, dedicou toda a juventude ao estudo das antigas ruínas de Mah'rath, convencido de que a humanidade havia perdido muito mais do que cidades durante a Queda. Décadas de pesquisa revelaram fragmentos esquecidos da Era de Ouro: fórmulas arcanas, mecanismos alimentados por mana, tratados filosóficos e projetos atribuídos ao lendário [[Merlin]]. Enquanto outros buscavam artefatos para utilizá-los como armas, Cedric preocupava-se em compreender como funcionavam, acreditando que conhecimento sem entendimento inevitavelmente conduziria ao mesmo desastre que destruiu a antiga civilização.

Sua ascensão dentro de Albion foi tão rápida quanto inevitável. Ainda jovem, tornou-se membro do Círculo Arcano, a instituição responsável por governar a cidade, e poucos anos depois assumiu o posto de Arquimago. Sob sua liderança, Albion abandonou a postura isolacionista que adotara após a Era das Trevas e passou a compartilhar parte de suas descobertas com as demais cidades livres. Muitas das muralhas encantadas de Valdrheim, dos sistemas de irrigação de Aurora e das fortalezas erguidas por Harald Yahru utilizam projetos desenvolvidos nos laboratórios de Cedric.

Apesar de sua fama como estudioso, seria um erro subestimar seu poder. Cedric domina algumas das formas mais refinadas de manipulação da mana conhecidas pelos mortais. Sua especialidade, entretanto, jamais foi a destruição. Enquanto outros magos aprendem a lançar fogo ou relâmpagos, ele dedica seus estudos à manipulação das próprias leis da realidade: barreiras, selamentos, encantamentos permanentes e estruturas capazes de resistir durante séculos. Muitos afirmam que nenhuma fortaleza construída sob sua supervisão jamais caiu por falha de suas defesas.

Sua maior obsessão, contudo, permanece sendo [[Merlin]]. Cedric acredita que o Arquiteto jamais revelou tudo o que descobriu durante a Era de Ouro. Diversos laboratórios escondidos pelo continente continuam sendo procurados por expedições financiadas por Albion, e o próprio Arquimago mantém correspondência frequente com [[Merlin]], embora poucos saibam o conteúdo dessas conversas. Alguns membros do Círculo Arcano suspeitam que ambos estejam preparando algo muito maior do que simplesmente preservar o conhecimento da humanidade.

Ao contrário de muitos estudiosos, Cedric compreende perfeitamente o preço da guerra. Diversas vezes abandonou a segurança de Albion para acompanhar expedições até a Muralha dos Sinos, investigando novas manifestações do Lago Negro e recuperando artefatos antes que fossem consumidos pela corrupção. Foi durante uma dessas missões que perdeu o braço esquerdo ao selar uma anomalia arcana capaz de devorar mana viva. Desde então, utiliza uma sofisticada prótese encantada criada por ele mesmo, considerada uma das maiores demonstrações da engenharia mágica moderna.

Para muitos, ele representa o maior mago vivo. Para Cedric, entretanto, títulos pouco importam. Em sua visão, a humanidade não será salva pelo guerreiro mais forte nem pelo rei mais poderoso, mas pelo homem que conseguir responder às perguntas que ninguém mais ousou fazer. Afinal, se a ignorância quase destruiu o mundo uma vez, somente o conhecimento poderá impedir que isso aconteça novamente.

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