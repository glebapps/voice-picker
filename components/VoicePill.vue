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
  cursor: pointer;

  &__icon {
    margin-bottom: 16px;
    background-color: var(--bg-icon);
    border-radius: 50%;
  }

  &__name {
    color: var(--fc-default);
    font-weight: var(--fw-bold);
    font-size: smaller;
    text-align: center;
  }
}
</style>
