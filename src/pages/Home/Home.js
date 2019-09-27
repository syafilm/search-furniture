/*eslint-disable */
import React, { Component, Fragment } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import {
  CustomInput,
  ItemMansory,
  Loading,
  CustomRadio,
  CustomCheckbox,
  CustomSelect,
} from 'components'

import {
  Styles,
  Helpers,
  I18n,
  Routes,
} from 'utils'

import {
  ApiFurniture,
} from 'api'

class Home extends Component {
  state = {
    searchKeyword: '',
    products: [],
    furnitureStyles: [],
    furnitureStylesSelected: [],
    furnitureStylesOpen: false,
    deliveryOptionOpen: false,
    deliveryOption: [],
    deliveryOptionSelected: [],
    loading: false,
    resultData: [],
  }

  componentDidMount(){
    this.setState({
      loading: true,
    })

    ApiFurniture.indexFurniture().then(({data}) => {
      const products = data.products
      const furnitureStyles = data.furniture_styles
      const deliveryOption = products.map(item => {return `${item.delivery_time} Days` })
      const set = new Set()      
      const filteredArr = deliveryOption.filter((item) => {
        const duplicateId = set.has(item)
        set.add(item)
        return !duplicateId
      })
      this.setState({
        products,
        furnitureStyles,
        deliveryOption:filteredArr,
        resultData: products,
        loading: false,
      })
    })
  }

  handleSearch = (state, type) => {
    let allEmpty = (state['furnitureStylesSelected'].length === 0) && 
    (state['deliveryOptionSelected'].length === 0) && 
    (state['searchKeyword'].length === 0)
    if(state[type].length > 0) {
      const resultData = state.products.filter(
        item => {
          let data
          switch(type) {
            case 'deliveryOptionSelected':
              data = state[type].includes(`${item.delivery_time} Days`)
              break
            case 'furnitureStylesSelected':
              data = item.furniture_style.filter(item => state[type].includes(item)).length
              break
            default:
              data = item.name.toLowerCase().includes(state[type]) || 
                     item.description.toLowerCase().includes(state[type])
          }
          return data
        }
      )
      this.setState({
        resultData
      })
    } else if (state['searchKeyword'].length === 0 && 
               state['deliveryOptionSelected'].length === 0 && 
               state['searchKeyword'].length > 0){
      const resultData = state.products.filter(
        item => item.name.toLowerCase().includes(state[type]) || 
                     item.description.toLowerCase().includes(state[type])
      )
      this.setState({
        resultData
      })
    }else if (allEmpty) {
      const resultData = state.products
      this.setState({
        resultData,
      })
    }

    
  }

  handleStateInput = (type) => (e) => {
    let value

    if(type === 'searchKeyword'){
      value = e.target.value.toLowerCase()
    } else {
      value = e.target.value
    }

    this.setState({
      [type]: value
    }, () => {
      this.handleSearch(this.state, type)
    })
  }

  handleStateInputCheckBox = (type, item) => () => {
    let selected
    const isExist = this.state[type].filter(data => data === item).length > 0
    if (isExist) {
      selected = this.state[type].filter(data => data !== item)
    } else {
      selected = this.state[type].concat(item)
    }
    this.setState({
      [type]: selected
    }, () => {
      this.handleSearch(this.state, type)
    })
  }
  
  handleFocus = (type, value) => (event) => {
    this.setState({
      [type]: value
    })
  }

  renderFilterCheckBox = (state, option, type, typeSelected, placeholder) => {
    const {
      handleStateInput,
      handleStateInputCheckBox,
      handleFocus,
    } = this

    return(
      <OutsideClickHandler
        onOutsideClick={handleFocus(type, false)}>
        <div className={Styles.positionRelative}>
          <div className={Styles.positionRelative}>
            <CustomInput
              type='text'
              placeholder={placeholder}
              className={Helpers.mergeCss(Styles.backgroundColor('#fff'), Styles.borderWhite)}
              onFocus={handleFocus(type, true)}                      
            />
            {
              state[typeSelected].length > 0 && (
                <div onClick={handleFocus(type, true)}  className={Styles.optionSelectedWrapper}>
                  {state[typeSelected].map((item,key) => (
                    <span className={Styles.optionSelected} key={key}>{item}</span>
                  ))
                  }
                </div>
              )
            }
          </div>
          {
            state[type] &&
              ( 
                <div className={Styles.optionListWrapper}>
                  <ul className={Helpers.mergeCss(Styles.ulUnstyled, Styles.optionList)}>
                    {state[option].map((item, key) =>                   
                      <li className={Helpers.mergeCss(Styles.dFlex, Styles.optionItem)} key={key}>
                        <CustomCheckbox
                          type='checkbox'
                          text={item}
                          value={state[typeSelected].includes(item)}
                          label={item}
                          onChange={handleStateInputCheckBox(typeSelected, item)}
                          />
                      </li>
                    )}
                  </ul>
                </div>
              )
          }
        </div>
      </OutsideClickHandler>
    )
  }

