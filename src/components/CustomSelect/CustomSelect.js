/*eslint-disable */
import React from 'react'

import {
  Styles,
  Helpers
} from 'utils'

const CustomSelect = ({
  error,
  label,
  value,
  onChange,
  disabled,
  type,
  placeholder,
  text,
  option,
}) => (
  <select placeholder={placeholder} 
    onChange={onChange} 
    className={Helpers.mergeCss(Styles.formControl, Styles.customSelect)}>
    <option defaultValue='0'>{placeholder}</option>
    {
      option.map(item => (
        item.value.includes(value) ? (
            <option key={item.id} value={item.value} selected>{item.label}</option>
            ) : (
            <option key={item.id} value={item.value}>{item.label}</option>
          )
        )
      )
    }
  </select>
)

export default CustomSelect

