import '../styles/Pagination.css'

export function Pagination({pages, page, nextPage, previousPage}){
  return(
    <>      
      <div className="navigation-block">
        <button onClick={previousPage} disabled={page <= 1}>&#9664;</button> 
        <h2>{page}</h2>
        <button onClick={nextPage} disabled={page >= pages}>&#9654;</button> 
      </div>
    </>


  )

}