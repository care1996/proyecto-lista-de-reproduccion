class Cancion {
  constructor(titulo, artista, año, duracion, genero, cover, archivo) {
    this.titulo = titulo;
    this.artista = artista;
    this.año = año;
    this.duracion = duracion;
    this.genero = genero;
    this.archivo = archivo;
    this.cover = cover;
    this.favorita = false;
  }
  nombreYArtist() {
    return `${this.titulo} - ${this.artista}`;
  }
}

class Playlist {
  constructor(nombre) {
    this.nombre = nombre;
    this.canciones = [];
  }

  agregarCancion(cancion) {
    this.canciones.push(cancion);
  }
}


class ReproductorMusica {
  constructor() {
   
      this.audioPlayer = new Audio();
      this.libreriaDeCanciones = this.inicializarLibreriaDeCanciones();
      this.listaActiva = this.libreriaDeCanciones; 
      this.indiceActual = 0; 
      this.favoritos = new Playlist("Favoritos");
      this.myPlaylist = new Playlist("My Playlist");
      
      this.audioPlayer.addEventListener('ended', () => {
        this.siguienteCancion();
      });
    }
  

  inicializarLibreriaDeCanciones() {
    return [
      new Cancion(
        "cancion1",
        "artist1",
        "2023",
        "3:13",
        "genre1",
        "./assets/caratulas/cover1.JPG",
        "./assets/musica/cancion1.mp3"
      ),
      new Cancion(
        "cancion2",
        "artist1",
        "2023",
        "2:57",
        "genre1",
        "./assets/caratulas/cover1.JPG",
        "./assets/musica/cancion2.mp3"
      ),
      new Cancion(
        "cancion3",
        "artist1",
        "2023",
        "3:11",
        "genre1",
        "./assets/caratulas/cover1.JPG",
        "./assets/musica/cancion3.mp3"
      ),
      new Cancion(
        "cancion4",
        "artist1",
        "2023",
        "2:47",
        "genre1",
        "./assets/caratulas/cover1.JPG",
        "./assets/musica/cancion4.mp3"
      ),
      new Cancion(
        "cancion5",
        "artist1",
        "2023",
        "2:47",
        "genre1",
        "./assets/caratulas/cover1.JPG",
        "./assets/musica/cancion5.mp3"
      ),
      new Cancion(
        "cancion6",
        "artist1",
        "2023",
        "3:22",
        "genre1",
        "./assets/caratulas/cover1.JPG",
        "./assets/musica/cancion6.mp3"
      ),
      new Cancion(
        "cancion7",
        "artist1",
        "2023",
        "4:06",
        "genre1",
        "./assets/caratulas/cover1.JPG",
        "./assets/musica/cancion7.mp3"
      ),
      new Cancion(
        "cancion8",
        "artist1",
        "2023",
        "4:03",
        "genre1",
        "./assets/caratulas/cover1.JPG",
        "./assets/musica/cancion8.mp3"
      ),
      new Cancion(
        "cancion9",
        "artist1",
        "2023",
        "3:07",
        "genre1",
        "./assets/caratulas/cover1.JPG",
        "./assets/musica/cancion9.mp3"
      ),
      new Cancion(
        "cancion10",
        "artist1",
        "2023",
        "2:20",
        "genre1",
        "./assets/caratulas/cover1.JPG",
        "./assets/musica/cancion10.mp3"
      ),
      new Cancion(
        "cancion11",
        "artist2",
        "2023",
        "3:02",
        "genre2",
        "./assets/caratulas/cover2.JPG",
        "./assets/musica/cancion11.mp3"
      ),
      new Cancion(
        "cancion12",
        "artist2",
        "2023",
        "3:00",
        "genre2",
        "./assets/caratulas/cover2.JPG",
        "./assets/musica/cancion12.mp3"
      ),
      new Cancion(
        "cancion13",
        "artist2",
        "2023",
        "4:07",
        "genre2",
        "./assets/caratulas/cover2.JPG",
        "./assets/musica/cancion13.mp3"
      ),
      new Cancion(
        "cancion14",
        "artist2",
        "2023",
        "3:02",
        "genre2",
        "./assets/caratulas/cover2.JPG",
        "./assets/musica/cancion14.mp3"
      ),
      new Cancion(
        "cancion15",
        "artist2",
        "2023",
        "2:35",
        "genre2",
        "./assets/caratulas/cover2.JPG",
        "./assets/musica/cancion15.mp3"
      ),
      new Cancion(
        "cancion16",
        "artist2",
        "2023",
        "3:39",
        "genre2",
        "./assets/caratulas/cover2.JPG",
        "./assets/musica/cancion16.mp3"
      ),
      new Cancion(
        "cancion17",
        "artist2",
        "2023",
        "3:16",
        "genre2",
        "./assets/caratulas/cover2.JPG",
        "./assets/musica/cancion1.mp3"
      ),
      new Cancion(
        "cancion18",
        "artist2",
        "2023",
        "2:52",
        "genre2",
        "./assets/caratulas/cover2.JPG",
        "./assets/musica/cancion18.mp3"
      ),
      new Cancion(
        "cancion19",
        "artist2",
        "2023",
        "3:27",
        "genre2",
        "./assets/caratulas/cover2.JPG",
        "./assets/musica/cancion19.mp3"
      ),
      new Cancion(
        "cancion20",
        "artist2",
        "2023",
        "2:55",
        "genre2",
        "./assets/caratulas/cover2.JPG",
        "./assets/musica/cancion20.mp3"
      ),
      new Cancion(
        "cancion21",
        "artist3",
        "2023",
        "5:04",
        "genre3",
        "./assets/caratulas/cover3.jpg",
        "./assets/musica/cancion21.mp3"
      ),
      new Cancion(
        "cancion22",
        "artist3",
        "2023",
        "5:46",
        "genre3",
        "./assets/caratulas/cover3.jpg",
        "./assets/musica/cancion22.mp3"
      ),
      new Cancion(
        "cancion23",
        "artist3",
        "2023",
        "4:37",
        "genre3",
        "./assets/caratulas/cover3.jpg",
        "./assets/musica/cancion21.mp3"
      ),
      new Cancion(
        "cancion24",
        "artist3",
        "2023",
        "5:47",
        "genre3",
        "./assets/caratulas/cover3.jpg",
        "./assets/musica/cancion21.mp3"
      ),
      new Cancion(
        "cancion25",
        "artist3",
        "2023",
        "4:13",
        "genre3",
        "./assets/caratulas/cover3.jpg",
        "./assets/musica/cancion25.mp3"
      ),
      new Cancion(
        "cancion26",
        "artist3",
        "2023",
        "4:55",
        "genre3",
        "./assets/caratulas/cover3.jpg",
        "./assets/musica/cancion26.mp3"
      ),
      new Cancion(
        "cancion27",
        "artist3",
        "2023",
        "4:41",
        "genre3",
        "./assets/caratulas/cover3.jpg",
        "./assets/musica/cancion27.mp3"
      ),
      new Cancion(
        "cancion28",
        "artist3",
        "2023",
        "3:35",
        "genre3",
        "./assets/caratulas/cover3.jpg",
        "./assets/musica/cancion28.mp3"
      ),
      new Cancion(
        "cancion29",
        "artist3",
        "2023",
        "5:04",
        "genre3",
        "./assets/caratulas/cover3.jpg",
        "./assets/musica/cancion29.mp3"
      ),
      new Cancion(
        "cancion30",
        "artist3",
        "2023",
        "4:18",
        "genre3",
        "./assets/caratulas/cover3.jpg",
        "./assets/musica/cancion30.mp3"
      ),
    ];
    }
  

