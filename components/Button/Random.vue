<template>
  <button>
    <RandomIcon />
  </button>
</template>

<script>
import RandomIcon from '~/assets/svg/button-random.svg?inline'
export default {
  components: {
    RandomIcon,
  },
}
</script>

<style lang="scss" scoped>
button {
  @include buttonStyle();
}
</style>
