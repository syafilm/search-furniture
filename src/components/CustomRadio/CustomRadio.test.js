import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import CustomRadio from './CustomRadio'

describe('Component CustomRadio', () => {
  const mockEvent = jest.fn()
  const trending = 'trending'
  const colorReverse = '#000'
  const label = 'Trending'
  it('Can render CustomRadio with checked', () => {
    const component = shallow(
      <CustomRadio
        text={trending}
        onChange={mockEvent}
        checked={trending === 'trending'}
        value={trending}
        color={colorReverse}
        label={label}
      />,
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
    expect(component.find('div')).toBeDefined()
  })

  it('Can render CustomRadio with unchecked', () => {
    const component = shallow(
      <CustomRadio
        text={trending}
        onChange={mockEvent}
        checked={trending === ''}
        value={trending}
        color={colorReverse}
        label={label}
      />,
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
    expect(component.find('div')).toBeDefined()
  })
})
