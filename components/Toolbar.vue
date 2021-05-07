<template>
  <div class="toolbar">
    <InputSearch />
    <div class="toolbar__actions">
      <InputFilter /> <InputSort /> <ButtonRandom />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: $screen-xl) {
    flex-direction: row;
    justify-content: space-between;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 36px;

    & > :nth-child(2) {
      padding: 32px 0;
    }

    @media screen and (min-width: $screen-sm) {
      flex-direction: row;
      & > :nth-child(2) {
        padding: 0 20px 0 42px;
      }
    }
    @media screen and (min-width: $screen-xl) {
      flex-direction: row;
      justify-content: space-between;
      margin-top: 0;
    }
  }
}
</style>
