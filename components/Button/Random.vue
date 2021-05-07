<template>
  <div @click="pickRandomVoice">RANDOM</div>
</template>

<script>
export default {
  methods: {
    pickRandomVoice() {
      this.$store.commit('pickRandomVoice')
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  @include buttonStyle();
}

div {
  cursor: pointer;
}
</style>