    reproducir(index) {
      if (index >= 0 && index < this.listaActiva.length) {
        const cancion = this.listaActiva[index];
        this.audioPlayer.src = cancion.archivo;
        this.audioPlayer.play()
          .then(() => {
            this.indiceActual = index;
            console.log(`Reproduciendo: ${cancion.titulo} de ${cancion.artista}`);
            this.actualizarUI(cancion);
          })
      }
    }  

  siguienteCancion() {
    let nuevoIndice = this.indiceActual + 1;
    if (nuevoIndice >= this.listaActiva.length) {
        nuevoIndice = 0; 
    }
    this.reproducir(nuevoIndice);
  }

  actualizarUI(cancion) {
    // reemplazar la info de la cancion
    document.getElementById("songName").textContent = cancion.titulo;
    document.getElementById("duration").textContent = cancion.duracion;
    document.getElementById("artist").textContent = cancion.artista;
    document.getElementById("year").textContent = cancion.año;
    document.getElementById("genre").textContent = cancion.genero;
    document.getElementById("cover").src = cancion.cover;

    // los controles de reproducción
    this.agregarEventosControl();
  }

  agregarEventosControl() {
    const btnRewind = document.querySelector(".bi-rewind-circle");
    const btnStop = document.querySelector(".bi-stop-circle");
    const btnPlay = document.querySelector(".bi-play-circle");
    const btnPause = document.querySelector(".bi-pause-circle");
    const btnForward = document.querySelector(".bi-fast-forward-circle");
    const btnMute = document.querySelector(".bi-volume-mute");


    btnRewind?.addEventListener("click", () => {
      const newIndex = (this.indiceActual - 1 + this.listaActiva.length) % this.listaActiva.length;
      this.reproducir(newIndex);
    });

    btnStop?.addEventListener("click", () => {
      this.audioPlayer.pause();
      this.audioPlayer.currentTime = 0;
    });

    btnPlay?.addEventListener("click", () => {
      this.audioPlayer.play();
    });

    btnPause?.addEventListener("click", () => {
      this.audioPlayer.pause();
    });

    btnForward?.addEventListener("click", () => {
      const newIndex = (this.indiceActual + 1) % this.listaActiva.length;
      this.reproducir(newIndex);
    });

    btnMute?.addEventListener("click", () => {
      if (this.audioPlayer.muted) {
          // Si está silenciado, activar el sonido
          this.audioPlayer.muted = false;
      } else {
          // Si no está silenciado, silenciar
          this.audioPlayer.muted = true;
      }
  });
}

  

