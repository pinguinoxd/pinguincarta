const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");
const musica = document.getElementById("musica-fondo"); // referencia al audio

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {

        envoltura.classList.toggle("abierto");
        envoltura.classList.add("desactivar-sobre");

        // 🔊 Reproducir música al abrir
        musica.play().catch(error => {
            console.log("El navegador bloqueó la reproducción automática. Se necesita una interacción del usuario.");
        });

        if (!carta.classList.contains("abierta")) {
            setTimeout(() => {
                carta.classList.add("mostrar-carta");

                setTimeout(() => {
                    carta.classList.remove("mostrar-carta");
                    carta.classList.add("abierta");
                }, 500);
            }, 1000);
        }
    } else if (e.target.matches(".envoltura-sobre *")) {
        envoltura.classList.remove("abierto");
        envoltura.classList.remove("desactivar-sobre");

        if (carta.classList.contains("abierta")) {
            carta.classList.add("cerrando-carta");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta");
                carta.classList.remove("abierta");
            }, 500);
        }

        // ⏹️ Pausar la música al cerrar
        musica.pause();
        musica.currentTime = 0;
    }
});
