<template>
  <div class="instructions">
    <h1 class="instructions__title">Anleitung für das <abbr title="Lernstil-Inventar">LSI</abbr></h1>
    <ol class="instructions__list">
      <li class="instructions__item instruction">
        <span class="instruction__text" v-once>Bewerten sie die Enden von {{ sentenceCount }} Sätzen:<br> 4 ist die höchste <br>1 die niedrigste Punktzahl</span>
      </li>
      <li class="instructions__item instruction">
        <span class="instruction__text">Zwei Enden können nicht die gleiche Punktzahl haben.</span>
      </li>
      <li class="instructions__item instruction">
        <span class="instruction__text">Wählen sie die Antworten möglichst intuitiv.</span>
      </li>
    </ol>
    <router-link to="/app/de/inventory" tag="a" class="instructions__button button button--primary">Beginnen</router-link>
  </div>
</template>

<script type="module">
    import Instructions_base from '../Instructions_base.vue'
    export default {
        mixins: [Instructions_base],
      }
</script>
