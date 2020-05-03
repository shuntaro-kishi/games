<template lang="pug">
  div.show-status
    p {{ showStatusText }}
</template>

<script>
export default {
  props: {
    boardStatus: { default: () => [], type: Array, required: true },
    xIsNext: { default: true, type: Boolean, required: true }
  },
  data () {
    return {
      winner: ''
    }
  },
  computed: {
    calcWinner () {
      const winConditions = [
        [
          [0, 0], [0, 1], [0, 2]
        ],
        [
          [1, 0], [1, 1], [1, 2]
        ],
        [
          [2, 0], [2, 1], [2, 2]
        ],
        [
          [0, 0], [1, 0], [2, 0]
        ],
        [
          [0, 1], [1, 1], [2, 1]
        ],
        [
          [0, 2], [1, 2], [2, 2]
        ],
        [
          [0, 0], [1, 1], [2, 2]
        ],
        [
          [0, 2], [1, 1], [2, 0]
        ]
      ]
      winConditions.forEach((winCondition) => {
        const a = (this.boardStatus[winCondition[0][0]][winCondition[0][1]])
        const b = (this.boardStatus[winCondition[1][0]][winCondition[1][1]])
        const c = (this.boardStatus[winCondition[2][0]][winCondition[2][1]])
        if (a && a === b && b === c) {
          this.winner = a
        }
      })
      return this.winner
    },
    showStatusText () {
      if (this.calcWinner) {
        this.$store.dispatch('games/TicTacToe/finish')
        return 'winner is : ' + this.winner
      } else {
        return `next player is : ${this.xIsNext ? 'X' : '○'}`
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
