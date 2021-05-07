<template>
  <button @click="handleClick">
    <FavOn v-if="selected" />
    <FavOff v-else />
  </button>
</template>

<script>
import FavOff from '~/assets/svg/voice-favourite-off.svg?inline'
import FavOn from '~/assets/svg/voice-favourite.svg?inline'

export default {
  components: {
    FavOff,
    FavOn,
  },
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  @include buttonStyle();
}
</style>