  generarListaEnHTML(lista, elementoHTML, mostrarBotones = false) {
    elementoHTML.innerHTML = '';
    lista.forEach((cancion, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = cancion.nombreYArtist();

      if (mostrarBotones) {
        const corazonIcono = document.createElement('i');
        const plusIcono = document.createElement('i');
        corazonIcono.classList.add('bi', 'bi-heart');
        plusIcono.classList.add('bi', 'bi-plus');


        // estilos a los iconos
        corazonIcono.classList.add("bi", "bi-heart");
        corazonIcono.style.fontSize = "24px";
        plusIcono.classList.add("bi", "bi-plus");
        plusIcono.style.fontSize = "24px";

        // Agregar evento  al corazón para agregar a favoritos
        corazonIcono.addEventListener("click", (event) => {
          event.stopPropagation(); 
          this.agregarAFavoritos(index);
        });

        // evento de clic al plus para agregar a My Playlist
        plusIcono.addEventListener("click", (event) => {
          event.stopPropagation(); 
          this.agregarAMyPlaylist(index);
        });

        listItem.appendChild(corazonIcono);
        listItem.appendChild(plusIcono);

         listItem.addEventListener("click", () => {
          this.reproducir(index);
        });
      }

      
      elementoHTML.appendChild(listItem);
    });

  }

