import React from 'react';

import * as S from './styles';

import SearchBar from '../SearchBar'

const NoteList = () => {
  return (
    <S.Container>
      <SearchBar />
      <p>All Notes</p>
    </S.Container>
  );
};

export default NoteList;
