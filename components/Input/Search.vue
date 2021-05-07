<template>
  <div class="input">
    <SearchIcon class="input__search-icon" />
    <input v-model="query" type="text" />
    <butto class="input__close-icon" @click="query = ''">
      <SearchClose v-if="query" />
    </butto>
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
  data() {
    return {
      query: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  display: flex;
  align-items: center;
  max-width: fit-content;

  &__search-icon {
    position: absolute;
    left: 4px;
  }

  &__close-icon {
    @include buttonStyle();

    position: absolute;
    right: 8px;
  }

  input {
    @include inputStyle(16px);

    padding: 0 32px;
  }
}
</style>
