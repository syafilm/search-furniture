/*eslint-disable */
import React from 'react'

import {
  Styles,
} from 'utils'

const CustomCheckbox = ({
  error,
  label,
  value,
  onChange,
  disabled,
  type,
  placeholder,
  text,
}) => (
  <div className={Styles.formControlCheckbox}>
    <div className={Styles.wrapperCheckBox}>
      <div className={Styles.wrapperChild}>
        <input
          type={type}
          disabled={disabled}
          checked={value}
          className={Styles.styledCheckbox}
          placeholder={placeholder}
          onChange={onChange}
          id={text}
        />
        <label htmlFor={text}>{label}</label>
      </div>
    </div>
  </div>
)

export default CustomCheckbox
