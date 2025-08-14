import React, { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';

interface RootProps {
  children: ReactNode;
}

export default function Root({ children }: RootProps) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
