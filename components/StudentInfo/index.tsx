import React from 'react';

import * as S from './styles';

const StudentInfo = () => {
  return (
    <S.Container className="display-flex">
      <div className="student display-flex">
        <img src="https://avatars.githubusercontent.com/u/100008306?v=4" />
        <div className="info display-flex">
          <span className="name">Johan Henrique</span>
          <span className="email">johanhenrique18@gmail.com</span>
        </div>
      </div>
      <div className="actions display-flex">
        <button>Theme</button>
        <button className="exit">Sair</button>
      </div>
    </S.Container>
  );
};

export default StudentInfo;
