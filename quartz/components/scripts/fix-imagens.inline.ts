document.addEventListener("nav", () => {
  setTimeout(() => {
    document.querySelectorAll("img").forEach(img => {
      const src = img.src;
      img.src = "";
      img.src = src;
    });
  }, 50); // Dá 50 milissegundos pro Quartz carregar o texto antes de atualizar a imagem
});