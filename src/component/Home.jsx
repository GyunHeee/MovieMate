import React, { useEffect } from 'react';
import { API_URL } from './Config';
import axios from 'axios';

export default function Home() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    axios
      .get(endpoint)
      .then((res) => {
        console.log(res);
      })
      .catch(console.error());
  });

  return <div></div>;
}
