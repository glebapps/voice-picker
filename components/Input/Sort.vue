<template>
  <InputBaseSelect :options="options" />
</template>

<script>
export default {
  data() {
    return {
      options: [
        { text: 'Ascending', value: 'asc' },
        { text: 'Descending', value: 'desc' },
      ],
    }
  },
}
</script>
