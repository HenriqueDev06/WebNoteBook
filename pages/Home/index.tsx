import React from 'react';

import * as S from './styles';

import NoteInfo from '../../components/NoteInfo';
import NoteEditor from '../../components/NoteEditor';
import StudentInfo from '../../components/StudentInfo';

const Home = () => {
  return (
    <S.Container>
      <StudentInfo />
      <NoteInfo />
      <NoteEditor />
    </S.Container>
  );
};

export default Home;
