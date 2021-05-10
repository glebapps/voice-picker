import voicesJson from '~/content/voices.json'

const defaultFilter = { label: 'All', value: 'all' }
const defaultOrder = { label: 'Ascendent', value: 'asc' }

export const state = () => ({
  voices: voicesJson,
  favVoices: [],
  filteredVoices: voicesJson,
  currentFilter: defaultFilter,
  currentOrder: defaultOrder,
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
    if (filter.value !== 'all') {
      state.filteredVoices = state.filteredVoices.filter((voice) =>
        voice.tags.includes(filter.value)
      )
    }
  },
  search(state, query) {
    state.currentFilter = defaultFilter
    state.currentOrder = defaultOrder
    const allVoices = [...state.voices]
    state.filteredVoices = allVoices.filter((voice) =>
      voice.name.toLowerCase().includes(query.toLowerCase())
    )
  },
  sort(state, sort) {
    state.currentOrder = sort
    state.filteredVoices.sort((voiceA, voiceB) => {
      if (sort.value === 'asc') {
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
      (_, index) => index === randomIndex
    )
    state.selectedVoice = selectedVoice.id
  },
}
