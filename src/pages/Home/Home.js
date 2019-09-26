import React, { Component, Fragment } from 'react'
import {
  CustomInput,
  ItemMansory,
  Loading,
  CustomRadio,
} from 'components'

import {
  Styles,
  Helpers,
  I18n,
  Routes,
} from 'utils'

import {
  ApiGiphy,
} from 'api'

import giphyLogo from 'images/giphy-logo.png'

class Home extends Component {
  state = {
    valueSearch: '',
    resultSearch: [],
    loading: false,
    darkMode: false,
    filterSet: '',
    filterSetdoesntwork: false,
    lang: '',
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
    const value = localStorage.getItem('locale')
    this.setState({
      lang: value
    })
  }

  handleScroll = async () => {
    const {
      valueSearch,
      resultSearch,
      filterSet,
    } = this.state

    const value = resultSearch.length

    if (valueSearch || filterSet) {
      if (window.innerHeight + document.documentElement.scrollTop
          === document.documentElement.offsetHeight) {
        if (filterSet === 'trending' || filterSet === 'random') {
          this.handleScrollFilter(resultSearch, value)
        } else {
          await ApiGiphy.searchGiphy(valueSearch, value).then((response) => {
            const set = new Set()
            const newArray = response.data.data.map(item => Object.assign(item, {
              background_color: this.getRandomColor(),
            }))
            const data = resultSearch.concat(newArray)
            const filteredArr = data.filter((item) => {
              const duplicateId = set.has(item.id)
              set.add(item.id)
              return !duplicateId
            })
            this.setState({
              resultSearch: filteredArr,
            })
          })
        }
      }
    }
  }

  handleScrollFilter = async (resultSearch, value) => {
    const {
      filterSet,
    } = this.state
    if (filterSet === 'trending') {
      await ApiGiphy.trendingGiphy(value).then((response) => {
        const set = new Set()
        const newArray = response.data.data.map(item => Object.assign(item, {
          background_color: this.getRandomColor(),
        }))
        const data = resultSearch.concat(newArray)
        const filteredArr = data.filter((item) => {
          const duplicateId = set.has(item.id)
          set.add(item.id)
          return !duplicateId
        })
        this.setState({
          resultSearch: filteredArr,
        })
      })
    } else {
      this.setState({
        resultSearch: [],
        filterSetdoesntwork: true,
      })
    }
  }

  handleSearch = (event) => {
    const {
      value,
    } = event.target
    this.setState({
      valueSearch: value,
    }, () => {
      this.searchGiphy(value)
    })
  }

  searchGiphy = async (data) => {
    const {
      valueSearch,
    } = this.state

    const value = data.type === 'click' ? valueSearch : data
    if (valueSearch) {
      this.setState({ loading: true })
      await ApiGiphy.searchGiphy(value, 1).then((response) => {
        const newArray = response.data.data.map(item => Object.assign(item, {
          background_color: this.getRandomColor(),
        }))
        this.setState({
          resultSearch: newArray,
          loading: false,
          filterSet: '',
          filterSetdoesntwork: false,
        })
      })
    }
  }

  getRandomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  renderResultSearch = (result) => {
    let dataResult

    const {
      darkMode,
      valueSearch,
      filterSetdoesntwork,
    } = this.state


    const color = darkMode ? '#000' : '#fff'
    if (result.length > 0) {
      dataResult = (
        <div className={Styles.mansory}>
          {result.map((item) => {
            const data = {
              color: item.background_color,
              height: item.images.preview.height,
            }

            return (
              <ItemMansory
                key={item.id}
                placeholder={data}
                item={item}
                color={color}
              />
            )
          })}
        </div>
      )
    }

    if (valueSearch && result.length === 0 && !filterSetdoesntwork) {
      dataResult = (
        <div className={Helpers.mergeCss(
          Styles.dBlock,
          Styles.w12,
          Styles.marginTop5,
          Styles.paddingTop5,
          Styles.textCenter,
        )}
        >
          <div className={darkMode ? Styles.textWhite : undefined}>
            {I18n.t('home.no-result')}
          </div>
        </div>
      )
    }

    return dataResult
  }

  handleClickDarkMode = value => () => {
    if (!value) {
      document.body.style.backgroundColor = '#000'
    } else {
      document.body.style.backgroundColor = '#fff'
    }

    this.setState({
      darkMode: !value,
    })
  }

