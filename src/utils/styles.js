import { css } from 'emotion'

const formControl = css`
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #f3f3f3;
  background-clip: padding-box;
  border: 1px solid transparent;
  border-radius: 30px;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:focus{
    outline: 0;
    border: 1px solid transparent !important;
    box-shadow: 0 0px 0px 0 rgba(0,0,0,0.5);
  }
`

const formControlTextarea = css`
  height: 150px;
`

const card = css`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
`

const cardBody = css`
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
`

const navbar = css`
  display: block;
  height: 55px;
  background: #fff;
  box-shadow: 0 10px 10px -10px rgba(33,43,55,0.1);
`

const navbarFooter = css`
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #fff;
  margin-top: 10px;
`

const navbarMenu = css`
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -ms-flex-pack: start;
  justify-content: flex-start;
  display: flex;
  ul{
    &:first-of-type {
      li{
        &:first-of-type{
          margin-left: 0px !important;
        }
      }
    }

    li{
      margin-left: 15px;
      margin-right:15px;
      a{
        text-decoration: none !important;
        color: #000;
      }
    }

    &:last-child{
      li{
        display: flex;
        align-items: center;
        &:last-child{
          margin-right: 0px;
          a{
            display: inline-block;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            border: 1px solid transparent;
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: .25rem;
            transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            background: #000 !important;
            border: 1px solid #000 !important;
            color: #fff !important;
            border-radius: 30px;
          }
        }
      }
    }
  }
`

const container = css`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px){
    max-width: 540px;
  }

  @media (min-width: 768px){
    max-width: 720px;
  }

  @media (min-width: 992px){
    max-width: 960px;
  }

  @media (min-width: 1200px){
    max-width: 1200px;
  }
`
const row = css`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

const col = css`
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`

const flexRow = css`
  -ms-flex-direction: row!important;
  flex-direction: row!important;
`

const border0 = css`
  border: 0px !important;
`

const ulUnstyled = css`
  padding-left: 0;
  list-style: none;
  margin: 0px;
  display: inline-block;
`

const ulInline = css`
  padding-left: 0;
  list-style: none;
  margin: 0px;
  display: inline-block;

  li{
    display: inline-block;
    margin-right: .5rem;

    &:last-child{
      margin-right: 0px;
    }
  }
`

const modal = css`
  top: 0;
  left: 0;
  z-index: 1050;
  display: block;
  width: 100%;
  height: 100%;
  position: fixed !important;
  align-item: center !important;
  justify-content: center !important;
  outline: 0;
  z-index: 1072;
  overflow: unset !impotant;
  transition: opacity .15s linear;
  position: relative;
  display: flex;
  align-items: center;
`

const modalDialog = css`
  position: relative;
  width: auto;
  margin: .5rem;
  pointer-events: none;
  @media (min-width: 576px){
    width: 600px;
    height: auto !important;
    margin: 1.75rem auto;
  }
`

const modalContent = css`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: .3rem;
  outline: 0;
  box-shadow: 0 10px 10px -10px rgba(33,43,55,0.1);
`

const modalHeader = css`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: .3rem;
  border-top-right-radius: .3rem;
`

const modalBody = css`
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
`

const modalFooter = css`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: .3rem;
  border-bottom-left-radius: .3rem;
`

const modalBackdrop = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`

const mlAuto = css`
  margin-left: auto!important;
`

const mrAuto = css`
  margin-right: auto!important;
`

const dBlock = css`
  display: block!important;
`

const dInlineBlock = css`
  display: inline-block!important;
`

const dFlex = css`
  display: -ms-flexbox!important;
  display: flex!important;
`

const alignItemsStart = css`
  -ms-flex-align: start!important;
  align-items: flex-start!important;
`

const alignItemsCenter = css`
  -ms-flex-align: center!important;
  align-items: center!important;
`

const alignItemsEnd = css`
  -ms-flex-align: end!important;
  align-items: flex-end!important;
`

