import * as React from 'react';
import ReactStopwatch from 'react-stopwatch';

import * as S from './styles';

const Stopwatch = () => (
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    onCallback={() => console.log('Finish')}
    render={({ formatted, hours, minutes, seconds }) => {
      return (
        <S.Container>
          <p>{formatted}</p>
        </S.Container>
      );
    }}
  />
);

export default Stopwatch;
