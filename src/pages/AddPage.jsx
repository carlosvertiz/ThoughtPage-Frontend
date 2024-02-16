import {InputSection} from '../components/InputSection.jsx'
import '../styles/AddPage.css'
import {ThoughtTable} from '../components/ThoughtTable.jsx'
import { getLastThoughts} from '../management/mySQL.js'
import { useState,useEffect } from 'react'
import {thoughtReducer} from '../reducers/thoughtReducer.js'
import {useButtons} from '../hooks/useButtons.jsx'
import {ThoughtContainer} from '../components/ThoughtContainer.jsx'

export function AddThoughtPage() { 
  const [thoughtList, setThoughtList] = useState();
  const {state, postThought, editThought, deleteThought, archiveThought} = useButtons({ reducer: thoughtReducer, initialState : {change: false}})


  useEffect(() => {
    getLastThoughts()
      .then(data =>{
        setThoughtList(data.data)} )
      .catch( error => {
        console.error('An error occurred:', error)
      })
  }, [state])



  return (
    <>
      <h1>ADD YOUR THOUGHT</h1>
      <InputSection thoughtAction = {postThought}></InputSection>

      {thoughtList && <ThoughtTable>
        {thoughtList.map(thought => (
          <tr key={thought.id}>
            <ThoughtContainer 
              id = {thought.id}
              thought={thought.thought}
              categories={thought.categories}
              dates= {new Date(thought.dates)}
              views = {thought.views}
              onEditFunction = {editThought}
              onDeleteFunction = {deleteThought}
              onArchiveFunction = {archiveThought}>
            </ThoughtContainer>
          </tr>))}
      </ThoughtTable>
      }
    </>
  )
}