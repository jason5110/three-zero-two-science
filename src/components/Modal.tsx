import { PropsWithChildren } from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton";

const ModalWrapper = styled.button`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  overflow: scroll;
  display: flex;
  z-index: 40;
`

const CustomCloseButton = styled(CloseButton)`
  position: absolute;
  top: 0;
  right: 0;
`

const ModalContent = styled.div`
  position: relative;
  padding: 2rem;
  background-color: white;
  border-radius: 1rem;
  width: 80vw;
  height: 80vh;
  margin: auto;
`

interface ModalProps extends PropsWithChildren {
  show?: boolean
  close?: () => void
}

const Modal = ({ show, close }: ModalProps) => {
  if (!show) {
    return null
  }

  return (
    <ModalWrapper>
      <ModalContent>
        <CustomCloseButton onClick={close}/>
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal
