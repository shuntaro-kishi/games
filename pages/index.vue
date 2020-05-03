<template lang="pug">
  div.container
    div.-choose-game
      div(@click="goToGame('tic-tac-toe')").-one-game
        h2.-game-title 三目並べ
        img(src="../assets/images/Tic_tac_toe.svg.png")

</template>

<script>

export default {
  components: {
    // Logo
  },
  methods: {
    goToGame (game) {
      this.$router.push('/' + game)
    }
  }
}
</script>

<style lang="sass">
.container
  margin: 0 auto
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  .-choose-game
    .-one-game
      cursor: pointer

</style>
