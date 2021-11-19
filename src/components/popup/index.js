import React from 'react';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom'


const Popup = (props) => {
  const { t } = useTranslation();
  const history = useHistory()


  return (
    <StyledContainer>
      <StyledPopup>
        <StyledH3>{t('TitlePopup')}</StyledH3>
        <StyledText>{t('SentencePopup')}</StyledText>
        <StyledWrapperButton>
          <StyledButtonOut onClick={props.onClick}>
            {t('ButonPopupOut')}
          </StyledButtonOut>
          <StyledButtonIn onClick={() => history.push('/login')}>
            {t('ButonPopupIn')}
          </StyledButtonIn>
        </StyledWrapperButton>
      </StyledPopup>
    </StyledContainer>
  )

}

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  position : absolute;

  z-index: 100
`;

const StyledPopup = styled.div`
  position: absolute;
  width: 338px;
  height: 269px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #636CC2;
  border-radius: 20px;
  padding: 10px;
`;

const StyledH3 = styled.h3`
  font-weight: bold;
  font-size: 24px;
`

const StyledText = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin: 50px 0px;
`

const StyledWrapperButton = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  justify-content: space-around;
`;

const StyledButtonOut = styled.button`
  width: 133px;
  height: 100%;
  background: #5560cb;
  border-radius: 5px;
  color: white;
  border: none;
`

const StyledButtonIn = styled.button`
  width: 133px;
  height: 100%;
  background: white;
  border-radius: 5px;
  color: #5560cb;
  border: none; 
`;

export default Popup;