import { useLeader } from '@hooks/useLeader';
import People from '@components/games/leader/People';
import Buttons from '@components/games/leader/Buttons';
import Result from '@components/games/leader/Result';
import Button from '@components/html/Button';

export interface LeaderButtons {
  id: string,
  name: string,
  decreaseAnger: boolean,
}

interface Props {}

export default function LeaderGame({}: Props) {
  const {
    people,
    setSelected,
    increaseAnger,
    decreaseAnger,
    getResult,
    isAnyoneSelected,
    restartGame,
  } = useLeader();

  return (
    <>
      <div className="grid border border-gray-300 shadow-sm mt-5">
        <div className="opacity-100 col-start-1 row-start-1">
          <People people={people} setSelected={setSelected} />
          <Buttons
            isAnyoneSelected={isAnyoneSelected}
            decreaseAnger={decreaseAnger}
            increaseAnger={increaseAnger}
          />
        </div>
        {(getResult() >= 54 || getResult() <= 10) && (<div className="bg-white/50 backdrop-blur-md col-start-1 row-start-1">
          <Result result={getResult()} />
        </div>)}

      </div>

      <div className="flex justify-center mt-10">
        <Button onClick={() => restartGame()}>Restart Game</Button>
      </div>
    </>
  )
}
