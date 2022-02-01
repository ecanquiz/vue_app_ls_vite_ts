import { shallowMount } from '@vue/test-utils'
import ItemComponent from '@/components/items/children/Item.component.vue'
import { ItemInterface } from '@/models/items/Item.interface'

describe('Item.component.vue', () => {
  it('renders an Item correctly', () => {
    const model: ItemInterface = {
      id: 1,
      name: 'Unit test item 1',
      selected: false
    }

    const wrapper = shallowMount(ItemComponent, {
      props: {
        model: model
      }
    })

    expect(wrapper.text()).toContain('Unit test item 1')

    const domEl = wrapper.find('div.name')
    expect(domEl.text()).toEqual('Unit test item 1')

  })

  it('has expected css class when selected is false', () => {
    const model: ItemInterface = {
      id: 2,
      name: 'Unit test item 2',
      selected: false
    }

    const wrapper = shallowMount(ItemComponent, {
      props: {
        model: model
      }
    })

    const classes = wrapper.classes()
      console.log(classes)
      expect(classes).to.be.an('array')
        .that.includes('item')
      expect(classes).to.be.an('array')
        .that.does.not.includes('selected')
  })


  it('has selected css class when selected is true', () => {
    const model: ItemInterface = {
      id: 3,
      name: 'Unit test item 3',
      selected: true 
    }

    const wrapper = shallowMount(ItemComponent, {
      props: {
        model: model
      }
    })

    const classes = wrapper.classes()
    expect(classes).to.be.an('array')
      .that.includes('item')
        expect(classes).to.be.an('array')
      .that.includes('selected')
    })

})

