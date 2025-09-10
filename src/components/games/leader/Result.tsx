import { Link } from 'react-router-dom';

export interface LeaderButtons {
  id: string,
  name: string,
  decreaseAnger: boolean,
}

interface Props {
  result: number;
}

export default function   Result({
  result,
}: Props) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-7">
      <div className="text-center text-3xl mt-10 p-5 text-gray-800">
        Your score:<br />
        {Number(result).toFixed(2)} <span className="text-xl text-gray-600">/ 60.00</span>
      </div>
      {result >= 54 && (<div className="text-center text-3xl mt-10 p-5 text-gray-800">
        <p>Nice! You are a Leader.</p>
        <p className="text-xl text-blue-700 font-medium"><Link to="/">Let's work together! --&gt;</Link></p>
        <p className="text-xl text-blue-700 font-medium"><Link to="/">Let's make great things! --&gt;</Link></p>
      </div>)}
      {result <= 10 && (<div className="text-center text-3xl mt-10 p-5 text-gray-800">
        <p>Why are You the way that You are?</p>
        <p className="text-xl text-blue-700 font-medium"><Link to="/">Let's talk! --&gt;</Link></p>
      </div>)}
    </div>
  )
}
