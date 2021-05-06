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
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  column-gap: 48px;
  row-gap: 32px;
  align-items: baseline;
}
</style>
