<template>
  <div class="container mt-6">

    <div class="columns">

      <div class="column">
        <h1 style="margin-bottom:50px">{{ movie.title }}</h1>
        <p class="mb-5"> Original langue : {{ fullLangue(movie.original_language) }}</p>

        <p class="mb-5"> Release date :
          <span class="tag is-warning is-light">
            {{ movie.release_date.split('-').reverse().join('/') }}
          </span>
        </p>

        <p class="mb-5"> Runtime : {{ convertTime(movie.runtime) }}</p>

        <div class="mb-5">
          <p>
            Genre :
            <span v-for="genre in movie.genres" class="tag is-info mr-2">
              {{ genre.name }}
            </span>
          </p>
        </div>

        <div class="mb-5">
          <p>
            Companies :
            <span v-for="companie in movie.production_companies" class="tag is-dark mr-2">
              {{ companie.name }}
            </span>
          </p>
        </div>

        <b-rate :value="movie.vote_average / 2" custom-text="Vote Average"></b-rate>

        <button class="btn-classic" v-bind:class="{ like: isLiked }" @click="like"
                v-if="isLoggedIn"> Like
        </button>
        <button class="btn-classic" :class="{ active: isActive }" @click="bookmark; isActive = !isActive"
                v-if="isLoggedIn"> Bookmark
        </button>

      </div>

      <div class="column">
        <b-carousel :indicator-inside="false" style="width:660px">
          <b-carousel-item v-for="image in images" :key="i">
            <b-image class="image" :src="image" style="max-width:600px; max-height:337px"></b-image>
          </b-carousel-item>
        </b-carousel>
      </div>

    </div>

    <div class="container">
      <p>Description :</p>
      <p>{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script>

import Swal from 'sweetalert2'
import {mapGetters} from "vuex";

export default {
  async asyncData({$axios, route}) {
    const movie = await $axios.$get(`http://localhost:3000/the-movie-db/find-movie-details?id=${route.params.id}`)

    const images = []
    movie?.backdrop_path ? images.push('https://image.tmdb.org/t/p/original/' + movie.backdrop_path) : ''
    movie?.belongs_to_collection?.backdrop_path ? images.push('https://image.tmdb.org/t/p/original/' + movie.belongs_to_collection.backdrop_path) : ''

    return {
      name: 'movie-id',
      movie: movie,
      images: images
    }
  },

  data() {
    return {
      isLiked: false,
      isActive: false
    }
  },

  computed: {
    ...mapGetters('authentication', ['isLoggedIn', 'username', 'token', 'id'])
  },

  methods: {
    convertTime(minute) {
      let hours = (minute / 60)
      let rhours = Math.floor(hours);
      let minutes = (hours - rhours) * 60
      let rminutes = Math.round(minutes)
      let result = rhours === 1 ? rhours + " hour and " : rhours + " hours and "
      return result + +rminutes + " minutes."
    },

    fullLangue(lang) {
      switch (lang) {
        case 'en':
          return 'English'
        case 'fr':
          return 'French'
        case 'it':
          return 'Italian'
        default:
          return 'english'
      }
    },

    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`
    },

    like() {
      this.$axios.put(`http://localhost:3000/like/update`,
        {
          'ownerId': `${this.id}`,
          'filmId': this.movie.id
        },
        {
          "headers": {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json'
          }
        }).then(response => {
        if (response.status === 200) {
          this.isLiked = !this.isLiked;
          return;
        }
          this.isLiked = this.isLiked;
      })
        .catch(error => {
        console.log('Error');
            Swal.fire(
              'Like',
              'Something bad happened',
              'error'
            );
            this.isLiked = this.isLiked;
            return;
        });
    },

    async bookmark() {

      const {data: movies} = await this.$axios.get(`http://localhost:3000/bookmark/owner?owner=${this.username}`)

      if (!movies.includes(this.movie.id)) {
        const response = await this.$axios.post('http://localhost:3000/bookmark/create', {
          "filmId": this.movie.id,
          "owner": this.username
        })
      } else {
        const response = await this.$axios.delete(`http://localhost:3000/bookmark?id=${this.movie}`)
      }

      console.log(this.movie.id)
      console.log(this.username)

    },
  },

};


</script>


<style>
.is-active .al img {
  filter: grayscale(0%);
}

.al img {
  filter: grayscale(100%);
}

.mb-5 {
  margin-bottom: 12px !important;
}

.btn-classic {
  width: 80px;
  background-color: #d4810b;
  color: white;
  padding: 4px 10px;
  border-radius: 3px;
  border: #d8c8b7 1px solid;
  margin-right: 20px;
}

.btn-classic:active {
  background-color: white;
  color: #d4810b;
}

.active, .like {
  background-color: #28a51f;
}
</style>
