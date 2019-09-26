import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import ItemMansory from './ItemMansory'

describe('Component ItemMansory', () => {
  const color = '#000'
  const item = {
    id: 'DTXugNB5Jt6Ra',
    title: 'just tell me what you want and ill be that for you ryan gosling GIF',
    images: {
      fixed_height_downsampled: {
        webp: 'https://media1.giphy.com/media/pjnfNhaFmkhxu/200_d.webp?cid=193ba05e5d259554634770392ebcb350&rid=200_d.webp',
      },
      '480w_still': {
        url: 'https://media3.giphy.com/media/pjnfNhaFmkhxu/480w_s.jpg?cid=193ba05e5d259554634770392ebcb350&rid=480w_s.jpg',
      },
    },
  }
  const data = {
    color: '#000',
    height: '186px',
  }
  it('Can render ItemMansory smoothly', () => {
    const component = shallow(
      <ItemMansory
        key={item.slug}
        placeholder={data}
        item={item}
        color={color}
      />,
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
    expect(component.find('div')).toBeDefined()
  })
})
