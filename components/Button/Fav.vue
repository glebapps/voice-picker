<template>
  <button @click="handleClick">
    <FavOn v-if="isFaved" />
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
    isFaved: {
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

  background-color: var(--bg-voice--hover);
  border-radius: 50%;
}
</style>
