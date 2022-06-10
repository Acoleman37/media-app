import { useState, useEffect } from "react";
import searchMovies  from "./movie";

const useFetch =() => {
    const [data, setData] = useState({
      searchMovies: "",
      results: [],
    });
  
    useEffect(() => {
        if(data.searchMovies !== "") {
            const timeoutId = setTimeout(() => {
                const fetch = async () => {
                    try {
                        const res = await searchMovies.get(`/${data.searchMovies}`);
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
    }, [data.searchMovies]);
    // ..
    return { data, setData };
  };
  
  export default useFetch;