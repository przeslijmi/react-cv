import { Link } from 'react-router-dom';

interface Props {}

export default function Nav({}: Props) {

  return (
    <div className="bg-white/60 border border-gray-400/50 shadow-sm rounded-xl p-3">
      <nav className="flex justify-evenly gap-4 text-blue-500">
        <Link to="/">Home</Link>
        <Link to="/motivation">Motivation</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  )
}
