<template>
  <div class="grid">
    <h1>Lernstil-Gitter</h1>
    <div class="grid__wrapper">
      <div class="grid__error-message" v-if="scoreSum !== (1 + 2 + 3 + 4) * scoreCount">
        <p>Enschuldigung, du hast noh nicht alle Fragen beantwortet. <i class="fa fa-lg fa-frown-o"></i></p>
      </div>
      <div v-else>
        <div class="grid__chart">
          <app-chart
            :score-total="scoreTotal"
            @define-learning-style="learningStyle = $event"></app-chart>
        </div>
        <div class="grid__learning-style">
          <p>Du hast den <strong>{{ learningStyle.name }}</strong> Lernstil.</p>
          <p>Für mehr Informationen, kannst du die Seite #{{ learningStyle.page }} des Handbuchs <a href="https://learningfromexperience.com/research-library/the-kolb-learning-style-inventory-4-0/" target="_blank">KLSI 4.0 nachsehen.</a>.</p>
        </div>
      </div>
      <div class="grid__buttons">
        <button class="button button--secondary" @click="backInventory">← zurück</button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import Chart from './de_Chart.vue';

  export default {
    name: 'Grid',
    data() {
      return {
        learningStyle: {
          name: 'Undefined',
        },
      };
    },
    computed: mapGetters([
      'scoreCount',
      'scoreSum',
      'scoreTotal',
      'sentenceCount',
    ]),

    components: {
      appChart: Chart,
    },
    methods: {
      backInventory() {
        this.$router.push(`/app/de/inventory/sentence-${this.sentenceCount}`);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .grid {
    &__wrapper {
      margin: 0 auto;
      max-width: 19.5rem;
    }

    &__error-message {
      color: $color-red;
      font-weight: 600;

      i {
        background-color: $color-white;
        border-radius: 50%;
        color: $color-red;
        font-size: 1.5rem;
      }
    }

    &__chart {

    }

    &__learning-style {
      a {
        white-space: nowrap;
      }
    }

    &__buttons {
      margin: 1.5rem .15rem 0;
    }
  }
</style>
