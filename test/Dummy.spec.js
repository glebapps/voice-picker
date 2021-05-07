import { mount } from '@vue/test-utils'
import Toolbar from '@/components/Toolbar.vue'

describe('Dummy', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Toolbar)
    expect(wrapper.vm).toBeTruthy()
  })
})
