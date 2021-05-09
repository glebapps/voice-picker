import voicesJson from '~/content/voices.json'

export const state = () => ({
  voices: voicesJson,
  favVoices: [],
  filteredVoices: voicesJson,
  currentFilter: 'all',
  selectedVoice: null,
})

export const mutations = {
  resetData(state) {
    state.filteredVoices = [...state.voices]
  },
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
    state.currentFilter = filter
    state.filteredVoices = [...state.voices]
    if (filter !== 'all') {
      state.filteredVoices = state.filteredVoices.filter((voice) =>
        voice.tags.includes(filter)
      )
    }
  },
  search(state, query) {
    state.currentFilter = 'all'
    const allVoices = [...state.voices]
    state.filteredVoices = allVoices.filter((voice) =>
      voice.name.toLowerCase().includes(query.toLowerCase())
    )
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
  pickRandomVoice(state) {
    const numVoices = state.filteredVoices.length
    const randomIndex = Math.floor(Math.random() * numVoices)
    const selectedVoice = state.filteredVoices.find(
      (voice, index) => index === randomIndex
    )
    state.selectedVoice = selectedVoice.id
  },
}
