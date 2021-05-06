<template>
  <button class="voice">
    <img
      :src="require(`~/assets/img/icons/${icon}`)"
      alt=""
      role="presentation"
      aria-hidden="true"
      class="voice__icon"
    />
    <span class="voice__name">{{ name }}</span>
  </button>
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
  background: none;
  border: none;

  &__icon {
    background-color: var(--bg-icon);
    border-radius: 50%;
    margin-bottom: 16px;
  }

  &__name {
    text-align: center;
    color: var(--fc-default);
    font-weight: var(--fw-bold);
    font-size: smaller;
  }
}
</style>
