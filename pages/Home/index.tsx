import React from 'react';

import * as S from './styles';

import NoteInfo from '../../components/NoteInfo';
import NoteEditor from '../../components/NoteEditor';

const Home = () => {
  return (
    <S.Container>
      <NoteInfo />
      <NoteEditor />
    </S.Container>
  );
};

export default Home;
