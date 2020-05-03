<template lang="pug">
  div.tic-tac-toe
    h2.-title 三目並べ
    show-status(
      :board-status="boardStatus"
      :x-is-next="xIsNext"
    )
    board(
      :board-status="boardStatus"
      @square-clicked="squareClicked"
    ).-board

</template>

<script>
import Board from '~/components/TicTacToe/board.vue'
import ShowStatus from '~/components/TicTacToe/ShowStatus.vue'

export default {
  components: {
    Board,
    ShowStatus
  },
  data () {
    return {
      boardStatus: [
        Array(3).fill(null),
        Array(3).fill(null),
        Array(3).fill(null)
      ],
      xIsNext: true,
      finished: false
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
</style>
