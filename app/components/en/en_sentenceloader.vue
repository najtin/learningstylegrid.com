<script type="text/javascript">
  import sentences from './en_sentences.json';

  export default {
    name: 'App',
    created() {
      this.$store.dispatch('initScores', sentences.length);
      this.$store.dispatch('initSentences', sentences);
    },
  }
</script>
