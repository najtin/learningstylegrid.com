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
        <div align="center">
          <div class="boxed" align="left">
            <p><b>Der ermittelte Lernstil passt zu mir.</b></p>
            <div align="right">
              trifft voll zu<input id="rating" type="range" min="1" max="7" value="4">trifft gar nicht zu
            </div>
            <p><b>Fünfsteller oder E-Mail:</b></p>
            <div align="right"><p><input type="text" required id="id" value="" placeholder="abcde"></p></div>
            <p><b>Studiengang:</b></p>
            <div align="right">
              <p><select id="course">
                <option v-for="item in this.courses" :value='item'>
                  {{ item }}
                </option>
              </select></p>
            </div>
            <p><b>Ich kann ...</b></p>
            <div align="right">
              <label v-for="(item,index) in this.can">
                {{ item }}<input type="checkbox" :id='"can"+index'><br>
              </label>
            </div>
              <p><b>Ich habe schon mal mit ... gearbeitet.</b></p>
            <div align="right">
              <label v-for="(item,index) in this.has">
                {{ item }}<input type="checkbox" :id='"has"+index'><br>
              </label>
            </div>
            <div align="center">
              <p><label>Ich bin einverstanden mit der Verarbeitung und Speicherung meiner Daten, wie in der <a target="_blank" href="">Datenschutzvereinbarung</a> berschrieben.<input id="consent" type="checkbox"></label></p>
              <div class="grid__buttons">
                <button class="button button--secondary" @click="exData"> Weiter </button>
              </div>
            </div>
            <div hidden id="ACCE">{{ learningStyle.ACCE }}</div>
            <div hidden id="AERO">{{ learningStyle.AERO }}</div>
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
import courses from '../courses.json';



export default {
  name: 'Grid',
  data() {
    return {
      learningStyle: {
        name: 'Undefined',
      },
      courses: courses,
      ratings: [""],
      can: ['eigene kleine Programme schreiben','Nutzer und Rechte verwalten, Prozesse beenden','die Kommandozeile benutzen'],
      has: ["Datenbanken","Suchen/Sortieren","Bäumen/Listen/Graphen","Modellierung von Abläufen","Webseitenprogrammierung","logischen Schaltungen"],
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
      var id = document.getElementById("id").value;
      if(id=="") return
      if (document.getElementById("consent").checked==false){
        alert("Sie müssen den Datenschutzbestimmungen zustimmen, um sich anzumelden.");
        return;
      }
      var out = "?id="+id+"&acce="+document.getElementById("ACCE").innerHTML+"&aero="+document.getElementById("AERO").innerHTML;
      out+="&rating="+document.getElementById("rating").value;
      //nur die Ergebnisse senden, nicht die eizelenen antworten
      var experience = 0;
      for( var i = 0; i < this.can.length; i++) if(true==document.getElementById("can"+i).checked) experience++;
      for( var i = 0; i < this.has.length; i++) if(true==document.getElementById("has"+i).checked) experience++;
      out += "&exp="+experience;
      out += "&course="+document.getElementById("course").value;
      window.location = "/submit/submitData.php"+out;
    },
},
  mixins: [Grid_base],
}
</script>
