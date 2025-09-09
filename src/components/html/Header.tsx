import type React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Header({
  children,
}: Props) {

  return (
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
      {children}
    </h1>
  )
}
