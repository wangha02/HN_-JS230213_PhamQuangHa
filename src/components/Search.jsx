import React from 'react';
import '../Css/Search.css';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import BrightnessMediumOutlinedIcon from '@mui/icons-material/BrightnessMediumOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
function Search({ searchTerm, handleSearch }) {
  return (
  <div>
<div className="header">
                <h1>
                    Reviews TA Béc Cọp !!! <span><ReviewsOutlinedIcon /></span>
                </h1>
                <div className="black-white">
                    <BrightnessMediumOutlinedIcon />
                </div>
            </div>
            <div className='search-reviews'>
                <SearchOutlinedIcon />
                <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search" />
            </div>

  </div>
        
   
  );
}

export default Search;
