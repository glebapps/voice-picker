<template>
  <div class="select">
    <slot />
    <select id="order" name="order">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
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
