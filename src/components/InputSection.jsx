import {useForm} from '../hooks/useForm.jsx'
import {initialState, textReducer} from '../reducers/textReducer.js'
import '../styles/InputSection.css'


export function InputSection({thoughtAction}) {
  const {submitForm ,handleChangeThought ,handleChangeCategory, state} = useForm({reducer: textReducer, initialState})

  const handleKeyPress = event => {
    if (state.thought.trim() === "") {
      return
    }
    if (event.key === 'Enter') {
      submitForm({event, thoughtAction})    }
  };

  return (
    <>
        <form className="thoughtForm" onSubmit={event => submitForm({event, thoughtAction})}>
          <textarea 
          value={state.thought}
          onChange={handleChangeThought}
          onKeyDown={event => handleKeyPress(event)}
          className = "thought-box"
          placeholder="I'm thinking about..." ></textarea>
          <button disabled = {state.error} className = {`send-button ${state.error ? 'send-button-disabled' : ''}`}>Send</button>
          <input 
          value={state.categories}
          onChange={handleChangeCategory}
          className = "category-box"
          placeholder="Categories separed by ;"></input>
          {typeof state.error === 'string' && <p className='warning'>{state.error}</p>}
        </form>
      
    </>
  )
}