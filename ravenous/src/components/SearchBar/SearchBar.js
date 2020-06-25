import React from 'react';
import './SearchBar.css'

/**
 * SearchBar allows the communication with the Yelp API
 */

 class SearchBar extends React.Component{
   /***
    * term - search term located in the search input
    * location - the location input
    * sortBy will represent the selected sorting option to use.
    */
    constructor(props){
      super(props);
      this.state = {
        term: '',
        location: '',
        sortBy: 'best_match'
      }
      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);


      this.sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
     };
    }

       getSortByClass(sortByOption)  {
       if ( sortByOption == this.state.sortBy) {
           return 'active';
       }
       return ' ';

     }

     handleSortByChange(sortByOption){
       this.setState({
         sortBy: sortByOption
       });
       
     }

     handleTermChange(event){
       this.setState({
         term: event.target.value
       })

     }

     handleLocationChange(event){
        this.setState({
          location: event.target.value
         
        })

     }

     handleSearch(event){
       this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
       event.preventDefault();

     }
    
     /**
      *  dynamically create the list items needed to display the sort options 
      */
     renderSortByOption () {
         // return an array ok keys
         return Object.keys(this.sortByOptions).map(sortByOption => {
             let sortedByOptionValue = this.sortByOptions[sortByOption];
         return <li key={sortedByOptionValue} className={this.getSortByClass(sortedByOptionValue)} 
         onClick={this.handleSortByChange.bind(this, sortedByOptionValue)}>{sortByOption}</li>
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
              <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
              <input placeholder="Where?" onChange={this.handleLocationChange}/>
            </div>
            <div className="SearchBar-submit">
              <a onClick={this.handleSearch}>Let's Go</a>
            </div>
          </div>
         );
     }
 }

 export default SearchBar;