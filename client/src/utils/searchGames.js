import { useState, useEffect } from "react";
import searchGameAPI from "./steam.js"
import searchMovies  from "./movie";

const useFetch =() => {
    const [data, setData] = useState({
      searchGameAPI: "",
      searchMovies: "",
      results: [],
    });
  
    useEffect(() => {
        if(data.searchGameAPI !== "") {
            const timeoutId = setTimeout(() => {
                const fetch = async () => {
                    try {
                        const res = await searchGameAPI.get(`/${data.searchGameAPI}`);
                        setData({ ...data,results: res.data});

                    }catch (err) {
                    console.error(err);
                    }
                };
    
                fetch();
            }, 1000);
            return () => clearTimeout(timeoutId);
        }
      //...
    }, [data.searchGameAPI]);
    // ..
    return { data, setData };
  };
  
  export default useFetch;