<template>
  <div class="input">
    <SearchIcon class="input__search-icon" />
    <input
      id="search"
      v-model="query"
      type="text"
      aria-label="Search voice by name"
      @input="search"
    />
    <button class="input__close-icon" @click="clearSearch">
      <SearchClose v-if="query" aria-hidden="true" role="presentation" />
    </button>
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
  methods: {
    search() {
      if (this.query) {
        this.$store.commit('search', this.query)
      } else {
        this.$store.commit('resetData')
      }
    },
    clearSearch() {
      this.query = ''
      this.$store.commit('resetData')
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  display: flex;
  align-items: center;

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
