var axios = require('axios').default

const searchGameAPI = async (query) => {

  return fetch(`https://api.rawg.io/api/games?key=44ea66fccf67441c938faa074f82e40c&search=${query}`)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

    // var options = {
        // method: "GET",
        // url: `https://api.rawg.io/api/games?key=44ea66fccf67441c938faa074f82e40c&search=sonic`,
      // };
    
      // axios
        // .request(options)
        // .then(function (response) {
          // console.log(response.data);
        // })
        // .catch(function (error) {
          // console.error(error);
        // });
};


// name, background_image, released,

module.exports = searchGameAPI;