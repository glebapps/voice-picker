<template>
  <InputBaseSelect id="sort" :options="options" label="Sort voices">
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
      options: ['asc', 'desc'],
    }
  },
}
</script>
