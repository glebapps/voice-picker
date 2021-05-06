<template>
  <div>
    <Toolbar class="toolbar" />
    <div class="main">
      <SectionTitle>Favourite voices</SectionTitle>
      <SectionTitle>Pro voices</SectionTitle>
      <VoiceGrid />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar {
  margin-top: 32px;
  margin-bottom: 32px;
  padding: 0 100px;
}
.main {
  display: flex;
  flex-direction: column;
  padding: 0 120px;
}
</style>
