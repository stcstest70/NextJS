import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/common.module.css';
import MyImage from '../../components/MyImage';

const page = ({ params }) => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`http://localhost:3000/api/movie/${id}`, {
          method: 'GET',
          headers: {
            // 'Content-Type': 'application/json', // Check if this is needed
          },
        });
        const resdata = await res.json();
        setData(resdata.data);
      }
      catch (e) {
        console.error('Error fetching data:', e);
      }
    }
    getData();
  }, [id])
  console.log(data);
  return (
    <div className={styles.container}>
      {data ?
        (<><h2 className={styles.movie_title}>   Netflix \ <span> {data.type} </span> </h2>
          <div className={styles.card_section}>
            <div>
              <MyImage src={data.image} alt={data.name} width={600} height={300} />
            </div>
            <div>
              <h1>{data.name}</h1>
              <p>{data.des}</p>
            </div>
          </div>
        </>) : (<div>Loading...</div>)
      }
    </div>
  )
}
export default page