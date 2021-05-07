<template>
  <InputBaseSelect :options="options">
    <OrderIcon />
  </InputBaseSelect>
</template>

<script>
import OrderIcon from '~/assets/svg/order.svg?inline'
export default {
  components: {
    OrderIcon,
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
