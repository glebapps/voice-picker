<template>
  <InputBaseSelect id="filter" :options="options" label="Filter voices by tag">
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
      const allTagsArray = Array.from(uniqueTags)
      allTagsArray.unshift('all')
      return allTagsArray.map((tag) => ({
        label: this.camelCase(tag),
        value: tag,
      }))
    },
  },
  methods: {
    camelCase(tag) {
      return tag.charAt(0).toUpperCase() + tag.slice(1)
    },
  },
}
</script>
