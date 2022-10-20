import MovieResults from '../models/MovieResults';
import './Filters.css'

  
interface Props {
  setMovies: (movies: MovieResults) => void;
}

const Filters = () => {



  const onChangeValue = () => {
    // filter by genre
    

    // filter by buttons
  }
    
  return (
    <div className='Filters'>
        <label htmlFor="">Genres</label>
        <select>
            <option value="All">All</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
        </select>
        
      <div onChange={onChangeValue}>
        <input type="radio" value="All"                         name="gender" /> All
        <input type="radio" value="Adult Only"                  name="gender" /> Adult Only
        <input type="radio" value="English - Original Language" name="gender" /> English - Original Language
        <input type="radio" value="At-least 8 Stars"            name="gender" /> At-least 8 Stars
      </div>
    </div>
  )
};

export default Filters;
