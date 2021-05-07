import voicesJson from '~/content/voices.json'

export const state = () => ({
  voices: voicesJson,
  favVoices: [],
  selectedVoice: null,
})

export const mutations = {
  toggleFav(state, voice) {
    const voiceIndex = state.favVoices.findIndex(
      (_voice) => _voice.id === voice.id
    )
    if (voiceIndex === -1) {
      state.favVoices.push(voice)
    } else {
      state.favVoices.splice(voiceIndex, 1)
    }
  },
  selectVoice(state, voiceId) {
    state.selectedVoice = voiceId
  },
}
