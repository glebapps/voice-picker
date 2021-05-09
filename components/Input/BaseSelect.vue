<template>
  <div class="select-wrapper">
    <slot />
    <div :id="id" class="select">
      <button
        :aria-label="label"
        class="select__selected"
        @click="toggleOptions"
      >
        {{ selectedOption }}
        <Arrow
          aria-hidden="true"
          role="presentation"
          class="arrow"
          :class="optionsVisible && 'arrow--up'"
        />
      </button>
      <ul class="options" :class="optionsVisible && 'options--visible'">
        <li
          v-for="option in options"
          :key="option"
          class="options__item"
          @click="handleSelect(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Arrow from '~/assets/svg/select-arrow.svg?inline'

export default {
  components: {
    Arrow,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      optionsVisible: false,
    }
  },
  computed: {
    selectedOption() {
      return this.id === 'sort'
        ? this.$store.state.currentOrder
        : this.$store.state.currentFilter
    },
  },
  methods: {
    handleSelect(option) {
      if (this.id === 'sort') {
        this.$store.commit('sort', option)
      } else {
        this.$store.commit('filter', option)
      }
      this.toggleOptions()
    },
    toggleOptions() {
      this.optionsVisible = !this.optionsVisible
    },
  },
}
</script>

<style lang="scss" scoped>
.select-wrapper {
  display: flex;
}

.select {
  position: relative;
  width: 100%;
  &__selected {
    @include buttonStyle();
    @include inputStyle();

    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 150px;
    margin-left: 8px;
  }

  .options {
    position: absolute;
    z-index: 2;
    display: none;
    width: 100%;
    margin-top: 2px;
    padding: 0 8px;
    list-style-type: none;

    &--visible {
      display: block;
    }

    &__item {
      margin-top: 1px;
      padding: 8px 16px;
      text-align: left;
      background-color: var(--bg-select-options);
      cursor: pointer;
      transition: background-color 0.3s linear;
      &:hover {
        background-color: var(--bg-input);
      }
    }
  }
}

.arrow {
  transition: all 0.3s linear;
  &--up {
    transform: scaleY(-1);
  }
}
</style>
