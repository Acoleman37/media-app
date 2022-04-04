var axios = require('axios').default

export const searchGameAPI = async (query) => {

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
