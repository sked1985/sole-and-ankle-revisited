import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeBreadCrumbs = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
    </Breadcrumbs>
  );
}

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <MobileBreadCrumbs>
          <ShoeBreadCrumbs></ShoeBreadCrumbs>
        </MobileBreadCrumbs>
        <Header>
          <Title>Running</Title>
          <SortFilterWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SortFilterWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <DesktopBreadCrumbs>
          <ShoeBreadCrumbs></ShoeBreadCrumbs>
        </DesktopBreadCrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

export const SortFilterWrapper = styled.div `
   @media ${QUERIES.tabletAndSmaller} {
   display: none;
  }
`

export const MobileBreadCrumbs = styled.div`
  display: none;
  @media ${QUERIES.tabletAndSmaller} {
   display: block;
  }
`

const DesktopBreadCrumbs = styled.div`
 @media ${QUERIES.tabletAndSmaller} {
   display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${QUERIES.tabletAndSmaller} {
   display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
