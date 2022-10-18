import './Filters.css'

const Filters = () => {

    const valueSelected = () => {
        // Clear all filters

        // FIll filter that was selected

        // Apply filter to movie results
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
        
      {/*<div onChange={this.onChangeValue}>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
         <label htmlFor="">Adult Only</label>
        <input type="checkbox"/>
        <label htmlFor="">English - Original Language</label>
        <input type="checkbox" />
        <label htmlFor="">At-least 8 Stars</label>
        <input type="checkbox" /> */}
    </div>
  )
};

export default Filters;
