import { useState } from 'react';
import '../styles/SearchFilter.css'



export function SearchFilter({onCheckboxClick, onSearch}){

  const [inputValue, setInputValue] = useState('');

  const onInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      onSearch(inputValue);
    }
  };

  return (
    <>
      <label className='filter-category-text'> 
        Search Category:
        <input 
          className = "category-filter"
          onChange={event => onInputChange(event)}
          placeholder="categories separed by ;"
          value={inputValue} 
          onKeyDown={event => handleKeyPress(event)}
          >
        </input>  
        <button className = "search-button" onClick={() => onSearch(inputValue)} >Search</button>
      </label>
      <label 
        className='check-box-text'>
        Archived?
          <input
            className='checkbox-input'
            type="checkbox"
            onChange={onCheckboxClick}>
          </input>
      </label>
    </>
  )
}