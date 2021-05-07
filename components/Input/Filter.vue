<template>
  <InputBaseSelect :options="options">
    <EyeIcon />
  </InputBaseSelect>
</template>

<script>
import EyeIcon from '~/assets/svg/filter.svg?inline'

export default {
  components: {
    EyeIcon,
  },
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
