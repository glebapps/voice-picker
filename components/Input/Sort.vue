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
      options: [
        { label: 'Ascendent', value: 'asc' },
        { label: 'Descendent', value: 'desc' },
      ],
    }
  },
}
</script>