const justifyContentStart = css`
-ms-flex-pack: start!important;
justify-content: flex-start!important;
`

const justifyContentCenter = css`
  -ms-flex-pack: center!important;
  justify-content: center!important;
`

const justifyContentEnd = css`
  -ms-flex-pack: end!important;
  justify-content: flex-end!important;
`

const w1 = css`
  -ms-flex: 0 0 8.333333%;
  flex: 0 0 8.333333%;
  max-width: 8.333333%;
`

const w2 = css`
  -ms-flex: 0 0 16.666667%;
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
`

const w3 = css`
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
`

const w4 = css`
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
`

const w5 = css`
  -ms-flex: 0 0 41.666667%;
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
`

const w6 = css`
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
`

const w7 = css`
  -ms-flex: 0 0 58.333333%;
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
`

const w8 = css`
  -ms-flex: 0 0 66.666667%;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
`

const w9 = css`
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%;
`

const w10 = css`
  -ms-flex: 0 0 83.333333%;
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
`

const w11 = css`
  -ms-flex: 0 0 91.666667%;
  flex: 0 0 91.666667%;
  max-width: 91.666667%;
`

const w12 = css`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
`

const w100 = css`
  width: 100%;
`

const h100 = css`
  height: 100%;
`

const margin0 = css`
  margin: 0!important;
`

// margin top
const marginTop = css`
  margin-top: .25rem!important;
`

const marginTop2 = css`
  margin-top: .5rem!important;
`

const marginTop3 = css`
  margin-top: 1rem!important;
`

const marginTop4 = css`
  margin-top: 2rem!important;
`

const marginTop5 = css`
  margin-top: 4rem!important;
`

const padding0 = css`
  padding: 0!important;
`

// padding top
const paddingTop = css`
  padding-top: .25rem!important;
`

const paddingTop2 = css`
  padding-top: .5rem!important;
`

const paddingTop3 = css`
  padding-top: 1rem!important;
`

const paddingTop4 = css`
  padding-top: 2rem!important;
`

const paddingTop5 = css`
  padding-top: 4rem!important;
`

// margin bottom
const marginBottom = css`
  margin-bottom: .25rem!important;
`

const marginBottom2 = css`
  margin-bottom: .5rem!important;
`

const marginBottom3 = css`
  margin-bottom: 1rem!important;
`

const marginBottom4 = css`
  margin-bottom: 2rem!important;
`

const marginBottom5 = css`
  margin-bottom: 4rem!important;
`

// padding bottom
const paddingBottom = css`
  padding-bottom: .25rem!important;
`

const paddingBottom2 = css`
  padding-bottom: .5rem!important;
`

const paddingBottom3 = css`
  padding-bottom: 1rem!important;
`

const paddingBottom4 = css`
  padding-bottom: 2rem!important;
`

const paddingBottom5 = css`
  padding-bottom: 4rem!important;
`

// margin right
const marginRight = css`
  margin-right: .25rem!important;
`

const marginRight2 = css`
  margin-right: .5rem!important;
`

const marginRight3 = css`
  margin-right: 1rem!important;
`

const marginRight4 = css`
  margin-right: 2rem!important;
`

const marginRight5 = css`
  margin-right: 4rem!important;
`

// padding right
const paddingRight = css`
  padding-right: .25rem!important;
`

const paddingRight2 = css`
  padding-right: .5rem!important;
`

const paddingRight3 = css`
  padding-right: 1rem!important;
`

const paddingRight4 = css`
  padding-right: 2rem!important;
`

const paddingRight5 = css`
  padding-right: 4rem!important;
`

// margin left
const marginLeft = css`
  margin-left: .25rem!important;
`

const marginLeft2 = css`
  margin-left: .5rem!important;
`

const marginLeft3 = css`
  margin-left: 1rem!important;
`

const marginLeft4 = css`
  margin-left: 2rem!important;
`