  render() {
    const {
      handleFocus,
      handleStateInput,
      renderFilterSelect,
      renderFilterCheckBox,
      state: {
        searchKeyword,
        products,
        furnitureStyles,
        furnitureStylesOpen,
        furnitureStylesSelected,
        deliveryOption,
        loading,
        resultData,
        deliveryOptionOpen,
      }
    } = this

    if (loading) {
      return(
        <Loading/>
      )
    }

    return (
      <div className={Styles.container}>
        <div className={Helpers.mergeCss(Styles.row, Styles.justifyContentCenter)}>
          <div className={Helpers.mergeCss(Styles.col, Styles.w8)}>
            <div className={Helpers.mergeCss(Styles.card, Styles.backgroundColor('transparent'), Styles.border0)}>
              <div className={
                Helpers.mergeCss(Styles.row, Styles.headerFilter)}>
                <div className={Styles.w12}>
                  <div className={Styles.row}>
                    <div className={Styles.w6}>
                      <CustomInput
                        type='text'
                        className={Helpers.mergeCss(
                          Styles.backgroundColor('transparent'), 
                          Styles.borderBottomWhite,
                          Styles.color('#fff')
                        )}
                        value={searchKeyword}
                        placeholder='Search Furniture'
                        onBlur={handleStateInput('searchKeyword')}
                        onKeyUp={handleStateInput('searchKeyword')}
                      />
                    </div>
                  </div>
                  <div className={Helpers.mergeCss(Styles.row, Styles.marginTop4)}>
                    <div className={Helpers.mergeCss(Styles.w6, Styles.paddingRight2)}>
                      {
                        renderFilterCheckBox(
                          this.state,
                          'furnitureStyles',
                          'furnitureStylesOpen', 
                          'furnitureStylesSelected',
                          'Furniture Style',
                        )
                      }
                    </div>
                    <div className={Helpers.mergeCss(Styles.w6, Styles.paddingLeft2)}>
                    {
                        renderFilterCheckBox(
                          this.state,
                          'deliveryOption', 
                          'deliveryOptionOpen',
                          'deliveryOptionSelected',
                          'Delivery Time'
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className={Helpers.mergeCss(Styles.row, Styles.marginTop4)}>
                <div className={Helpers.mergeCss(Styles.w12, Styles.paddingLeft3, Styles.paddingRight3)}>
                  <div className={Styles.row}>
                  {resultData.length > 0 && (resultData.map((item, key) => (
                    <div key={key} className={Helpers.mergeCss(Styles.col, Styles.w6)}>
                      <div className={Helpers.mergeCss(Styles.card, Styles.cardList)}>
                        <div className={Styles.cardBody}>
                          <div className={Styles.row}>
                            <div className={Helpers.mergeCss(Styles.col, Styles.w7)}>
                              <h3 className={Styles.textDark}>
                                {item.name}
                              </h3>
                            </div>
                            <div className={Helpers.mergeCss(Styles.col, Styles.textRight, Styles.w5)}>
                              <span>
                              IDR {item.price}
                              </span>
                            </div>
                          </div>
                          <p className={Helpers.mergeCss(Styles.textRead, Styles.textElepsis3)}>
                            {item.description}
                          </p>
                          <ul className={Styles.listInline}>
                            {item.furniture_style.map((data, key) =>
                              <li key={key}>{data}</li>
                              )}
                          </ul>
                          <div className={Styles.row}>
                            <div className={Helpers.mergeCss(Styles.col, Styles.w12, Styles.textRight)}>
                              <b>{item.delivery_time} Days</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                      )))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
