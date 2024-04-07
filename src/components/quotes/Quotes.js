import React, { useEffect, useState } from 'react';
// https://api.api-ninjas.com/v1/quotes?category=amazing
// 'X-Api-Key'
// RiQI1WJFhIoZRLKOdwBBvw==136watXpgRe7CSDf

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
      <div className="quote-author">
        {fetchedData.quote}
        {fetchedData.author}
      </div>
    ) : (
      <div>Loading...</div>
    )
  );
};

export default Quotes;
