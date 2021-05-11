<template>

  <section class='movie container mt-6'>

    <b-field class='mb-6'>
      <b-input placeholder="Search..."
               type="search"
               icon="magnify"
               @keyup.enter.native="search"
               v-model="searchValue"
               icon-clickable>
      </b-input>
    </b-field>

    <Card
      :active="active"
      v-for="movie in movies"
      :key="movie.id"
      :id="movie.id"
      :title='movie.original_title'
      :description='movie.overview'
      :image='movie.poster_path'
    >

    </Card>
  </section>

</template>

<script>
import Card from '~/components/Card';

export default {
  name: 'HomePage',

  async asyncData({ $axios }) {
    const movies = await $axios.$get('http://localhost:3000/the-movie-db/search?expression=avenger')
    return { movies: movies.results }
  },

  methods: {
    async search() {
      this.active = false
      const {data : movies} = await this.$axios.get(`http://localhost:3000/the-movie-db/search?expression=${this.searchValue}`)
      this.movies = movies.results
      this.active = true
    }
  },

  components: {
    Card,
  },
  data() {
    return {
      movies: [],
      active: true,
      searchValue : '',
    };
  },
};
</script>
