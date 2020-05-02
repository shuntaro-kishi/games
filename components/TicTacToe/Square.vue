<template lang="pug">
  div(@click="onClick").square
    | {{ value }}

</template>

<script>
export default {
  props: {
    value: { default: null, type: String, required: false }
  },
  methods: {
    onClick () {
      if (!this.value) {
        this.$emit('clicked')
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.square
  width: 50px
  height: 50px
  border: solid 1px #222
  line-height: 50px
  font-size: 50px
</style>
