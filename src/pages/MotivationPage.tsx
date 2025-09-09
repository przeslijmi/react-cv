import Header from '../components/html/Header';
import Layout from '../layouts/Layout';
import {
  useMotivation,
  type Person as PersonType
} from '../hooks/useMotivation';
import Person from '../components/games/motivation/Person';
import Button from '../components/html/Button';
import { useCooldown } from '../hooks/useCooldown';

export interface MotivationButtons {
  id: string,
  name: string,
  decreaseAnger: boolean,
}

const buttons:MotivationButtons[] = [
  { id: 'JustAsk', name: 'Just Ask', decreaseAnger: true },
  { id: 'Blame', name: 'Blame', decreaseAnger: false },
  { id: 'Listen', name: 'Listen', decreaseAnger: true },
  { id: 'Shout', name: 'Shout', decreaseAnger: false  },
  { id: 'DontTrust', name: 'Don\'t Trust', decreaseAnger: false },
  { id: 'ShowRespect', name: 'Show Respect', decreaseAnger: true },
  { id: 'OfferHelp', name: 'Offer Help', decreaseAnger: true },
  { id: 'SimplyCare', name: 'Simply Care', decreaseAnger: true },
  { id: 'MicroManage', name: 'Micro Manage', decreaseAnger: false  },
  { id: 'Trust', name: 'Trust', decreaseAnger: true },
];

export default function MotivationPage() {
  const {
    people,
    setSelected,
    increaseAnger,
    decreaseAnger,
    getResult,
    isAnyoneSelected,
  } = useMotivation();
  const { cooldowns, addCooldown } = useCooldown();

  const clickButton = (id: string): void => {
    const button = buttons.find((b: MotivationButtons) => b.id === id);
    if (button) {
      if (button.decreaseAnger) decreaseAnger();
      if (!button.decreaseAnger) increaseAnger();
      addCooldown(button.id, 1000);
    }
  }

  return (
    <Layout>

      <Header>Motivation</Header>

      <div className="leading-7 text-gray-800 space-y-3">
        <p>From time to time, every individual — including those who build our digital world — needs encouragement. We may choose to offer it, or we may look away and fail to recognise a colleague’s needs. When motivation fades, a person may, in due course, depart. Worse still, they may remain, quiet and outwardly acquiescent. In such circumstances, the team has already lost a member, though it may not yet realise it.</p>
        <p>Let us, then, attend to one another with patience and respect. Endeavour to reach sixty points in the exercise below, and in so doing, demonstrate how truly you serve your team.</p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-y-4 justify-between md:mx-10 my-10">
        {people.map((p: PersonType) => (
          <div
            key={p.id}
            onClick={() => setSelected(p.id)}
          >
            <Person anger={p.anger} selected={p.selected} />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-x-2 gap-y-4 justify-between">
        {buttons.map((b: MotivationButtons) => (
          <Button
            key={b.id}
            disabled={!isAnyoneSelected() || cooldowns.includes(b.id)}
            onClick={() => clickButton(b.id)}
          >{b.name}</Button>
        ))}
      </div>

      <div className="text-center text-3xl mt-10 p-5 text-gray-800">
        Your score:<br />
        {Number(getResult()).toFixed(2)} <span className="text-xl text-gray-600">/ 60.00</span>
      </div>

    </Layout>
  )
}