const marginLeft5 = css`
  margin-left: 4rem!important;
`

// padding left
const paddingLeft = css`
  padding-left: .25rem!important;
`

const paddingLeft2 = css`
  padding-left: .5rem!important;
`

const paddingLeft3 = css`
  padding-left: 1rem!important;
`

const paddingLeft4 = css`
  padding-left: 2rem!important;
`

const paddingLeft5 = css`
  padding-left: 4rem!important;
`

// padding
const padding = css`
  padding: .25rem!important;
`

const padding2 = css`
  padding: .5rem!important;
`

const padding3 = css`
  padding: 1rem!important;
`

const padding4 = css`
  padding: 2rem!important;
`

const padding5 = css`
  padding: 4rem!important;
`

// text
const textRead = css`
  color: rgba(0,0,0,.38)!important;
`

const textWhite = css`
  color: #fff !important;
`

const textMuted = css`
  color: #6c757d!important;
`

const textDanger = css`
  color: #721c24;
`

const textRight = css`
  text-align: right!important;
`

const textLeft = css`
  text-align: left!important;
`

const textCenter = css`
  text-align: center!important;
`

// media
const media = css`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
`

const mediaBody = css`
  -ms-flex: 1;
  flex: 1;
`

// button
const btnDark = css`
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  background: #000 !important;
  border: 1px solid #000 !important;
  color: #fff !important;
  border-radius: 30px;
  cursor: pointer !important;
`

const btn = css`
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  background: #000 !important;
  border: 1px solid #000 !important;
  color: #fff !important;
  border-radius: 30px;
`

const btnDelete = css`
  padding: 0px !important;
  background: red !important;
  border: 0px solid #000 !important;
  color: #fff !important;
  border-radius: 30px !important;
  width: 25px !important;
  height: 25px !important;
`

const btnEdit = css`
  padding: 0px !important;
  background: green !important;
  border: 0px solid #000 !important;
  color: #fff !important;
  border-radius: 30px !important;
  width: 25px !important;
  height: 25px !important;
`

const btnClose = css`
  padding: 0px !important;
  background: black !important;
  border: 0px solid #000 !important;
  color: #fff !important;
  border-radius: 30px !important;
  width: 23px !important;
  height: 23px !important;
  position: absolute !important;
  top: -10px;
  right: -10px;
  z-index: 1111;
`

// pure functions
function input(type) {
  let inputStyle
  if (type === 'textarea') {
    inputStyle = css`
      min-height: 104px;
      resize: vertical;
    `
  } else {
    inputStyle = css`
      height: 34px;
    `
  }
  return css`
    ${inputStyle}
  `
}

// background color
function backgroundColor(data) {
  return css`
    background-color: ${data.color};
    height:  ${data.height}px;
  `
}

function indicator(color) {
  let stroke
  let reverseColor
  if (color === '#fff') {
    stroke = css`& polyline#back {stroke:rgba(0,0,0, 0.5);}`
    reverseColor = '#000'
  } else {
    stroke = css`& polyline#back {stroke:rgba(255,255,255, 0.5);}`
    reverseColor = '#fff'
  }

  return css`
    margin-top: 100px;
    position: relative;
    transform: translate(-50%, -50%) scale(6);
    svg{
      & polyline {
        fill: none;
        stroke-width: 1;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      ${stroke}
      & polyline#front {
        stroke: ${reverseColor} !important;
        stroke-dasharray: 12, 36;
        stroke-dashoffset: 48;
        animation: dash 1.2s linear infinite;
      }

    }

    @-moz-keyframes dash {
      62.5% {
        opacity: 0;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
    @-webkit-keyframes dash {
      62.5% {
        opacity: 0;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
    @-o-keyframes dash {
      62.5% {
        opacity: 0;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
    @keyframes dash {
      62.5% {
        opacity: 0;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
  `
}

