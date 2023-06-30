import Link from 'next/link';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='content-home w-full h-screen'>
        <div className='flex justify-center items-center pb-6'>
          <h1 className='text-5xl font-mono font-bold'>Blog Devs </h1>
          <FontAwesomeIcon icon={faCode} width={50} className='ml-4' />
        </div>
        <h2 className='text-2xl text-center italic py-6'>
          Conheça as melhores práticas e fique antenado!
        </h2>

        <Link
          className='text-center w-full inline-block text-xl py-6 font-semibold text-cyan-400'
          href='/blog'
        >
          Acesse o Blog!
        </Link>
      </div>
    </main>
  );
}
