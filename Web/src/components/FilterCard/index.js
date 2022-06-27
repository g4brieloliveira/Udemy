import React from 'react';
import * as S from './styles';

import Filter from '../../assets/filter.svg'

function FilterCard({ title, actived }) {
  return (
    <S.Container actived={ actived }>
      <img src={ Filter } alt="Filtro"/>
      <span>{ title }</span>
    </S.Container>
  );
}

export default FilterCard;