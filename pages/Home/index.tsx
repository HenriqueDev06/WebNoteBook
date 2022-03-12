import React from 'react';

import * as S from './styles';

import NoteList from '../../components/NoteList';

const Home = () => {
  return (
    <S.Container>
      <NoteList />
    </S.Container>
  );
};

export default Home;
