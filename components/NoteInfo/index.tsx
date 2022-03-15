import React from 'react';

import * as S from './styles';
import StopWatch from '../StopWatch';

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
        <StopWatch />
      </div>
    </S.Container>
  );
};

export default NoteInfo;
