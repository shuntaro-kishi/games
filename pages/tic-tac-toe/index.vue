<template lang="pug">
  div.tic-tac-toe
    h2.-title 三目並べ
    Board(
      :boardStatus="boardStatus"
      :xIsNext="xIsNext"
      @squareClicked="squareClicked"
    ).-board

</template>

<script>
import Board from '~/components/TicTacToe/board.vue'

export default {
  components: {
    Board
  },
  data () {
    return {
      boardStatus: [
        Array(3).fill(null),
        Array(3).fill(null),
        Array(3).fill(null)
      ],
      xIsNext: true
    }
  },
  methods: {
    squareClicked (n, m) {
      const copyBoard = this.boardStatus.slice()
      this.xIsNext ? copyBoard[n - 1][m - 1] = 'X' : copyBoard[n - 1][m - 1] = '○'
      this.boardStatus = copyBoard
      this.xIsNext = !this.xIsNext
    }
  }
}
</script>

<style lang="sass" scoped>
.tic-tac-toe
  text-align: center
  .-board
</style>
