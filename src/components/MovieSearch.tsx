import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieSearch.css'

const MovieSearch = () => {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: FormEvent):void => {
      e.preventDefault();
      navigate(`/?${new URLSearchParams({term: searchTerm})}`);
  };

  return (
    <form className='MovieSearch' onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="searchTerm">Search Term</label>
        <input type="text"
                name="searchTerm" 
                id="searchTerm" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}/>
        <button>Search</button>
    </form>
  )
};

export default MovieSearch;
