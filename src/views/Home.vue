<template>
  <div class="home">

    <section class="header">
      <h1>🎬 Movie List</h1>
      <p>Temukan film favoritmu hari ini</p>
    </section>

  
    <section class="movie-section">
      <div class="movie-grid">
        <div
          class="movie-card"
          v-for="movie in movies"
          :key="movie.id"
          @click="selectMovie(movie)"
        >
          <img :src="movie.poster" :alt="movie.title" />
          <div class="overlay">
            <h3>{{ movie.title }}</h3>
            <p>⭐ {{ movie.rating }}</p>
          </div>
        </div>
      </div>
    </section>

   
    <div v-if="selectedMovie" class="modal" @click.self="selectedMovie = null">//directive Vue untuk rendering kondisional.
      <div class="modal-content">
        <h2>{{ selectedMovie.title }}</h2>
        <p><strong>Genre:</strong> {{ selectedMovie.genre }}</p>
        <p><strong>Rating:</strong> ⭐ {{ selectedMovie.rating }}</p>
        <p class="desc">{{ selectedMovie.desc }}</p>
        <button @click="selectedMovie = null">Tutup</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedMovie = ref(null);

const movies = ref([

  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8, poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", desc: "Masuk ke dunia mimpi untuk mencuri rahasia." },
  { id: 2, title: "Interstellar", genre: "Adventure", rating: 8.6, poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", desc: "Perjalanan lintas galaksi menyelamatkan manusia." },
  { id: 3, title: "Avengers: Endgame", genre: "Action", rating: 8.4, poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg", desc: "Pertempuran terakhir melawan Thanos." },
  { id: 4, title: "The Dark Knight", genre: "Action", rating: 9.0, poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", desc: "Batman vs Joker." },
  { id: 5, title: "Parasite", genre: "Thriller", rating: 8.5, poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", desc: "Kesenjangan sosial dua keluarga." },
  { id: 6, title: "Joker", genre: "Drama", rating: 8.4, poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", desc: "Asal-usul Joker yang kelam." },
  { id: 7, title: "Forrest Gump", genre: "Drama", rating: 8.8, poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg", desc: "Kisah hidup sederhana penuh makna." },
  { id: 8, title: "The Matrix", genre: "Sci-Fi", rating: 8.7, poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", desc: "Dunia hanyalah simulasi." },
  { id: 9, title: "Gladiator", genre: "History", rating: 8.5, poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", desc: "Jenderal Romawi jadi gladiator." },
  { id: 10, title: "Spider-Man: No Way Home", genre: "Action", rating: 8.3, poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", desc: "Multiverse Spider-Man terbuka." },

  { id: 11, title: "Titanic", genre: "Romance", rating: 7.9, poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", desc: "Cinta tragis di kapal legendaris." },
  { id: 12, title: "Avatar", genre: "Fantasy", rating: 7.8, poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg", desc: "Petualangan di planet Pandora." },
  { id: 13, title: "The Lord of the Rings", genre: "Fantasy", rating: 8.9, poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg", desc: "Perjalanan menghancurkan cincin." },
  { id: 14, title: "Harry Potter", genre: "Fantasy", rating: 7.6, poster: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg", desc: "Dunia sihir Hogwarts." },
  { id: 15, title: "Doctor Strange", genre: "Action", rating: 7.5, poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg", desc: "Penyihir penjaga dimensi." },
  { id: 16, title: "Black Panther", genre: "Action", rating: 7.3, poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", desc: "Raja Wakanda." },
  { id: 17, title: "Shawshank Redemption", genre: "Drama", rating: 9.3, poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", desc: "Harapan di balik jeruji." },
  { id: 18, title: "Fight Club", genre: "Drama", rating: 8.8, poster: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg", desc: "Klub rahasia penuh kekacauan." },
  { id: 19, title: "The Godfather", genre: "Crime", rating: 9.2, poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", desc: "Keluarga mafia legendaris." },
  { id: 21, title: "Dune", genre: "Sci-Fi", rating: 8.0, poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", desc: "Perang rempah di Arrakis." },
  { id: 22, title: "Top Gun: Maverick", genre: "Action", rating: 8.3, poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg", desc: "Aksi jet tempur legendaris." },
]);

const selectMovie = (movie) => {
  selectedMovie.value = movie;
};
</script>

<style scoped>

.home {
  padding-top: 80px;   
  padding-bottom: 80px;  
  background: #0f172a;
  color: white;
  min-height: 100vh;/*menentukan tinggi minimum sebuah elemen.*/
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.movie-section {
  padding: 0 2rem;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}

.movie-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-card img {
  width: 100%;
  height: 270px;
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s;
}

.movie-card:hover .overlay {
  opacity: 1;
}


.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background: #020617;
  padding: 2rem;
  border-radius: 16px;
  width: 90%;
  max-width: 400px;
}
</style>
