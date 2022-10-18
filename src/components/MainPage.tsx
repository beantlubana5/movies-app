import Filters from './Filters';
import './MainPage.css'
import MovieResults from './MovieResults';
import MovieSearch from './MovieSearch';

const MainPage = () => {
  return (
    <div className='MainPage'>
        <h1>Movies</h1>
        <MovieSearch/>
        <Filters />
        <MovieResults />
    </div>
  )
};

export default MainPage;
