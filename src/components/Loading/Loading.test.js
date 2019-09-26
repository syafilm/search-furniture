import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Loading from './Loading'

describe('Component Loading', () => {
  const light = '#fff'
  const dark = '#000'
  it('Can render Loading smoothly with dark mode', () => {
    const component = shallow(
      <Loading color={light} />,
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
    expect(component.find('div')).toBeDefined()
  })

  it('Can render Loading smoothly with light mode', () => {
    const component = shallow(
      <Loading color={dark} />,
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
    expect(component.find('div')).toBeDefined()
  })
})
