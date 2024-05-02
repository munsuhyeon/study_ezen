const path = require("path");
const fs = require("fs");
const filePath = path.join(__dirname,'..','data','restaurants.json')

function getRestaurants(){
    const fileData = fs.readFileSync(filePath);
    const restaurants = JSON.parse(fileData);
    return restaurants;
}
function storedRestaurants(restaurants){
    fs.writeFileSync(filePath,JSON.stringify(restaurants))
}

module.exports = {
    getRestaurants:getRestaurants,
    storedRestaurants:storedRestaurants
};