function triangle(color) {
  return css`
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-left: 6px solid ${color};
    border-bottom: 6px solid transparent;
    position: absolute;
    right: 15px;
    top: 15px;
  `
}

function play(color) {
  return css`
    position: relative;
    display: none;
    position: absolute;
    right: 15px;
    top: 15px;
    &::after{
      content: '';
      height: 11px;
      width: 3px;
      display: block;
      background: ${color};
      margin-left: 2px;
    }
    &::before{
      content: '';
      height: 11px;
      width: 3px;
      display: block;
      background: ${color};
      margin-right: 2px;
    }
  `
}

function formControlRadio(color) {
  return css`
    opacity: 0;
    display: none;
    &:checked + label {
      position: relative;
      padding-left: 20px;
      cursor: pointer;
      line-height: 16px;
      display: inline-block;
      color: ${color};
      font-size: 14px;
      font-weight: bold;
      margin-left: 10px;
      &::before{
        border: 1px solid #000;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 16px;
        height: 16px;
        border-radius: 100%;
        background: #fff;
      }
      &::after{
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
        content: '';
        width: 8px;
        height: 8px;
        background: #000;
        position: absolute;
        top: 4px;
        left: 4px;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
      }
    }
    &:not(:checked) + label{
      position: relative;
      padding-left: 20px;
      cursor: pointer;
      line-height: 16px;
      display: inline-block;
      color: ${color};
      font-size: 14px;
      margin-left: 10px;
      &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 16px;
        height: 16px;
        border: 1px solid #ddd;
        border-radius: 100%;
        background: #fff;
      }
      &::after{
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
        content: '';
        width: 8px;
        height: 8px;
        background: #000;
        position: absolute;
        top: 4px;
        left: 4px;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
      }
    }
  `
}

function knobs(value) {
  let yes
  let no
  if(value === 'id'){
    yes = 'Yes'
    no = 'No'
  } else {
    yes = 'Ya'
    no = 'Ga'
  }

  return css`
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    &::before{
      content: '${no}';
      left: 4px;
      position: absolute;
      top: 5px;
      width: 26px;
      height: 26px;
      font-size: 10px;
      font-weight: bold;
      text-align: center;
      line-height: 1;
      padding: 9px 4px;
      border-radius: 50%;
      transition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
      z-index: 2;
      color: #000;
    }
    &::after{
      content: '${yes}';
      right: -24px;
      position: absolute;
      top: 5px;
      width: 26px;
      height: 26px;
      font-size: 10px;
      font-weight: bold;
      text-align: center;
      line-height: 1;
      padding: 9px 4px;
      border-radius: 50%;
      transition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
      color: #fff !important;
      z-index: 2;
    }
    span{
      position: absolute;
      width: 26px;
      height: 26px;
      font-size: 10px;
      font-weight: bold;
      text-align: center;
      line-height: 1;
      padding: 9px 4px;
      border-radius: 50%;
      transition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
      left: 4px;
      background-color: #fff;
      z-index: 1;
      top: 5px;
    }
  `
}

// image
const imgFluid = css`
  max-width: 100%;
  height: auto;
`

// mansory
const mansory = css`
  column-count: 4;
  column-gap: 15px;
  margin: 15px 0;
  padding: 0;
  -moz-column-gap: 15px;
  -webkit-column-gap: 15px;
  column-gap: 15px;
`

const mansoryItem = css`
  display: inline-block;
  width: 100%;
  -webkit-transition: 1s ease all;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin-bottom: 10px;
  &:hover{
    div{
      display: inline-flex;
      width: 100%;
      span:last-of-type{
        display: flex !important;
      }
      span:first-of-type{
        display: none;
      }
    }
  }
`

// custom css
const imgCover = css`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  display: block;
`

const mansoryItemChild = css`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  color: #fff;
`

const positionRelative = css`
  position: relative;
`
const positionAbsolute = css`
  position: absolute;
`

const positionFixed = css`
  position: fixed;
`

