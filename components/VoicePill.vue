<template>
  <div class="voice">
    <img
      :src="require(`~/assets/img/icons/${icon}`)"
      alt=""
      role="presentation"
      aria-hidden="true"
      class="voice__icon"
    />
    <p class="voice__name">{{ name }}</p>
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

<style lang="scss" scoped>
.voice {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: var(--fw-bold);
  font-size: smaller;

  &__icon {
    background-color: var(--bg-icon);
    border-radius: 50%;
    margin-bottom: 16px;
  }
}
</style>
