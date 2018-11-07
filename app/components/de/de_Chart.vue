<script type="text/javascript">
    import learningStyles from './de_learning-styles.json'
    import Chart_base from '../Chart_base.vue'
    import percentiles from '../percentiles.json';

      export default {
        name: 'Chart',
        props: {
          scoreTotal: {
            type: Object,
            required: true,
          },
        },
        data() {
          return {
            ACCE: this.scoreTotal.AC - this.scoreTotal.CE,
            AERO: this.scoreTotal.AE - this.scoreTotal.RO,
            learningStyles,
            styleKeyGrid: [
              [ 'initiating', 'experiencing', 'creating' ],
              [ 'acting', 'balancing', 'reflecting' ],
              [ 'deciding', 'thinking', 'analyzing' ],
            ],
          };
        },
        computed: {
          defineLearningStyle() {
            let style = {};

            if (this.ACCE < 6 && this.AERO > 11) {
              style = learningStyles.initiating;
            } else if (this.ACCE < 6 && this.AERO > 0 && this.AERO < 12) {
              style = learningStyles.experiencing;
            } else if (this.ACCE < 6 && this.AERO < 1) {
              style = learningStyles.creating;
            } else if (this.ACCE > 5 && this.ACCE < 15 && this.AERO < 1) {
              style = learningStyles.reflecting;
            } else if (this.ACCE > 14 && this.AERO < 1) {
              style = learningStyles.analyzing;
            } else if (this.ACCE > 14 && this.AERO > 0 && this.AERO < 12) {
              style = learningStyles.thinking;
            } else if (this.ACCE > 14 && this.AERO > 11) {
              style = learningStyles.deciding;
            } else if (this.ACCE > 5 && this.ACCE < 15 && this.AERO > 11) {
              style = learningStyles.acting;
            } else if (this.ACCE > 5 && this.ACCE < 15 && this.AERO > 0 && this.AERO < 12) {
              style = learningStyles.balancing;
            } else {
              style = {
                name: 'Undefined',
              };
            }

            this.$emit('define-learning-style', style);

            return style;
          },
          pointPercentiles() {
            return {
              ACCE: this.calcPercentile('ACCE', this.ACCE),
              AERO: this.calcPercentile('AERO', this.AERO),
            };
          },
          pointPosition() {
            const y = this.pointPercentiles.ACCE;
            const x = this.pointPercentiles.AERO;

            const sizeTable = 19.5;
            const diameterPoint = 2;
            //const offset = 100 * ((diameterPoint / sizeTable) / 2);
            const offset=0;
            return {
              top: y - offset + '%',
              left: (100 - x) - offset + '%',
            };
          },
          pointTitle() {
            return `ACCE= ${this.pointPercentiles.ACCE}% AERO= ${this.pointPercentiles.AERO}%`;
          },
        },
        methods: {
          calcPercentile(type, value) {
            const offset = percentiles[type].offset;
            const maxValue = percentiles[type].data.length - offset;

            let percent = 0;

            if (value + offset < 0) {
              percent = 0;
            } else if (value > maxValue) {
              percent = 100;
            } else {
              percent = percentiles[type].data[value + offset];
            }
            return percent;
          },
        },
        mixins: [Chart_base],
      }

</script>
