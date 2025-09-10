import classNames from 'classnames';
import PersonSvg from '@components/svgs/PersonSvg';
import { mapAngerToDuration } from '@utils/leader';

interface Props {
  anger: number, // 0 - 10
  selected?: boolean,
  silenced?: boolean,
}

export default function Person({
  anger,
  selected = false,
  silenced = false,
}: Props) {
  const style:Record<string,string> = {};
  if (anger >= 5) {
    style['--shake-duration'] = `${mapAngerToDuration(anger)}ms`;
  }

  return (
    <div className={(silenced ? 'cursor-not-allowed opacity-30' : 'cursor-pointer')}>
      <div className="text-center text-gray-800 text-sm mb-1">{Number(10-anger).toFixed(2)} / 10</div>
      <PersonSvg
        className={classNames(
          'shadow-xl rounded-full mx-auto',
          `w-20 h-20 lg:w-[7rem] lg:h-[7rem]`,
          {
            'border-4 border-dashed border-white/50 bg-green-300/50': (selected && !silenced),
          },

          // color
          ( silenced && 'text-gray-500'),
          ( !silenced && anger <= 0 && 'text-green-700'),
          ( !silenced && anger > 0 && anger <= 2 && 'text-green-600'),
          ( !silenced && anger > 2 && anger <= 4 && 'text-yellow-700'),
          ( !silenced && anger > 4 && anger <= 6 && 'text-orange-700'),
          ( !silenced && anger > 6 && anger <= 8 && 'text-red-700 animate-shake' ),
          ( !silenced && anger > 8 && 'text-red-900' ),

          // shaking
          ( !silenced && anger >= 5 && 'animate-shake' ),
        )}
        style={style}
      />
    </div>
  )
}
