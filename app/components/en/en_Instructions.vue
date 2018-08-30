<template>
  <div class="instructions">
    <h1 class="instructions__title">Instructions for the <abbr title="Learning Style Inventory">LSI</abbr></h1>
    <ol class="instructions__list">
      <li class="instructions__item instruction">
        <span class="instruction__text" v-once>Rank the endings for {{ sentenceCount }} sentences: 4 for most like you, 1 for least like you.</span>
      </li>
      <li class="instructions__item instruction">
        <span class="instruction__text">Do not give two ending the same ranking.</span>
      </li>
      <li class="instructions__item instruction">
        <span class="instruction__text">Use your first impression.</span>
      </li>
      <li class="instructions__item instruction">
        <span class="instruction__text">Should take no more than 5 minutes.</span>
      </li>
    </ol>
    <router-link to="/app/en/inventory" tag="a" class="instructions__button button button--primary">Start Inventory</router-link>
  </div>
</template>

<script type="text/javascript">
import Instructions_base from '../Instructions_base.vue'
export default {
    mixins: [Instructions_base],
  }
</script>
