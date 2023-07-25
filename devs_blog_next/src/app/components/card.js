import Link from 'next/link';
import React from 'react';

function Card(props) {
  return (
    <div className='bg-gradient-to-r from-purple-950 to-blue-950 p-6 m-4 rounded-md flex flex-col'>
      <h2 className='py-4 text-xl font-bold'>{props.title}</h2>
      <small>{props.description}</small>
      <Link
        className='text-right w-full inline-block text-lg py-6 font-semibold text-indigo-600'
        href={`/post/${props.ID}`}
      >
        Ler Post
      </Link>
    </div>
  );
}

export default Card;
