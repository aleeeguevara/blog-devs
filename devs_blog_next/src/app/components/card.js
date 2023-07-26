'use client';
import Link from 'next/link';
import React, { useState } from 'react';

function Card(props) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`cursor-pointer bg-gradient-to-r from-purple-950 to-blue-950 p-6 m-4 rounded-md flex flex-col ${
        hovered ? 'animate-pulse' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2 className='py-4 text-3xl font-bold'>{props.title}</h2>
      <small className='text-xl pb-2'>{props.description}</small>
      <Link
        className='text-right w-full inline-block text-lg py-2 font-semibold text-indigo-600'
        href={`/post/${props.ID}`}
      >
        Ler Post
      </Link>
    </div>
  );
}

export default Card;
