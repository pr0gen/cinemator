<template>
  <article class='media'>
    <figure class='media-left'>
      <p class='image is-64x64'>
        <b-skeleton v-if='!active' width='64px' height='64px'></b-skeleton>
        <img v-else :src='image' alt='movie image'>
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

      <!--      <nav class='level is-mobile'>-->
      <!--        <div class='level-left'>-->
      <!--          <a class='level-item'>-->
      <!--            <span class='icon is-small'>-->
      <!--              <b-skeleton></b-skeleton>-->
      <!--            </span>-->
      <!--          </a>-->
      <!--          <a class='level-item'>-->
      <!--            <span class='icon is-small'>-->
      <!--              <b-skeleton></b-skeleton>-->
      <!--            </span>-->
      <!--          </a>-->
      <!--        </div>-->
      <!--      </nav>-->

    </div>
  </article>

</template>

<script>
export default {
  props: {
    active: Boolean,
    title: String,
    description: String,
    image: String,
  },
};
</script>
