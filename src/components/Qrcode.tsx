import styled from "styled-components";
import { QRCodeSVG } from 'qrcode.react';

import GridThirteenItemCard from "@/components/GridThirteenItemCard";
import BackToClassListButton from "@/components/BackToClassListButton";
import CopyTextButton from "@/components/CopyTextButton";

const CopyTextContainer = styled.div`
  display: flex;
  padding-top: 1rem;
  margin-left: -0.5rem;

  & > * {
    margin-left: 0.5rem;
`

const QRcodeContainer = styled.div`
  flex: 1;
  display: flex;
  margin-top: 0.5rem;

  & > svg {
    margin: auto;
    display: block; /* svg is "inline" by default */
    height: 100%; /* reset height */
    width: auto; /* reset width */
  }
`

const Footer = styled.div`
  text-align: center;
  color: black;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`
const Qrcode = () => {
  const linkText = 'https://www.classswift.viewsonic.io/'

  return (
    <GridThirteenItemCard
      header={<BackToClassListButton />}
      num={6}
      title="Join 302 Science"
    >
      <CopyTextContainer>
        <CopyTextButton
          label="ID: X58E9647"
          text="X58E9647"
        />
        <CopyTextButton
          label="Link"
          text={linkText}
        />
      </CopyTextContainer>
      <QRcodeContainer>
        <QRCodeSVG
          value={linkText}
        />
      </QRcodeContainer>
      <Footer>Version 1.1.17</Footer>
    </GridThirteenItemCard>
  )
}

export default Qrcode
