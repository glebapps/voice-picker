<template>
  <button class="voice">
    <ButtonFav class="voice__fav" />
    <img
      :src="require(`~/assets/img/voice-icons/${icon}`)"
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
  --t-hover: 0.3s;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;

  &__icon {
    margin-bottom: 16px;
    background-color: var(--bg-voice);
    border-radius: 50%;
    transition: background-color var(--t-hover) linear;
  }

  &__name {
    color: var(--fc-default);
    font-weight: var(--fw-bold);
    font-size: smaller;
    text-align: center;
    transition: color var(--t-hover) linear;
  }

  &__fav {
    position: absolute;
    top: 0;
    right: 16px;
    padding: 8px 10px;
    background-color: var(--bg-voice--hover);
    border-radius: 50%;
    opacity: 0;
    transition: opacity var(--t-hover) ease-in;
    &:focus {
      opacity: 1;
    }
  }

  &:hover,
  &:focus {
    .voice__icon {
      background-color: var(--bg-voice--hover);
    }
    .voice__name {
      color: var(--bg-voice--hover);
    }
    .voice__fav {
      opacity: 1;
    }
  }
}
</style>
