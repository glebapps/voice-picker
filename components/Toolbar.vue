<template>
  <div class="toolbar">
    <InputSearch />
    <div class="toolbar__actions">
      <InputFilter /> <InputSort /> <RandomButton />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar {
  display: flex;
  justify-content: space-between;

  &__actions {
    display: flex;
    & > :nth-child(2) {
      padding: 0 20px 0 42px;
    }
  }
}
</style>
