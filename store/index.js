import voicesJson from '~/content/voices.json'

export const state = () => ({
  voices: voicesJson,
  selectedVoice: null,
})

export const mutations = {
  toggleFav(state, voiceId) {
    state.voices.forEach((voice) => {
      if (voice.id === voiceId) {
        voice.isFav = true
      }
    })
  },
  selectVoice(state, voiceId) {
    state.selectedVoice = voiceId
  },
}
