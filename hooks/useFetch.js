import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setData(null);
    setError(null);

    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch((error) => {
        setError(error);
        console.error(error);
      })
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refresh = () => {
    fetchData();
  };

  return [data, isLoading, error, refresh];
};

export default useFetch;
