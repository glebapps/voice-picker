<template>
  <div @click="pickRandomVoice">
    <RandomPickerIcon />
  </div>
</template>

<script>
import RandomPickerIcon from '~/assets/svg/button-random.svg?inline'
export default {
  components: {
    RandomPickerIcon,
  },
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
