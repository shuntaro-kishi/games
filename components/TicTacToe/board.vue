<template lang="pug">
  div.borad
    div(v-for="n in 3").-borad-rows
      div(v-for="m in 3").-borad-one-row
        Square(
          :value="boardStatus[n-1][m-1]"
          @clicked="squareClicked(n, m)"
        )

</template>

<script>
import Square from '~/components/TicTacToe/Square.vue'

export default {
  components: {
    Square
  },
  props: {
    boardStatus: { default: () => [], type: Array, required: true }
  },
  methods: {
    squareClicked (n, m) {
      this.$emit('square-clicked', n, m)
    }
  }
}
</script>

<style lang="sass" scoped>
.borad
  padding: 16px
  .-borad-rows
    display: flex
    justify-content: center
    .-borad-one-row
      margin: -1px 0 0 -1px
</style>
