/*eslint-disable */
import React from 'react'

import {
  Styles,
  Helpers,
} from 'utils'

const CustomInput = ({
  value,
  onBlur,
  onKeyUp,
  onFocus,
  type,
  placeholder,
  className,
}) => (
  <div className={Styles.positionRelative}>
    {
      type === 'textarea'
        ? (
          <textarea
            rows="4"
            defaultValue={value}
            className={className ? Helpers.mergeCss(Styles.input(type), Styles.formControl, className) : Helpers.mergeCss(Styles.input(type), Styles.formControl)}
            placeholder={placeholder}
            onBlur={onBlur}
            onKeyUp={onKeyUp}
            onFocus={onFocus}
          />
        )
        : (
          <input
            type={type}
            defaultValue={value}
            className={className ? Helpers.mergeCss(Styles.input(type), Styles.formControl, className) : Helpers.mergeCss(Styles.input(type), Styles.formControl)}
            placeholder={placeholder}
            onBlur={onBlur}
            onKeyUp={onKeyUp}
            onFocus={onFocus}
          />
        )
    }
  </div>
)

export default CustomInput
