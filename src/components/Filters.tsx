import './Filters.css'

const Filters = () => {
  
    const onChangeValue = () => {

    }
    
  return (
    <div className='Filters'>
        <label htmlFor="">Genres</label>
        <select>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
        </select>
        
      <div onChange={onChangeValue}>
        <input type="radio" value="Adult Only"                  name="gender" /> Adult Only
        <input type="radio" value="English - Original Language" name="gender" /> English - Original Language
        <input type="radio" value="At-least 8 Stars"            name="gender" /> At-least 8 Stars
      </div>
    </div>
  )
};

export default Filters;
