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

export default {
  name: 'movie-id',

  async asyncData({$axios, route}) {
    const movie = await $axios.$get(`http://localhost:3000/the-movie-db/find-movie-details?id=${route.params.id}`)

    const images = []
    movie?.backdrop_path ? images.push('https://image.tmdb.org/t/p/original/' + movie.backdrop_path) : ''
    movie?.belongs_to_collection?.backdrop_path ? images.push('https://image.tmdb.org/t/p/original/' + movie.belongs_to_collection.backdrop_path) : ''

    return {
      movie: movie,
      images : images
    }
  },

  methods: {
    convertTime(minute){
      let hours = (minute / 60)
      let rhours = Math.floor(hours);
      let minutes = (hours - rhours) * 60
      let rminutes = Math.round(minutes)
      let result = rhours == 1 ? rhours + " hour and " : rhours + " hours and "
      return result + + rminutes + " minutes."
    },
    fullLangue(lang) {
      let fullLang = '';
      switch (lang) {
        case 'en':
          fullLang = 'English'
          break;
        case 'fr':
          fullLang = 'French'
          break;
        case 'it':
          fullLang = 'Italian'
          break;
        default:
          fullLang = 'english'
      }
      console.log(fullLang)
      return fullLang
    },
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`
    }
  },

  // components: {
  //   Card,
  // },
  data() {
    return {};
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
</style>
