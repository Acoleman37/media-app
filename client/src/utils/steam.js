var axios = require("axios").default;
require('dotenv').config();

const searchGameAPI = (query) => {

  console.log(process.env.GAME_KEY);
    var options = {
        method: "GET",
        url: `https://api.rawg.io/api/games?key=44ea66fccf67441c938faa074f82e40c&search=${query}`,
      };
      
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
};

// name, background_image, released, 

module.exports = searchGameAPI;