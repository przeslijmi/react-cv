import classNames from "classnames";
import PersonSvg from "../../svgs/PersonSvg";
import { mapAngerToDuration } from "../../../utils/motivation";

interface Props {
  anger: number, // 0 - 10
  selected?: boolean,
}

export default function Person({
  anger,
  selected = false,
}: Props) {
  const style:Record<string,string> = {};
  if (anger >= 5) {
    style['--shake-duration'] = `${mapAngerToDuration(anger)}ms`;
  }

  return (
    <div className="cursor-pointer">
      <div className="text-center text-gray-800 text-sm mb-1">{Number(anger).toFixed(2)} / 10</div>
      <PersonSvg
        className={classNames(
          'shadow-xl rounded-full mx-auto',
          `w-20 h-20 lg:w-[7rem] lg:h-[7rem]`,
          {
            'border-4 border-dashed border-white/50 bg-green-300/50': selected,
          },

          // color
          ( anger <= 0 && 'text-green-700'),
          ( anger > 0 && anger <= 2 && 'text-green-600'),
          ( anger > 2 && anger <= 4 && 'text-yellow-700'),
          ( anger > 4 && anger <= 6 && 'text-orange-700'),
          ( anger > 6 && anger <= 8 && 'text-red-700 animate-shake' ),
          ( anger > 8 && 'text-red-900' ),

          // shaking
          ( anger >= 5 && 'animate-shake' ),
        )}
        style={style}
      />
    </div>
  )
}
