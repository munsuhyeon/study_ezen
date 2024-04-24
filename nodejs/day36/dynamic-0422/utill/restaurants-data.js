const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname,'..','data', 'restaurants.json');

function getRestaurants(){
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);
    return storedRestaurants;
}
function storedRestaurants(storedRestaurants){
    fs.writeFileSync(filePath,JSON.stringify(storedRestaurants));
}

module.exports = {
    getRestaurants:getRestaurants,
    storedRestaurants:storedRestaurants
};