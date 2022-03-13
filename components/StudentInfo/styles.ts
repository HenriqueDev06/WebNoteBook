import styled from 'styled-components';

export const Container = styled.section`
  height: 75px;
  width: 100%;
  background: #8ed1fc;

  justify-content: space-between !important;
  padding: 0px 20px;

  border-bottom: 3px solid white;

  .student{

    justify-content: space-between !important;

    img{
      height: 45px;
      width: 45px;

      object-fit: cover;
      border-radius: 50%;
    }

    .info{
      flex-direction: column;
      padding: 0px 10px;

      span{
        width: 100%;
        font-size: 0.8rem;
      }

      .name{
        font-weight: 700;
      }
    }
  }

  .actions{
    button{
      padding: 10px 20px;
      color: white;
      border-radius: 5px;
      margin: 0px 10px;
    }

    .save{
      background: #2a31f7;
    }

    .send{
      background: #0db53c;
    }
  }
`;
