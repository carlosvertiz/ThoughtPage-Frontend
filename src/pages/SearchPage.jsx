import {thoughtReducer} from '../reducers/thoughtReducer.js'
import {useButtons} from '../hooks/useButtons.jsx'
import {ThoughtTable} from '../components/ThoughtTable.jsx'
import {SearchFilter} from '../components/SearchFilter.jsx'
import {useEffect, useState } from 'react';
import { useFilter } from '../hooks/useFilter.jsx';
import {filerInitialState,filterReducer} from '../reducers/filterReducer.js'
import { getThoughts} from '../management/mySQL.js'
import {ThoughtContainer} from '../components/ThoughtContainer.jsx'
import { Pagination } from '../components/Pagination.jsx';

export function SearchPage(){
  const {state, editThought, deleteThought, archiveThought} = useButtons({reducer: thoughtReducer, initialState : {change: false}})
  const {stateFilter, changeView, changeCategory} = useFilter({reducer: filterReducer, initialState: filerInitialState })
  const [filteredData, setfilteredData] = useState("")
  const [quantity, setQuantity] = useState(5)
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState()


  useEffect(() => {
    setTimeout( () => {
      getThoughts({categories: stateFilter.categories?? "", views: stateFilter.views, quantity, page})
        .then((response) => {
          return response.json()
        })
        .then(data => {
          setPages(data.totalPages)
          setfilteredData(data.data)})
        .catch( error => {
          console.error('An error occurred:', error)
      })
    }, 1000)
  }, [state, stateFilter.categories, stateFilter.views, page])

  function nextPage(){
    if (page <= pages-1) {
      setPage(page + 1)
    }
  }
  function previousPage(){
    if (1 < page) {
      setPage(page - 1)
    }
  }

  return (
    <>
      <SearchFilter 
        onCheckboxClick = {changeView}
        onSearch = {changeCategory}>
      </SearchFilter>
      {filteredData && <ThoughtTable>
        {filteredData.map(thought => (
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
      { (pages!= undefined && pages > 1) &&<Pagination pages={pages} page = {page} nextPage={nextPage} previousPage={previousPage}></Pagination>}
    </> 
  )

}