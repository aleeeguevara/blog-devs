import React from 'react';
import axios from 'axios';
import Card from '../components/card';
import Link from 'next/link';

async function getServerSideProps() {
  const postsRes = await axios.get('http://localhost:1337/api/posts');
  return postsRes.data.data;
}
async function Blog() {
  let call = await getServerSideProps();
  getServerSideProps();
  return (
    <div className='px-4 mx-auto flex flex-col justify-between items-center'>
      <div className='w-2/3 px-6'>
        {call.map((item) => (
          <Card
            title={item.attributes.title}
            description={item.attributes.description}
            ID={item.id}
          />
        ))}
      </div>
      <Link className='self-end m-5' href='/' title='Voltar Home'>
        Voltar Home
      </Link>
    </div>
  );
}

export default Blog;
