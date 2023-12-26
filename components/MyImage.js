'use client'

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

const MyImage = ({ src, alt, width, height }) => {
    const [url, setUrl] = useState('/error.png');
    
    let image = new window.Image();
    image.src = src;
    image.onload = () => setUrl(src);
    image.onerror =()=> setUrl('/error.png');
    
  return (
    <Image src={url} alt={alt} width={width} height={height} />
  )
}

export default MyImage