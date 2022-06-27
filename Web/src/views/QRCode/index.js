import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import * as S from './styles';
import Qr from 'qrcode.react'

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QRCode() {
  const [mac, setMac] = useState();
  const [redirect, setRedirect] = useState(false);

  async function saveMac(){
    if(!mac){
      alert('Informe o número para sincronização!')
    } else {
      await localStorage.setItem('@todo/macaddress', mac);
      setRedirect(true);
      window.location.reload()
    }
  }

  return (
    <S.Container>
      { redirect && <Redirect to='/'/> }
      <Header />
      <S.Content>
        <h1>CAPTURE O QRCODE PELO APP</h1>
        <p>Suas atividades serão sincronizadas com o seu celular</p>
        <S.QRCodeArea>
          <Qr value='getmacaddress' size={ 300 } />
        </S.QRCodeArea>

        <S.ValidationCode>
          <span>Digite o número que aparecer na tela do seu celular</span>
          <div className="inputarea">
            <input type="text" onChange= { e => setMac(e.target.value) } value={ mac } />
            <button type="button" onClick={ saveMac }><p>SINCRONIZAR</p></button>
          </div>
        </S.ValidationCode>
      </S.Content>
      <Footer/>
    </S.Container>
  );
}

export default QRCode;