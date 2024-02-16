import PropTypes from 'prop-types';
import '../styles/ThoughtContainer.css'
import {buttonReducer} from '../reducers/buttonReducer.js'
import {useButtonState} from '../hooks/useButtonState.jsx'
import {textReducer} from '../reducers/textReducer.js'
import {useForm} from '../hooks/useForm.jsx'
import { EditableBlock } from './EditableBlock.jsx';


export function ThoughtContainer({id, thought, categories, dates, views, onEditFunction, onDeleteFunction, onArchiveFunction}){
  const {stateButton, editClick, deleteClick, archichiveClick} = useButtonState({reducer: buttonReducer, initialState:{id,views, state: true,
    editable: false
    }})
  const {_, editForm ,handleChangeThought ,handleChangeCategory, state} = useForm({reducer: textReducer, initialState:{thought, categories, error:false}});

  return(
    <>
      <td className="thought-text">
        <EditableBlock 
          text={state.thought} 
          value={state.thought}
          editable={stateButton.editable}
          functionChange = {handleChangeThought}>
        </EditableBlock>
      </td>
      <td className="category-text">
        <EditableBlock 
          text={state.categories?.replaceAll(";", "\n")}
          value={state.categories}
          editable={stateButton.editable}
          functionChange = {handleChangeCategory}>
        </EditableBlock>
      </td>
      <td className="date-text">{dates.toLocaleDateString()}</td>
      <td >
        <div className="buttons-container">
          <button 
            className="button-items" 
            disabled = {state.error} 
            onClick={event => {
              editClick(event)
              if (stateButton.editable) {
                editForm({event, thoughtAction:onEditFunction, id})
              }
            }}>
            {stateButton.editable? "Done": "Edit" }
          </button>
          <button 
            className="button-items" 
            onClick={event => 
              deleteClick({event, onDeleteFunction})
            }>
            Delete
          </button>
          <button 
            className="button-items" 
            onClick={
              event =>
              archichiveClick({event, onArchiveFunction})
            }>
            { stateButton.views? "Archive" : "Desarchive" }
          </button>
        </div>
      </td>
    </>
  )
}

ThoughtContainer.propTypes = {
  id: PropTypes.number.isRequired,
  thought: PropTypes.string.isRequired, 
  categories: PropTypes.string.isRequired,
  dates: PropTypes.instanceOf(Date).isRequired,
  views: PropTypes.number.isRequired,
  onEditFunction: PropTypes.func.isRequired,
  onDeleteFunction: PropTypes.func.isRequired,
  onArchiveFunction: PropTypes.func.isRequired,
};