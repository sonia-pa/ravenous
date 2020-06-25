const { default: SearchBar } = require("../components/SearchBar/SearchBar");
const { default: Business } = require("../components/Business/Business");

const apiKey ='bYiRJqttNb8P4vn7AqLV9YPO6mRqeH05ZqySSJeNr35G2JxWikpRN2h3SzWfwkIt4PtoccD-ExWaRCcLE4Cp6q7caxfJMHoGbrSU85MJ2lTKhcOxdnYBqX_jvCP1XnYx';

const Yelp = {
    search (term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
          {headers: {Authorization: `Bearer ${apiKey}` }}
        ).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({ 
                    id: business.id,
                    imageSrc : business.image_url,
                    name: business.name,
                    address: business.address1,
                    city: business.city,
                    state: business.location.state,
    
                    zipCode: business.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                   
                }) );
            }
        }) ;

}
}


export default Yelp;