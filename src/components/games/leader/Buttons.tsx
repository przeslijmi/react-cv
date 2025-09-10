import Button from '@components/html/Button';
import { useCooldown } from '@hooks/useCooldown';

export interface LeaderButtons {
  id: string,
  name: string,
  decreaseAnger: boolean,
}

const buttons:LeaderButtons[] = [
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

interface Props {
  isAnyoneSelected: () => boolean;
  decreaseAnger: () => void;
  increaseAnger: () => void;
}

export default function Buttons({
  isAnyoneSelected,
  decreaseAnger,
  increaseAnger,
}: Props) {
  const { cooldowns, addCooldown } = useCooldown();

  const clickButton = (id: string): void => {
    const button = buttons.find((b: LeaderButtons) => b.id === id);
    if (button) {
      if (button.decreaseAnger) decreaseAnger();
      if (!button.decreaseAnger) increaseAnger();
      addCooldown(button.id, 1000);
    }
  }

  return (
    <div className="flex flex-wrap gap-x-2 gap-y-4 justify-between pb-5 px-5">
      {buttons.map((b: LeaderButtons) => (
        <Button
          key={b.id}
          disabled={!isAnyoneSelected() || cooldowns.includes(b.id)}
          onClick={() => clickButton(b.id)}
        >{b.name}</Button>
      ))}
    </div>
  )
}
