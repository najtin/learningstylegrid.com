<script type="text/javascript">
  export default {
    name: 'Instructions',
    computed: {
      sentenceCount() {
        return this.$store.getters.sentenceCount;
      },
    },
  }
</script>

<style lang="scss" scoped>
  .instructions {
    &__title {
      abbr[title] {
        border-bottom: none;
        cursor: inherit;
        text-decoration: none;
      }
    }

    &__list {
      counter-reset: li;
      display: table;
      margin: 0 auto;
      max-width: 340px;
      padding: 0 0 3rem 0;
    }

    &__item {
      text-align: left;
    }
  }

  .instruction {
    display: table-row;
    margin: $font-height / 2 0;

    &:before {
      $size-circle: $font-height + .1rem;

      background-color: $color-black;
      border-radius: 50%;
      color: $color-white;
      content: counter(li);
      counter-increment: li;
      display: inline-block;
      height: $size-circle;
      text-align: center;
      width: $size-circle;
    }

    &__text {
      display: table-cell;
      padding: 0 0 1.5rem 1rem;
    }
  }
</style>
