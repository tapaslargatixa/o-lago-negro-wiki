![[Diabo.mp4]]

<style>
/* Vídeo normal */
article video {
  cursor: zoom-in;
  transition: transform 0.3s ease;
  transform-origin: center center;
  max-width: 100%;
}

/* Vídeo ampliado */
article video.video-zoom {
  transform: scale(1.8);
  cursor: zoom-out;
  position: relative;
  z-index: 10;
}

/* Remove qualquer aparência de player */
article video::-webkit-media-controls {
  display: none !important;
}
</style>

<script>
(() => {

  document.querySelectorAll("article video").forEach(video => {

    // Configura vídeo automático
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.controls = false;
    video.playsInline = true;

    // Força iniciar
    video.play().catch(() => {});

    // Clique para zoom
    video.addEventListener("click", () => {
      video.classList.toggle("video-zoom");
    });

  });

})();
</script>