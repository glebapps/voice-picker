<template>
  <button
    aria-label="Choose a random voice"
    title="Choose a random voice"
    @click="pickRandomVoice"
  >
    <RandomPickerIcon
      class="random-icon"
      aria-hidden="true"
      role="presentation"
    />
  </button>
</template>

<script>
import RandomPickerIcon from '~/assets/svg/button-random.svg?inline'
export default {
  components: {
    RandomPickerIcon,
  },
  methods: {
    pickRandomVoice() {
      this.$store.commit('pickRandomVoice')
      this.scrollToSelected()
    },
    scrollToSelected() {
      const selectedVoiceId = this.$store.state.selectedVoice
      const selectedVoiceEl = document.getElementById(selectedVoiceId)
      selectedVoiceEl.scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  @include buttonStyle();
}

.random-icon {
  cursor: pointer;

  &:hover {
    animation-name: spin;
    animation-duration: 0.5s;
    animation-delay: 0.2s;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
