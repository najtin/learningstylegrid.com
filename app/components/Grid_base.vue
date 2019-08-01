<style lang="scss" scoped>
  .grid {
    &__wrapper {
      margin: 0 auto;
      max-width: 60.5rem;
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

    &__important-message {
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

    &__description {
      max-width: 340px;
      margin: $font-height / 2 0;
      i {
        font-size: 1rem;
      }
    }

    &__buttons {
      margin: 1.5rem .15rem 0;
    }
  }
  * {
    box-sizing: border-box;
  }

  /* Create two equal columns that floats next to each other */
  .column {
      float: left;
      width: 50%;
      padding: 10px;
  /*    height: 300px;  Should be removed. Only for demonstration */
  }

  /* Clear floats after the columns */
  .row:after {
      content: "";
      display: table;
      clear: both;
  }
</style>
