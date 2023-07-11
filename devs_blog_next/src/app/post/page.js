'use client';
import React from 'react';

import { useSearchParams } from 'next/navigation';
export default function Page() {
  const searchParams = useSearchParams();
  const searchID = searchParams.get('ID');
  console.log('sear', searchID);

  return <div>Internal Info</div>;
}
