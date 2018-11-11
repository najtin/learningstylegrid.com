<template>
<div class="grid">
  <h1>Lernstil-Gitter</h1>
  <div class="grid__wrapper">
    <div class="grid__error-message" v-if="scoreSum !== (1 + 2 + 3 + 4) * scoreCount">
      <p>Enschuldigung, es wurden noch nicht alle Fragen beantwortet. <i class="fa fa-lg fa-frown-o"></i></p>
      <div class="grid__buttons">
        <button class="button button--secondary" @click="backInventory">← zurück</button>
      </div>
    </div>
    <div v-else>
      <div class="row">
       <div class="column">
         <div align="left" class="grid__chart">
           <app-chart :score-total="scoreTotal" @define-learning-style="learningStyle = $event"></app-chart>
         </div>
       </div>
       <div class="column">
         <div class="grid__learning-style">
           <p>Sie haben den <strong>{{ learningStyle.name }}en</strong> Lernstil.</p>
           <p>Stärken: {{ learningStyle.strengths }}</p>
           <p>Lernumgebung: {{ learningStyle.enviroment }}</p>
           <p>Herrausforderungen: {{ learningStyle.challenges }}</p>
         </div>
       </div>
      </div>
      <div class="grid__description" <p>{{ learningStyle.description }}</p>
        <p>Für mehr Informationen, können sie die Seite #{{ learningStyle.page }} des Handbuchs <a href="https://learningfromexperience.com/research-library/the-kolb-learning-style-inventory-4-0/" target="_blank">KLSI 4.0 lesen.</a>.</p>
        <div class="grid__important-message">
          <p>Bitte fügen sie hier die Nummer von oben links ein:<input type="text" id="uuid" value=""></p>
          <div class="grid__buttons">
            <button class="button button--secondary" @click="exData"> Weiter </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script type="text/javascript">
import {
  mapGetters
} from 'vuex'
import Chart from './de_Chart.vue';
import Grid_base from '../Grid_base.vue';


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
    'questionsres'
  ]),

  components: {
    appChart: Chart,
  },

  methods: {
    backInventory() {
      this.$router.push(`/app/de/inventory/sentence-${this.sentenceCount}`);
    },
    exData(){
      var uuid = document.getElementById("uuid").value;
      if (uuid==="") return;
      var out = "&order=ACCEAERO";
      for (var i = 1; i <= 12; i++) {
        out +="&klsi"+i+"="+ { ...this.$store.getters.sentenceScores(i)}.AC
            + { ...this.$store.getters.sentenceScores(i)}.CE
            + { ...this.$store.getters.sentenceScores(i)}.AE
            + { ...this.$store.getters.sentenceScores(i)}.RO;

      }
      window.location = "https://ffp.informatik/submit_results.php?"+"id="+uuid+out;
    },
},
  mixins: [Grid_base],
}
</script>
