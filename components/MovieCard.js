'use client'

import React from 'react';
import styles from '../styles/common.module.css';
import Link from "next/link";
import { useState } from 'react';
import Image from 'next/image';

const MovieCard = (curElem) => {
  const { _id, name, type, image, des } = curElem;
  const [url, setUrl] = useState(image);
    let mimage = new window.Image();
    mimage.src = image;
    mimage.onload = () => setUrl(image);
    mimage.onerror =()=> setUrl('/error.png');
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image 
          src={url} 
          alt={name} 
          width={260} 
          height={200}
           />
        </div>
        <div className={styles.card_data}>
          <h2>{name.substring(0, 18)}</h2>
          <p>
            {`${des.substring(0, 66)} ...`}
          </p>

          <Link href={`/movie/${_id}`}>
            <button>
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default MovieCard