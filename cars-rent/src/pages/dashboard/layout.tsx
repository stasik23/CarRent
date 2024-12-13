import { Navbar } from '@/components/Navbar';
import React from 'react';

const dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <h1>Dashboard Layout</h1>
      {children}
    </div>
  );
}

export default dashboard;