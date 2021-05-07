<template>
  <div class="voice-wrapper">
    <ButtonFav class="fav-button" :is-faved="voice.isFav" @click="toggleFav" />
    <button class="voice" @click="selectVoice">
      <img
        :id="`${voice.id}-icon`"
        :src="require(`~/assets/img/voice-icons/${voice.icon}`)"
        alt=""
        role="presentation"
        aria-hidden="true"
        class="voice__icon"
        :class="voice.id === selectedVoice && 'voice__icon--selected'"
      />
      <span class="voice__name">{{ voice.name }}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    voice: {
      type: Object,
      required: true,
    },
  },
  computed: {
    selectedVoice() {
      return this.$store.state.selectedVoice
    },
  },
  methods: {
    toggleFav() {
      this.$store.commit('toggleFav', this.voice.id)
    },
    selectVoice() {
      const selectedVoice =
        this.selectedVoice === this.voice.id ? null : this.voice.id
      this.$store.commit('selectVoice', selectedVoice)
    },
  },
}
</script>

<style lang="scss" scoped>
.voice-wrapper {
  --t-hover: 0.3s;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    .voice__icon {
      background-color: var(--bg-voice--hover);
    }
    .voice__icon--selected {
      background-color: var(--bg-voice--selected);
    }
    .voice__name {
      color: var(--bg-voice--hover);
    }
    .fav-button {
      opacity: 1;
    }
  }
}

.fav-button {
  position: absolute;
  top: -8px;
  right: 8px;
  z-index: 2;
  padding: 8px 10px;
  opacity: 0;
  transition: opacity var(--t-hover) ease-in;
  &:focus {
    opacity: 1;
  }
}

.voice {
  @include buttonStyle();

  z-index: 1;

  &__icon {
    margin-bottom: 16px;
    background-color: var(--bg-voice);
    border-radius: 50%;
    transition: background-color var(--t-hover) linear;
    &--selected {
      background-color: var(--bg-voice--selected);
    }
  }

  &__name {
    color: var(--fc-default);
    font-weight: var(--fw-bold);
    font-size: smaller;
    text-align: center;
    transition: color var(--t-hover) linear;
  }
}
</style>
