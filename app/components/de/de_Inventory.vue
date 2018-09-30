<!-- care when changeging  computed:sentence language sensitive -->
<template>
  <div class="inventory">
    <div class="inventory_sentence">
      <transition name="fade" mode="out-in">
        <app-sentence
          :number="sentenceNumber"
          :begin="sentence.begin"
          :endings="sentence.endings"
          :scores="sentenceScores"
          :key="sentenceNumber"
          @rank="rankSentence"></app-sentence>
      </transition>
    </div>
    <div class="inventory__buttons">
      <button class="button button--secondary" @click="prevSentence">
        ← {{ checkPrev ? 'Zurück' : 'Anleitung' }}
      </button>
      <button class="button button--primary" @click="nextSentence">
        {{ checkNext ? 'Weiter' : 'Zeige Diagramm' }} →
      </button>
    </div>
    <div class="inventory__buttons">
      <button class="button button--secondary" @click="skip">
        Skip
      </button>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Sentence from '../Sentence.vue';
  import Inventory_base from '../Inventory_base.vue';

  export default {
    name: 'Inventory',
    props: {
      sentenceNumber: {
        type: Number,
        required: true,
      },
    },
    computed: {
      sentenceCount() {
        return this.$store.getters.sentenceCount;
      },
      sentence() {
        return this.$store.getters.de_sentence(this.sentenceNumber);
      },
      sentenceScores() {
        return this.$store.getters.sentenceScores(this.sentenceNumber);
      },
      checkPrev() {
        return this.sentenceNumber > 1;
      },
      checkNext() {
        return this.sentenceNumber < this.sentenceCount;
      },
    },
    components: {
      appSentence: Sentence,
    },
    methods: {
      prevSentence() {
        if (this.checkPrev) {
          this.$router.push(`/app/de/inventory/sentence-${this.sentenceNumber - 1}`);
        } else {
          this.$router.push('/app/de/instructions');
        }
      },
      nextSentence() {
        if (this.checkNext) {
          this.$router.push(`/app/de/inventory/sentence-${this.sentenceNumber + 1}`);
        } else {
          var out = "";
          for (var i = 1; i <= 12; i++) {
            out += { ...this.$store.getters.sentenceScores(i)}.AC + ","
                + { ...this.$store.getters.sentenceScores(i)}.CE + ","
                + { ...this.$store.getters.sentenceScores(i)}.AE + ","
                + { ...this.$store.getters.sentenceScores(i)}.RO;
            if (i < 12) out += ","
          }
          this.$store.dispatch('questionsUpdate', {
            questionsres: out,
          });
          this.$router.push('/app/de/grid');
        }
      },
      skip() {
        let i = this.sentenceCount;
        while (i-- > 0){
          this.$store.dispatch('updateScores', {
            number: i,
            scores: { CE: 1, RO: 2, AC: 3, AE: 4 },
          });
        }
        this.$router.push('/app/de/inventory/sentence-12');
      },
      rankSentence(sentenceScores) {
        this.$store.dispatch('updateScores', {
          number: this.sentenceNumber,
          scores: sentenceScores,
        });
      }
    },
    mixins: [Inventory_base],
  }
</script>
