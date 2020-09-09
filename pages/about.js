import Layout from '../components/MyLayout.js'
import React, { useState, useEffect } from 'react';

export default function About() {
  


  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${count} times`;
  });

  return (
    <Layout>
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
    </Layout>
  );

  
}
