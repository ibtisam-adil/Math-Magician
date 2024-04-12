import React, { useEffect, useState } from 'react';
import './quotes.css';

const Quotes = () => {
  const [fetchedData, setFetchedData] = useState(null);
  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=amazing', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'RiQI1WJFhIoZRLKOdwBBvw==136watXpgRe7CSDf',
        },
      });
      const data = await response.json();
      setFetchedData(data[0]);
    };
    fetchQuotes();
  }, []);
  return (
    fetchedData ? (
      <div className="quote-container">
        <div className="quote">
          <p className="quote-detail">
            &quot;
            {' '}
            {fetchedData.quote}
            {' '}
            &quot;
          </p>
          <div className="line" />
          <p className="quote-author">
            -
            {fetchedData.author}
            .
          </p>
        </div>
      </div>
    ) : (
      <div className="loading">Loading...</div>
    )
  );
};

export default Quotes;
