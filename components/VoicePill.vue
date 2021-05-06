<template>
  <div>
    <img
      :src="require(`~/assets/img/icons/${icon}`)"
      alt=""
      role="presentation"
      aria-hidden="true"
    />
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
