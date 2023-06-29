import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h2> Página principal </h2>

      <a href='/blog'>Veja o blog</a>
    </main>
  );
}
