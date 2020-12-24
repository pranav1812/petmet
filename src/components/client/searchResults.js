import React from 'react';
import SquareCard from './SquareCard';

const SearchResults = () => {
    return ( 
        <div className="container" style={{marginTop:"100px"}}>
            {/*Kaam hone ke baad marginTop vaali property hatani hai*/}
            <h3>Search Results: </h3>
            <div className="row">
                <SquareCard />
                <SquareCard />
                <SquareCard />
                <SquareCard />
                <SquareCard />
                <SquareCard />
            </div>
        </div>
     );
}
 
export default SearchResults;