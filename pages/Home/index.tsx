import React from 'react';

import * as S from './styles';

import NoteList from '../../components/NoteList';
import NoteEditor from '../../components/NoteEditor';

const Home = () => {
  return (
    <S.Container>
      <NoteList />
      <NoteEditor />
    </S.Container>
  );
};

export default Home;
