<template>
  <div class="grid">
    <VoicePill
      v-for="voice in voices"
      :key="voice.id"
      :name="voice.name"
      :icon="voice.icon"
    />
  </div>
</template>

<script>
import voicesJson from '~/content/voices.json'

export default {
  data() {
    return {
      voices: voicesJson,
    }
  },
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(1, 1fr);
  align-items: baseline;
  column-gap: 48px;
  row-gap: 32px;

  @media screen and (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 520px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
