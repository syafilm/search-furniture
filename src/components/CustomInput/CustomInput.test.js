import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import CustomInput from './CustomInput'

describe('Component CustomInput', () => {
  const mockEvent = jest.fn()
  const valueSearch = 'Ryan ryenold'
  const placeholder = 'Search Giphy here'
  it('Can render CustomInput with type component textarea', () => {
    const component = shallow(
      <CustomInput
        type="textarea"
        value={valueSearch}
        onKeyUp={mockEvent}
        onBlur={mockEvent}
        placeholder={placeholder}
      />,
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
    expect(component.find('div')).toBeDefined()
  })

  it('Can render CustomInput even without placeholder', () => {
    const component = shallow(
      <CustomInput
        type="text"
        value={valueSearch}
        onKeyUp={mockEvent}
        onBlur={mockEvent}
      />,
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
    expect(component.find('div')).toBeDefined()
  })

  it('Can render CustomInput default with type component text', () => {
    const component = shallow(
      <CustomInput
        value={valueSearch}
        onKeyUp={mockEvent}
        onBlur={mockEvent}
      />,
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
    expect(component.find('div')).toBeDefined()
  })
})
