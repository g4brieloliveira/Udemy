import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';

import isConnected from '../../utils/isConnected';

import { format } from 'date-fns';
import redirect, { Redirect } from 'react-router-dom'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from '../../utils/typeIcons';

function Task({match}) {
  const [redirect, setRedirect] = useState(false);
  const [type, setType] = useState();
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [hour, setHour] = useState();
  const [date, setDate] = useState();

  async function loadTaskDetail() {
    await api.get(`/task/${match.params.id}`)
    .then(response => {
      setType(response.data.type)
      setDone(response.data.done)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setDate(format(new Date (response.data.when), 'yyyy-MM-dd'))
      setHour(format(new Date (response.data.when), 'HH:mm'))
    })
  }

  async function Save(){
    if(!title)
      return(alert("Informe o título da tarefa!"))
    else if(!description)
      return(alert("Informe a descrição da tarefa!"))
    else if(!type)
      return(alert("Selecione o tipo da tarefa!"))
    else if(!date)
      return(alert("Informe a data da tarefa!"))
    else if(!hour)
      return(alert("Informe a hora da tarefa!"))



    if(match.params.id) {
      await api.put(`/task/${match.params.id}`, {
        macaddress: isConnected,
        done,
        type,
        title,
        description,
        when: `${ date }T${ hour }:00.000`
      }).then( () =>
        setRedirect(true)
      )
    } else {
      await api.post('/task', {
        macaddress: isConnected,
        type,
        title,
        description,
        when: `${ date }T${ hour }:00.000`
      }).then( () =>
        setRedirect(true)
      )
    }
  }

  async function Delete(){
    const res = window.confirm('Deseja mesmo remover esta tarefa?')
    if(res === true){
      await api.delete(`/task/${ match.params.id }`).then(() => setRedirect(true))
    }
  }

  useEffect(() => {
    if(!isConnected){
      setRedirect(true)
    }
    loadTaskDetail();
  }, [  ])

  return (
    <S.Container>
      { redirect && <Redirect to="/"/> }
      <Header />
      <S.Form>
        <S.TypeIcons>
          {
            typeIcons.map((icon, index) => (
              index > 0 && <button type="button" onClick={() => setType(index)}><img src={ icon } alt="Tipo da tarefa" className={ type && type != index && 'inative' }/></button>
            ))
          }
        </S.TypeIcons>
        <S.Content>
          <S.Input>
            <span>Título</span>
            <input type="text" placeholder="Título da tarefa" onChange={ e => setTitle(e.target.value) } value={ title }/>
          </S.Input>
          <S.TextArea>
            <span>Detalhes</span>
            <textarea name="" id="" cols="30" rows={ 5 } placeholder="Detalhes da tarefa" onChange={ e => setDescription(e.target.value) } value={ description }/>
          </S.TextArea>
          <div id="timeDate">
            <div className="date">
              <S.Input>
                <span>Data</span>
                <input type="date" placeholder="Título da tarefa" onChange={ e => setDate(e.target.value) } value={ date }/>
              </S.Input>
            </div>       
            <div className="time">
              <S.Input>
                <span>Hora</span>
                <input type="time" placeholder="Título da tarefa" onChange={ e => setHour(e.target.value) } value={ hour } />
              </S.Input>
            </div>   
          </div>
          <S.Options>
            <div className="chk">
              <input type="checkbox" checked={ done } onChange={ () => setDone(!done)}/>
              <span class="geekmark"></span>
              <span>CONCLUIDO</span>
            </div>
            { match.params.id && <button type="button" onClick={ Delete }>EXCLUIR</button>}
          </S.Options>
          <S.Save>
            <button type="button" onClick={ Save }>SALVAR</button>
          </S.Save>
        </S.Content> 
      </S.Form>
      <Footer />
    </S.Container>
  );
}

export default Task;