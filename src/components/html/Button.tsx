import classNames from 'classnames';
import type React from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  disabled,
}: Props) {

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        'px-4 py-2 text-white/80 bg-gradient-to-r rounded-md shadow-md from-blue-800 to-blue-500',
        {
          'opacity-30 cursor-not-allowed': disabled,
        }
      )}
    >
      {children}
    </button>
  )
}
