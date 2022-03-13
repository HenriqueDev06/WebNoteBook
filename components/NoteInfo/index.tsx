import React from 'react';

import * as S from './styles';

const NoteInfo = () => {
  return (
    <S.Container className="display-flex">
      <div className="theme display-flex">
        <span>
          Tema: <span>Corona Virus</span>
        </span>
        <span>
          Tema: <span>Corona Virus</span>
        </span>
      </div>
      <div className="teacher_container display-flex">
        <span>Instrutor</span>
        <div className="teacher display-flex">
          <img src="https://avatars.githubusercontent.com/u/100008306?v=4" />
          <div className="info display-flex">
            <span className="name">Eduardo Silva</span>
            <span className="email">eduardosilvasaa8@gmail.com</span>
          </div>
        </div>
      </div>
    </S.Container>
  );
};

export default NoteInfo;
