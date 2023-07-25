import React from 'react';
import axios from 'axios';
import Image from 'next/image';
import MarkdownIt from 'markdown-it';

async function getPost(id) {
  const posts = await axios.get(`http://localhost:1337/api/posts/${id}`);

  return posts.data.data;
}
async function PostPage({ params }) {
  let data = await getPost(params.slug);
  const md = new MarkdownIt();
  const htmlContent = md.render(data.attributes.content);
  return (
    <article className='p-6 container mx-auto'>
      {data && (
        <div className='flex flex-col items-center'>
          <header>
            <h1 className='py-4 text-3xl text-indigo-600 text-center font-bold'>
              {data.attributes?.title}
            </h1>
            <Image
              className='mx-auto pb-5 rounded-lg'
              src={`${data.attributes.LinkImagem}?random=${data.id}`}
              width={800}
              height={150}
            />
            <h2 className='text-purple-500 text-2xl font-bold text-center'>
              {data.attributes?.description}
            </h2>
          </header>
          <section>
            <div
              className='text-2xl py-4 leading-snug'
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            ></div>
          </section>
        </div>
      )}
    </article>
  );
}

export default PostPage;
