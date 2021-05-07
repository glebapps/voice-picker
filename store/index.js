import voicesJson from '~/content/voices.json'

export const state = () => ({
  voices: voicesJson,
  favVoices: [],
  filteredVoices: voicesJson,
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
  filter(state, filter) {
    state.filteredVoices = [...state.voices]
    if (filter !== 'all') {
      state.filteredVoices = state.filteredVoices.filter((voice) =>
        voice.tags.includes(filter)
      )
    }
  },
  sort(state, sort) {
    state.filteredVoices.sort((voiceA, voiceB) => {
      if (sort === 'asc') {
        return voiceA.name.localeCompare(voiceB.name)
      } else {
        return voiceB.name.localeCompare(voiceA.name)
      }
    })
  },
}
