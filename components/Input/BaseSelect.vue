<template>
  <select id="order" name="order">
    <option v-for="option in options" :key="option.value" :value="value">
      {{ option.text }}
    </option>
  </select>
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
