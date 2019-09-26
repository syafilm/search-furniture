import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import {
  Styles,
} from 'utils'

const CustomRadio = ({
  label,
  value,
  onChange,
  text,
  color,
  checked,
}) => (
  <Fragment>
    <input
      value={value}
      onChange={onChange}
      type="radio"
      checked={checked}
      className={Styles.formControlRadio(color)}
      id={text}
    />
    <label htmlFor={text} className={Styles.labelRadio}>{label}</label>
  </Fragment>
)

CustomRadio.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  text: PropTypes.string,
  color: PropTypes.string,
}

CustomRadio.defaultProps = {
  label: '',
  value: '',
  text: '',
  onChange: null,
  color: '',
  checked: false,
}

export default CustomRadio
