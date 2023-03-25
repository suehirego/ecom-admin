import { css } from 'styled-components'
const sizes = {
      fullhd: 1410, //orange
      widescreen: 1200,   //green
      desktop: 1024, //red
      tablet: 768,  //blue
      mobile: 576,  //yellow
      mobileM: 420, //orange
}
export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})