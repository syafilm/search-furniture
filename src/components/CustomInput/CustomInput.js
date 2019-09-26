import React from 'react'
import PropTypes from 'prop-types'

import {
  Styles,
  Helpers,
} from 'utils'

const CustomInput = ({
  value,
  onBlur,
  onKeyUp,
  type,
  placeholder,
}) => (
  <div>
    {
      type === 'textarea'
        ? (
          <textarea
            rows="4"
            defaultValue={value}
            className={Helpers.mergeCss(Styles.input(type), Styles.formControl)}
            placeholder={placeholder}
            onBlur={onBlur}
            onKeyUp={onKeyUp}
          />
        )
        : (
          <input
            type={type}
            defaultValue={value}
            className={Helpers.mergeCss(Styles.input(type), Styles.formControl)}
            placeholder={placeholder}
            onBlur={onBlur}
            onKeyUp={onKeyUp}
          />
        )
    }
  </div>
)

CustomInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  onBlur: PropTypes.func,
  onKeyUp: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

CustomInput.defaultProps = {
  value: '',
  onBlur: null,
  onKeyUp: null,
  type: 'text',
  placeholder: '',
}

export default CustomInput
