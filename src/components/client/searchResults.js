import React from 'react';
import SquareCard from './SquareCard';

const SearchResults = (props) => {
    return ( 
        <div className="container" style={{marginTop:"100px"}}>
            {/*Kaam hone ke baad marginTop vaali property hatani hai*/}
            <h3>Search Results: </h3>
            <div className="row">
                <SquareCard />
            </div>
        </div>
     );
}
 
export default SearchResults;