  // Método para actualizar la lista de canciones en HTML
  actualizarListaEnHTML(canciones, elementoHTML) {
    elementoHTML.innerHTML = "";
    this.generarListaEnHTML(canciones, elementoHTML, true); // Mostrar botones en la lista
  }
  establecerYReproducirLista(nuevaLista) {
    this.listaActiva = nuevaLista;
    this.indiceActual = 0; 
    this.reproducir(0);
}


  // Método para agregar canción a la lista de favoritos
  agregarAFavoritos(index) {
    const cancion = this.libreriaDeCanciones[index];
    const yaEstaEnFavoritosIndex = this.favoritos.canciones.findIndex(c => c.titulo === cancion.titulo);
  
    if (yaEstaEnFavoritosIndex === -1) {
      this.favoritos.agregarCancion(cancion);
      console.log(`Canción "${cancion.titulo}" agregada a Favoritos.`);
    } else {
      this.favoritos.canciones.splice(yaEstaEnFavoritosIndex, 1);
      console.log(`Canción "${cancion.titulo}" eliminada de Favoritos.`);
    }
  
    this.actualizarListaEnHTML(this.favoritos.canciones, document.getElementById("favoritosItems"));
  };


  // Método para agregar canción a My Playlist
  agregarAMyPlaylist(index) {
    const cancion = this.libreriaDeCanciones[index];
    const yaEstaEnMyPlaylistIndex = this.myPlaylist.canciones.findIndex(c => c.titulo === cancion.titulo);
  
    if (yaEstaEnMyPlaylistIndex === -1) {
      this.myPlaylist.agregarCancion(cancion);
      console.log(`Canción "${cancion.titulo}" agregada a My Playlist.`);
    } else {
      this.myPlaylist.canciones.splice(yaEstaEnMyPlaylistIndex, 1);
      console.log(`Canción "${cancion.titulo}" eliminada de My Playlist.`);
    }
  
   
 this.actualizarListaEnHTML(this.myPlaylist.canciones, document.getElementById("myplaylistItems"));
  }

  reproducirListaCompleta(lista) {
    if (lista.length > 0) {
      this.listaActiva = lista;
      this.indiceActual = 0;
      this.reproducir(this.indiceActual);
    } else {
      console.log("La lista está vacía.");
    }
  }
  reproducirLista(lista) {
    if (lista.length > 0) {
        this.listaActiva = lista;
        this.indiceActual = 0;
        this.reproducir(this.indiceActual);
    } else {
        console.log("La lista está vacía.");
    }
}
}



const reproductor = new ReproductorMusica();
const listaLibreria = document.getElementById("playlist");
reproductor.generarListaEnHTML(reproductor.libreriaDeCanciones, listaLibreria, true); // Mostrar botones en la lista


document.getElementById("favoritosItems").addEventListener("click", (event) => {
  const index = Array.from(event.target.parentNode.children).indexOf(event.target);
  if (index !== -1) {
      reproductor.reproducirLista(reproductor.favoritos.canciones.slice(index));
  }
});

document.getElementById("myplaylistItems").addEventListener("click", (event) => {
  const index = Array.from(event.target.parentNode.children).indexOf(event.target);
  if (index !== -1) {
      reproductor.reproducirLista(reproductor.myPlaylist.canciones.slice(index));
  }
});

function buscar() {
  const input = document.getElementById("buscarInput").value.toLowerCase();
  const listaFiltrada = reproductor.libreriaDeCanciones.filter((cancion) => {
    return (
      cancion.titulo.toLowerCase().includes(input) ||
      cancion.artista.toLowerCase().includes(input) ||
      cancion.genero.toLowerCase().includes(input)
    );
  });

  const listaResultados = document.getElementById("resultadosBusqueda");
  listaResultados.innerHTML = "";

  reproductor.generarListaEnHTML(listaFiltrada, listaResultados, true); // Mostrar botones en la lista de resultados
  reproductor.reproducirLista(listaFiltrada); // Reproducir la lista filtrada
}