  handleFilter = value => async () => {
    if (value === 'trending') {
      this.setState({ loading: true })
      await ApiGiphy.trendingGiphy(1).then((response) => {
        const newArray = response.data.data.map(item => Object.assign(item, {
          background_color: this.getRandomColor(),
        }))
        this.setState({
          resultSearch: newArray,
          loading: false,
          filterSetdoesntwork: false,
        })
      })
    } else {
      this.setState({
        resultSearch: [],
        filterSetdoesntwork: true,
      })
    }

    this.setState({
      filterSet: value,
    })
  }

  renderDarkmodeButton = (value) => {
    const cssClass = value ? Styles.textWhite : ''
    const {
      lang
    } = this.state
    return (
      <div className={Styles.wrapper}>
        <div className={Helpers.mergeCss(Styles.marginRight2, Styles.buttonWrapper)}>
          <input
            onClick={this.handleClickDarkMode(value)}
            value={value}
            className={Styles.checkBoxCustom}
            type="checkbox"
          />
          <div className={Styles.knobs(lang)}>
            <span />
          </div>
          <div className={Styles.layer} />
        </div>
        <span className={cssClass}>
          {I18n.t('home.dark-mode')}
        </span>
      </div>
    )
  }

  handleLang = value => () => {
    switch (value) {
      case 'id':
        localStorage.setItem('locale', 'id')
        document.documentElement.lang = 'id'
        break
      default:
        localStorage.setItem('locale', 'en')
        document.documentElement.lang = 'en'
    }
    window.location.reload()
    this.props.history.replace({pathname: Routes.ACTIVE.ROOT})
  }

  renderLangCode = () => {
    return(
      <div className={Helpers.mergeCss(Styles.positionFixed, Styles.customPosition)}>
        <div className={Styles.dFlex}>
          <span onClick={this.handleLang('id')}>Ind</span>
          <span className={Helpers.mergeCss(Styles.marginLeft2, Styles.marginRight2)}>|</span>
          <span onClick={this.handleLang('en')}>Eng</span>
        </div>
      </div>
    )
  }

  render() {
    const {
      valueSearch,
      resultSearch,
      darkMode,
      loading,
      filterSet,
      filterSetdoesntwork,
    } = this.state

    const color = darkMode ? '#000' : '#fff'
    const colorReverse = darkMode ? '#fff' : '#000'

    return (
      <Fragment>
        <div className={Styles.container}>
          <div className={Styles.container}>
            <div className={Helpers.mergeCss(Styles.row, Styles.justifyContentCenter)}>
              <div className={Helpers.mergeCss(Styles.col, Styles.w8, Styles.textCenter)}>
                <img alt="" className={Styles.marginTop4} src={giphyLogo} />
                <div className={Styles.dFlexCustom}>
                  <div className={Styles.positionRelative}>
                    <CustomInput
                      type="text"
                      value={valueSearch}
                      onBlur={this.handleSearch}
                      placeholder={I18n.t('home.search-giphy')}

                    />
                    <button
                      className={Helpers.mergeCss(
                        Styles.btnDark,
                        Styles.positionAbsolute,
                        Styles.customBtn,
                      )}
                      onClick={this.searchGiphy}
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                  <div className={Helpers.mergeCss(Styles.dFlexCustom2,
                    Styles.textLeft,
                    Styles.marginLeft3)}
                  >
                    <span className={darkMode ? Styles.textWhite : undefined}>
                      Filter by
                    </span>
                    <CustomRadio
                      text="trending"
                      onChange={this.handleFilter('trending')}
                      checked={filterSet === 'trending'}
                      value="trending"
                      color={colorReverse}
                      label={I18n.t('home.trending')}
                    />
                    <CustomRadio
                      text="random"
                      onChange={this.handleFilter('random')}
                      checked={filterSet === 'random'}
                      value="random"
                      color={colorReverse}
                      label={I18n.t('home.random')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={Helpers.mergeCss(Styles.row, Styles.marginTop4)}>
              {!loading && this.renderResultSearch(resultSearch)}
            </div>
            {!loading && filterSetdoesntwork && (
              <div className={Helpers.mergeCss(
                Styles.dBlock,
                Styles.w12,
                Styles.marginTop5,
                Styles.paddingTop5,
                Styles.textCenter,
              )}
              >
                <div className={darkMode ? Styles.textWhite : undefined}
                >
                  {I18n.t('home.filter-random')}
                </div>
              </div>
            )}
            {loading && (
              <div className={Helpers.mergeCss(Styles.row, Styles.justifyContentCenter)}>
                <Loading color={color} />
              </div>
            )}
          </div>
        </div>
        {this.renderDarkmodeButton(darkMode)}
        {this.renderLangCode()}
      </Fragment>
    )
  }
}

export default Home
