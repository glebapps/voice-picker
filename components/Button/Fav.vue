<template>
  <div>
    <FavOn v-if="selected" />
    <FavOff v-else />
  </div>
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
}
</script>
