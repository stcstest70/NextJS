import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import styles from '../styles/common.module.css';

const Movie = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/movie', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const { data } = await res.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>{data ? (
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {
              data.map((curElem) => {
                return <MovieCard key={curElem._id} {...curElem} />
              })
            }
          </div>
        </div>
      </section>
    ) : (<div>Loading...</div>)}
      
    </>
  )
}


export default Movie
