import '../styles/ThoughtTable.css'


export function ThoughtTable({children}){

  return (
    <table>
    <thead>
      <tr>
        <th style={{width: '250px'}}>Thought</th>
        <th style={{width: '100px'}}>Categories</th>
        <th style={{width: '100px'}}>Date</th>
        <th style={{width: '100px'}}></th>
      </tr>
    </thead>
      <tbody>
        {children} 
      </tbody>
  </table>
  )
}