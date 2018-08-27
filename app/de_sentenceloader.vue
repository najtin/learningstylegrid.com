<script type="text/javascript">
  import sentences from './components/de/de_sentences.json';

  export default {
    name: 'App',
    created() {
      this.$store.dispatch('initScores', sentences.length);
      this.$store.dispatch('initSentences', sentences);
    },
  }
</script>
