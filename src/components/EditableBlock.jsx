export function EditableBlock ({editable, value, text , functionChange}) {
  return(
     editable ? (
      <textarea 
        className='edit-text'
        type="text"
        value = {value}
        onChange = {functionChange}
      />
      ):(
       <p>{text}</p>
      )   
  )
}
