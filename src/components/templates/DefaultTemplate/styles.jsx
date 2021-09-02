import styled from 'styled-components';
import { breakpoints } from 'globalVariable.js';

export const ContentContainer = styled.div`
  display: flex;
`;

export const DrawerContainer = styled.div`
  @media ${breakpoints.md} {
    position: relative;
    width: 256px;
    height: 100vh;
    flex-shrink: 0;
  }
`;

export const DrawerContainerInner = styled.div`
  @media ${breakpoints.md} {
    position: fixed;
    top: 0;
    left:0;
    height: 100%;
    z-index: 1200;
  }
`;

export const MainContent = styled.div`
  margin-top: 196px;
  @media ${breakpoints.md} {
    margin-top: 172px;
  }
`;
