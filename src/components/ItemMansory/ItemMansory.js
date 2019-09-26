import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Styles,
  Helpers,
} from 'utils'

class ItemMansory extends Component {
  state = {
    hover: false,
  }

  renderSourceImage = (hover, item) => {
    if (hover) {
      return item.images.fixed_height_downsampled.webp
    }
    return item.images['480w_still'].url
  }

  handleHover = value => () => {
    this.setState({
      hover: value,
    })
  }

  render() {
    const {
      placeholder,
      item,
      color,
    } = this.props

    const {
      hover,
    } = this.state

    return (
      <div
        className={Styles.mansoryItem}
        onMouseEnter={this.handleHover(true)}
        onMouseLeave={this.handleHover(false)}
      >
        <div className={Styles.positionRelative}>
          <span className={Styles.triangle(color)} />
          <span className={Styles.play(color)} />
          <div className={Helpers.mergeCss(Styles.mansoryItemChild, Styles.alignItemsEnd)}>
            <h5>
              {item.title}
            </h5>
          </div>
          <img
            alt=""
            className={Helpers.mergeCss(
              Styles.imgFluid,
              Styles.imgCover,
              Styles.backgroundColor(placeholder),
            )}
            src={this.renderSourceImage(hover, item)}
          />
        </div>
      </div>
    )
  }
}

ItemMansory.propTypes = {
  item: PropTypes.object,
  placeholder: PropTypes.object,
  color: PropTypes.string,
}

ItemMansory.defaultProps = {
  item: {},
  placeholder: {},
  color: '',
}

export default ItemMansory
