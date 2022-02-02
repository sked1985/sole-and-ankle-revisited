/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
      <CloseButton onClick={onDismiss}>
        <Icon id="close" />
      </CloseButton>
      <Filler />
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
      <Footer>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </Footer>
      </Content>
    </Overlay>
  );
};

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 5px;
`

const NavLink = styled.div`
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
`

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
`

const Content = styled(DialogContent)`
  position: fixed;
  background: white;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 32px;
`

const Filler = styled.div`
  flex: 1;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export default MobileMenu;
