import voicesJson from '~/content/voices.json'

export const state = () => ({
  voices: voicesJson,
  favVoices: [],
  selectedVoice: null,
})

export const mutations = {
  toggleFav(state, voice) {
    if (!state.favVoices.includes(voice)) {
      state.favVoices.push(voice)
    }
  },
  selectVoice(state, voiceId) {
    state.selectedVoice = voiceId
  },
}
