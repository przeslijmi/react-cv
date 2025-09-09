import type React from 'react';
import Nav from '../components/Nav';

interface Props {
  children: React.ReactNode;
}

export default function Layout({
  children,
}: Props) {

  return (
    <div className="bg-gradient-to-tr from-sky-200 to-amber-100 w-screen h-screen overflow-auto">
      <div className="max-w-7xl flex flex-col p-3 gap-3 mx-auto min-h-screen">
        <Nav />

        <div className="bg-white/20 border border-gray-400/50 shadow-sm rounded-xl p-5 flex-1">
          {children}
        </div>
      </div>
    </div>
  )
}
