import React, { useState } from 'react'
import { Button, ExternalLink, MEDIA_WIDTHS } from '../../theme'
import styled from 'styled-components'
import { AutoColumn } from '../Column'
import { RowBetween } from '../Row'
import { Text } from 'rebass'
import Modal from '../Modal'
import { X } from 'react-feather'
import V2Logo from '../OneInchV2Logo'

const ModalContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.bg2};
  border-radius: 20px;
`

const WordmarkStyled = styled.div`
  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 400;
    font-display: block;
    src: url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58a-xDwxUD2GFw.woff) format('woff');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  color: ${({ theme }) => theme.text1};

  .mainWordmark {
    font-family: Quicksand, serif;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 40px;
    font-weight: normal;
  }

  .mainHeader {
    font-family: Quicksand, serif;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 20px;
    font-weight: 400;
  }

  a {
    color: ${({ theme }) => theme.text1};
  }

  @media (max-width: ${(MEDIA_WIDTHS as any)['upToSmall']}px) {
    .mainWordmark {
      margin-top: 0;
      margin-bottom: 0;
      text-align: left;
      font-size: 24px;
    }

    .mainHeader {
      font-family: Quicksand, serif;
      text-align: left;
      margin-bottom: 0;
      font-size: 12px;
      margin-top: 7px;
      margin-bottom: 7px;
      width: 260px;
    }

    @media (max-width: ${(MEDIA_WIDTHS as any)['upToTheSmallest']}px) {
      .mainHeader {
        font-size: 10px;
      }
    }
  }
`

const StyledCloseIcon = styled(X)`
  height: 20px;
  width: 20px;

  :hover {
    cursor: pointer;
  }

  > * {
    stroke: ${({ theme }) => theme.text1};
  }
`

function useForceUpdate() {
  const [value, setValue] = useState(0) // integer state
  console.log(value)
  return () => setValue(value => ++value) // update the state to force render
}

export default function Wordmark() {

  const forceUpdate = useForceUpdate()

  let notificationWasShown = localStorage.getItem('v2notificationWasShown')
  const setNotificationWasShown = () => {
    localStorage.setItem('v2notificationWasShown', 'true')
    forceUpdate()
  }

  return (
    <WordmarkStyled>

      <Modal isOpen={notificationWasShown !== 'true'} onDismiss={() => setNotificationWasShown()} maxHeight={80}>
        <ModalContentWrapper style={{ width: '100%' }}>
          <AutoColumn gap="lg" style={{ width: '100%' }}>
            <RowBetween style={{ padding: '0 2rem' }}>
              <div />
              <StyledCloseIcon onClick={() => setNotificationWasShown()} />
            </RowBetween>
            {/*<Break />*/}
            <div style={{ overflow: 'auto', height: 500 }}>
              <AutoColumn gap="lg" style={{ padding: '0 2rem' }}>
                <V2Logo></V2Logo>
                <h2 style={{ textAlign: `center` }}>
                  1INCH Liquidity Protocol Announcement
                </h2>
                <Text>
                  <p style={{ textAlign: 'center' }}>
                    Version 2 of the 1INCH Liquidity Protocol
                  </p>
                  <p style={{ textAlign: 'center' }}>
                    Is available on <ExternalLink href="https://1inch.exchange/#/dao/pools">
                    1inch.exchange
                  </ExternalLink>
                  </p>
                </Text>
                <Button onClick={() => setNotificationWasShown()}>Got it</Button>
              </AutoColumn>
            </div>
          </AutoColumn>
        </ModalContentWrapper>
      </Modal>

      <h1 className="mainWordmark">Mooniswap</h1>
      <h4 className="mainHeader">Next generation AMM protocol by {' '}
        <a href="https://1inch.exchange/" target="_blank" rel="noopener noreferrer">1inch</a></h4>

    </WordmarkStyled>
  )
}
