import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import Bell from '../../assets/bell.png'

import api from '../../services/api'
import isConnected from '../../utils/isConnected'

function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify(){
    await api.get(`/task/filter/late/${ isConnected }`)
    .then(response => {
      setLateCount(response.data.length)
    })
  }

  useEffect(() => {
    lateVerify();
  })

  async function quit(){
    localStorage.removeItem('@todo/macaddress')
    window.location.reload()
  }

  return (
    <S.Container>
      <S.LeftSide>
        <a href="/"><img src={ Logo } alt="Logotipo"/></a>
      </S.LeftSide> 

      <S.RightSide>
        <Link to="/">início</Link>
        <span className="divider"/>
        <Link to="/task">nova tarefa</Link>
        <span className="divider"/>
        { !isConnected ? <Link to="/qrcode">sincronizar celular</Link> : <button type="button" onClick={ quit }>SAIR</button> }     
        {
          lateCount &&
          <>
            <span className="divider"/>
            <button onClick={ clickNotification } id="notification"><img src={ Bell } alt="Atrasados"/><span>{ lateCount }</span></button> 
          </>
        }
      </S.RightSide>      
    </S.Container>
  );
}

export default Header;