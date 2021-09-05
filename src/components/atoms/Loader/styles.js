import styled, {keyframes} from 'styled-components';

const load = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const LoaderBody = styled.div`
  background-color: transparent;
  z-index: 1300;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  transition: all .3s;
`;

export const Spinner = styled.div`
  border-radius: 50%;
  width: 6em;
  height: 6em;
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0);
  border-right: .625em solid rgba(255, 255, 255, 0);
  border-bottom: .625em solid rgba(255, 255, 255, 0);
  border-left: .625em solid #66718A;
  transform: translateZ(0);
  animation: ${load} 1.1s infinite linear;
`;
