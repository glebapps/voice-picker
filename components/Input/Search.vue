<template>
  <div class="input">
    <SearchIcon class="input__icon" />
    <input type="text" />
    <SearchClose class="input__icon-close" />
  </div>
</template>

<script>
import SearchIcon from '~/assets/svg/search.svg?inline'
import SearchClose from '~/assets/svg/search-close.svg?inline'
export default {
  components: {
    SearchIcon,
    SearchClose,
  },
}
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  display: flex;
  align-items: center;
  max-width: fit-content;

  &__icon {
    position: absolute;
    left: 4px;
  }

  &__icon-close {
    position: absolute;
    right: 8px;
  }

  input {
    @include inputStyle(16px);

    padding: 0 32px;
  }
}
</style>
