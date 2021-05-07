<template>
  <div>
    <Toolbar class="toolbar" />
    <div class="main">
      <SectionTitle>Favourite voices</SectionTitle>
      <VoiceGrid :voices="favVoices" />
      <SectionTitle>Pro voices</SectionTitle>
      <VoiceGrid :voices="voices" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      voices: this.$store.state.voices,
      favVoices: this.$store.state.favVoices,
    }
  },
}
</script>

<style lang="scss" scoped>
.toolbar {
  width: 100%;
  margin-top: 32px;
  margin-bottom: 32px;
  padding: 0 24px;

  @media screen and (min-width: $screen-sm) {
    padding: 0 56px;
  }

  @media screen and (min-width: $screen-tablet) {
    padding: 0 100px;
  }
}

.main {
  display: flex;
  flex-direction: column;
  padding: 0 32px;

  @media screen and (min-width: $screen-sm) {
    padding: 0 68px;
  }

  @media screen and (min-width: $screen-tablet) {
    padding: 0 120px;
  }
}
</style>
