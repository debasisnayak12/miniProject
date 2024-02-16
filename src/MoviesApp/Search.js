import { useState } from "react";


const Search = ({searchMovies}) => {
   const [value,setValue] = useState('');

   function onChangeText(e){
    setValue(e.target.value);
   }

   function onEnter(e){
    let title = value.trim();
    if(e.key === 'Enter'){
        searchMovies(title);
    }
   }

    return (
        <div className="search-container">
            <input 
              placeholder="Search Movie by Title..."
              onChange={onChangeText}
              value={value}
              onKeyUp={onEnter}
            />
        </div>
    )
}

export default Search;