const buttonWrapper = css`
  display: inline-block;
  position: relative;
  width: 75px;
  height: 36px;
  overflow: hidden;
  border-radius: 100px;
  position: relative;
  border-radius: 100px;
  input:checked + div:first-of-type{
    &::before{
      left: -24px;
    }
  }
  input:checked + div:first-of-type{
    &::after{
      right: 4px;
    }
  }
  input:checked + div:first-of-type span{
    left: 45px;
    background-color: #000;
  }
  
  input:checked ~ div:last-child{
    background-color: #fff;
  }
`

const wrapper = css`
  height: 100px;
  width: 200px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
`

const checkBoxCustom = css`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
`

const layer = css`
  width: 100%;
  background-color: #000;
  transition: 0.3s ease all;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const dFlexCustom = css`
  width: 100%;
  display: flex;
  div{
    &:last-child{
      width: 50% !important;
    }
    width: 100%;
  }
`

const dFlexCustom2 = css`
  display: flex;
  -ms-flex-align: center!important;
  align-items: center!important;
`

const customBtn = css`
  top:0;
  right:0;
  bottom:0;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
`

const customPosition = css`
  top: 20px;
  right: 20px;
`

export default {
  // base
  formControl,
  formControlTextarea,
  card,
  cardBody,
  navbar,
  navbarMenu,
  navbarFooter,
  container,
  row,
  col,
  flexRow,

  // border
  border0,

  // list
  ulUnstyled,
  ulInline,

  // display
  dBlock,
  dInlineBlock,
  dFlex,

  // position
  alignItemsStart,
  alignItemsCenter,
  alignItemsEnd,

  // position
  justifyContentStart,
  justifyContentCenter,
  justifyContentEnd,

  // width
  w1,
  w2,
  w3,
  w4,
  w5,
  w6,
  w7,
  w8,
  w9,
  w10,
  w11,
  w12,
  w100,
  h100,

  // modal
  modal,
  modalDialog,
  modalContent,
  modalHeader,
  modalBody,
  modalFooter,
  modalBackdrop,

  // margin
  mlAuto,
  mrAuto,
  margin0,
  marginTop,
  marginTop2,
  marginTop3,
  marginTop4,
  marginTop5,
  marginBottom,
  marginBottom2,
  marginBottom3,
  marginBottom4,
  marginBottom5,
  marginRight,
  marginRight2,
  marginRight3,
  marginRight4,
  marginRight5,
  marginLeft,
  marginLeft2,
  marginLeft3,
  marginLeft4,
  marginLeft5,

  // padding
  padding0,
  paddingTop,
  paddingTop2,
  paddingTop3,
  paddingTop4,
  paddingTop5,
  paddingBottom,
  paddingBottom2,
  paddingBottom3,
  paddingBottom4,
  paddingBottom5,
  paddingRight,
  paddingRight2,
  paddingRight3,
  paddingRight4,
  paddingRight5,
  paddingLeft,
  paddingLeft2,
  paddingLeft3,
  paddingLeft4,
  paddingLeft5,
  padding,
  padding2,
  padding3,
  padding4,
  padding5,

  // text
  textRead,
  textWhite,
  textMuted,
  textDanger,
  textRight,
  textLeft,
  textCenter,

  // media
  media,
  mediaBody,

  // button,
  btn,
  btnDark,
  btnDelete,
  btnEdit,
  btnClose,

  // function,
  input,
  backgroundColor,
  play,
  indicator,
  formControlRadio,

  // image
  imgFluid,

  // mansory
  mansory,
  mansoryItem,

  // custom css
  imgCover,
  mansoryItemChild,
  positionRelative,
  positionAbsolute,
  positionFixed,
  buttonWrapper,
  wrapper,
  checkBoxCustom,
  knobs,
  layer,
  triangle,
  dFlexCustom,
  dFlexCustom2,
  customBtn,
  customPosition,
}
