<template>
  <div class="input">
    <SearchIcon class="input__icon" />
    <input type="text" />
  </div>
</template>

<script>
import SearchIcon from '~/assets/svg/search.svg?inline'
export default {
  components: {
    SearchIcon,
  },
}
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  display: flex;
  align-items: center;

  &__icon {
    position: absolute;
    left: 4px;
  }

  input {
    @include inputStyle(16px);

    padding-left: 32px;
  }
}
</style>
