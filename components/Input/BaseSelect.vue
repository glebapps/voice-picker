<template>
  <div class="select">
    <slot />
    <select :id="id" v-model="selectedOption" :name="id" @change="onChange">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedOption: this.id === 'sort' ? 'asc' : 'all',
    }
  },
  methods: {
    onChange() {
      if (this.id === 'sort') {
        this.$store.commit('sort', this.selectedOption)
      } else {
        this.$store.commit('filter', this.selectedOption)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
select {
  @include inputStyle();

  min-width: 150px;
  margin-left: 8px;
}

.select {
  display: flex;
}
</style>
