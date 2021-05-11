<template>
  <article class='media' @click='show'>
    <figure class='media-left'>
      <p class='image is-64x64'>
        <b-skeleton v-if='!active' width='64px' height='64px'></b-skeleton>
        <img v-else :src='image ? "https://image.tmdb.org/t/p/original/"+image : ""' alt='movie image'>
      </p>
    </figure>

    <div class='media-content'>

      <div class='content'>
        <p v-if='!active'>
          <b-skeleton active></b-skeleton>
          <b-skeleton height='80px'></b-skeleton>
        </p>
        <span v-else>
          <p>{{ title }}</p>
          <p>{{ description }}</p>
        </span>

      </div>

    </div>
  </article>

</template>

<script>
export default {
  props: {
    key: Number,
    id: Number,
    active: Boolean,
    title: String,
    description: String,
    image: String,
  },

  methods: {
    show(){
      this.$router.push({path: '/' + this.id })
      console.log('click movie');
    }
  }

};
</script>

<style scoped>

  .media:hover {
    background-color: #e6e6e6;
    border-radius: 5px;
    cursor: pointer ;
  }
  .media {
    padding: 10px;
  }

</style>
