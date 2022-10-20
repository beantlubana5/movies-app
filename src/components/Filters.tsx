import { FormEvent, useState } from 'react';
import MovieResults from '../models/MovieResults';
import './Filters.css'

  
interface Props {
  setAdultOnlyFilter: (filter: boolean) => void;
  setEnglishFilter: (filter: boolean) => void;
  setStarFilter: (filter: boolean) => void;
  setGenre: (genre: number) => void;
}

const Filters = ({setAdultOnlyFilter, setEnglishFilter, setStarFilter, setGenre}: Props) => {

  const handleGenreChange = (value: string) => {
    // filter by genre
    setGenre(Number(value));
  }

  const handleFilterChange = () => {
    // filter by buttons
    setAdultOnlyFilter(false);
    setEnglishFilter(false);
    setStarFilter(false);
    var ele = document.getElementsByTagName('input');
    for(var ii=0; ii<ele.length; ++ii){
      if(ele[ii].type == "radio" && ele[ii].checked){
        if(ele[ii].value == "Adult Only"){
          setAdultOnlyFilter(true);}
        else if(ele[ii].value == "English - Original Language"){
          setEnglishFilter(true);}
        else if(ele[ii].value == "At-least 8 Stars"){
          setStarFilter(true);}
        break;
      }
    }
    //console.log(activeFilter);
  }
    
  return (
    <div className='Filters'>
        <label htmlFor="">Genres</label>
        <select onChange={e => handleGenreChange(e.target.value)}>
            <option value="0">All</option>
            <option value="27">Horror</option>
            <option value="14">Fantasy</option>
            <option value="35">Comedy</option>
            <option value="18">Drama</option>
        </select>
        
      <div onChange={handleFilterChange}>
        <input type="radio" value=""                            name="filter" defaultChecked={true}/>  All
        <input type="radio" value="Adult Only"                  name="filter" />  Adult Only
        <input type="radio" value="English - Original Language" name="filter" />  English - Original Language
        <input type="radio" value="At-least 8 Stars"            name="filter" />  At-least 8 Stars
      </div>
    </div>
  )
};

export default Filters;
