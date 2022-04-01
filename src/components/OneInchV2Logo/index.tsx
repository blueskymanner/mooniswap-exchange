import React from 'react'
import {MEDIA_WIDTHS} from "../../theme";
import {useDarkModeManager} from "../../state/user/hooks";
import styled from 'styled-components'
import V2LogoImg from '../../assets/svg/logo_v2.svg'
import V2LogoImgWhite from '../../assets/svg/logo_v2_white.svg'

const V2Icon = styled.div<{ mobile?: boolean }>`
  width: 150px;
  margin: 0 auto;
  
   ${({ mobile }) => mobile === true ? 'display: none;' : ''} 
  
  @media (max-width: ${(MEDIA_WIDTHS as any)['upToSmall']}px) {
    ${({ mobile }) => mobile === true
  ? `
        width: 55px;
        display: block;
        position: absolute;
        top: -2px;
        left: 0;
        height: auto;
        margin: 0;
        z-index: -1;
      `
  : 'display: none;'} 
  }
`

export default function V2Logo({mobile, ...rest}: {mobile?: boolean }) {
  const [isDark] = useDarkModeManager();

  return (
    <V2Icon mobile={mobile}>
      <img src={isDark ? V2LogoImgWhite : V2LogoImg} alt="logo" />
    </V2Icon>
  )
}
