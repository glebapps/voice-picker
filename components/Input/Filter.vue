<template>
  <InputBaseSelect :options="options">
    <EyeIcon />
  </InputBaseSelect>
</template>

<script>
import EyeIcon from '~/assets/svg/filter.svg?inline'

export default {
  components: {
    EyeIcon,
  },
  computed: {
    options() {
      const allTags = this.$store.state.voices.flatMap((voice) => voice.tags)
      const uniqueTags = new Set(allTags)
      return Array.from(uniqueTags)
    },
  },
}
</script>
