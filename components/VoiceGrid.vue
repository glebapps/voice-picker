<template>
  <div class="grid">
    <VoicePill
      v-for="voice in voices"
      :id="voice.id"
      :key="voice.id"
      :name="voice.name"
      :icon="voice.icon"
    />
  </div>
</template>

<script>
export default {
  props: {
    voices: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(2, 1fr);
  align-items: baseline;
  column-gap: 48px;
  row-gap: 32px;

  @media screen and (min-width: $screen-sm) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: $screen-tablet) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: $screen-xl) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: $screen-max) {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
