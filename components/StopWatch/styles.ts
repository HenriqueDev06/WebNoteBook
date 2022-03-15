import styled from 'styled-components';

export const Container = styled.section`
  background: ${(props) => props.theme.background};

  justify-content: space-between !important;
  padding: 0px 20px;

  p{
    font-family: StopwatchW00-Regular
  }
`;
