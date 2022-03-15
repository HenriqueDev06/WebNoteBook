import styled from 'styled-components';

import Digital from '.digital-7.ttf';

export const Container = styled.section`
  background: ${(props) => props.theme.background};

  justify-content: space-between !important;
  padding: 0px 20px;

  @font-face {
    font-family: 'Digital';
    src: local('Digital'), local('Digital'),
    url(${Digital}) format('ttf');
    font-weight: 300;
    font-style: normal;
}

  p{
    font-family: Digital
  }
`;
