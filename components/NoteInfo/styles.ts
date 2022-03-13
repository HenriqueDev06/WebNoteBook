import styled from 'styled-components';

export const Container = styled.section`
  height: 120px;
  background: ${(props) => props.theme.background};

  justify-content: space-between !important;
  padding: 0px 20px;

  .theme{
    flex-direction: column;
  }

  .teacher_container{
    flex-direction: column;

    .teacher{

      flex-direction: row-reverse;
      justify-content: space-between !important;
  
      img{
        height: 45px;
        width: 45px;
  
        object-fit: cover;
        border-radius: 50%;
      }

      .info{
        flex-direction: column;

        span{
          width: 100%;
          font-size: 0.8rem;
          text-align: end;
        }
  
        .name{
          font-weight: 700;
        }
      }
    }
  }
`;
