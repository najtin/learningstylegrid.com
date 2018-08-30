<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script type="text/javascript">
  import de_sentences from './components/de/de_sentences.json';
  import en_sentences from './components/en/en_sentences.json';

  export default {
    created() {
      this.$store.dispatch('initScores', en_sentences.length);
      this.$store.dispatch('en_initSentences', en_sentences);
      this.$store.dispatch('de_initSentences', de_sentences);
    },
  }
</script>

<style lang="scss" scoped>

</style>
