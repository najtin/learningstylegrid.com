<template>
  <div class="chart">
    <div class="chart__table">
      <table>
        <tr v-for="keys in styleKeyGrid">
          <td
            v-for="key in keys"
            class="learning-style"
            :class="{
              'learning-style--defined': learningStyles[key].name === defineLearningStyle.name
            }">{{ learningStyles[key].name }}</td>
        </tr>
      </table>
      <!--<div class="point" :style="pointPosition" :title="pointTitle"></div>-->
    </div>
    <div class="chart__source-data">
      <p>
        <span title="Abstract Conceptualization">AC= {{ scoreTotal.AC }}</span>
        <span title="Concrete Experience">CE= {{ scoreTotal.CE }}</span>
        <span title="Active Experimentation">AE= {{ scoreTotal.AE }}</span>
        <span title="Reflective Observation">RO= {{ scoreTotal.RO }}</span>
        <span>|</span>
        <span title="AC - CE">ACCE= {{ ACCE }}</span>
        <span title="AE - RO">AERO= {{ AERO }}</span>
      </p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .chart {
    $sizeTable: 19.5rem;

    &__table {
      position: relative;

      table {
        background-color: $color-white;
        border-collapse: collapse;
        border: .2rem solid darken($color-primary, 10);
      }

      td {
        border: .15rem solid darken($color-primary, 10);
        font-size: .9rem;
        height: $sizeTable/3;
        text-align: center;
        width: $sizeTable/3;
      }
    }

    &__source-data {
      color: lighten($color-black, 20);
      font-size: .7rem;
      text-align: center;
    }
  }

  .point {
    $diameter: 2rem;

    background-color: rgba($color-blue, .8);
    border-radius: 50%;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .17);
    height: $diameter;
    position: absolute;
    width: $diameter;
  }

  .learning-style {
    &--defined {
      background-color: lighten($color-primary, 5);
      color: $color-white;
      font-weight: 600;
    }
  }
</style>
