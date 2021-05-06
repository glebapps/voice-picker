<template>
  <div>
    <Toolbar class="toolbar" />
    <div class="main">
      <VoiceGrid />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar {
  margin-top: 32px;
  margin-bottom: 120px;
  padding: 0 100px;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 120px;
}
</style>
