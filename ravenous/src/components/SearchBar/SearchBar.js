import React from 'react';
import './SearchBar.css'

/**
 * SearchBar allows the communication with the Yelp API
 */

 const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
 };


 class SearchBar extends React.Component{
     /**
      *  dynamically create the list items needed to display the sort options 
      */
     renderSortByOption () {
         // return an array ok keys
         return Object.keys(sortByOptions).map(sortByOption => {
             let sortedByOptionValue = sortByOptions[sortByOption];
         return <li key={sortedByOptionValue}>{sortByOption}</li>
         });

     }

     render(){
         return(
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
              <ul>
                {/* Use .renderSortByOptions() to sort the businesses by their options  */}
                {this.renderSortByOption()}
              </ul>
            </div>
            <div className="SearchBar-fields">
              <input placeholder="Search Businesses" />
              <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
              <a>Let's Go</a>
            </div>
          </div>
         );
     }
 }

 export default SearchBar;