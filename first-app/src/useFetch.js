import{ useState, useEffect } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const abortController = new AbortController();

    fetch(url,{ signal: abortController.signal })
    .then((res)=>{
      if(!res.ok)
        throw Error("could not fetch data");
      return res.json();
    })
    .then((data)=>{
      setData(data);
      setIsLoading(false);
    })
    .catch((err)=>{
      if(err.name !== "AbortError"){
        console.error(err);
        setIsLoading(false);
        setError(err.message);
      }else{
        console.log(err);
      }
    });

    return () => {
      abortController.abort();
    }

  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;