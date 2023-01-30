import { FC } from 'react'
import type { Property } from 'csstype'
import { ISetup } from '../types'
import './styles/board.scss'

interface IBoardProps {
  setup: ISetup,
}

const Board:FC<IBoardProps> = ({setup}) => {

  let textDirection: Property.TextAlign = 'start'

  if(setup.textAlign == 0) {
    textDirection = 'start'
  } else if(setup.textAlign == 1) {
    textDirection = 'center'
  } else if(setup.textAlign == 2) {
    textDirection = 'end'
  } else if(setup.textAlign == 3) {
    textDirection = 'justify'
  }

  return (
    <div className='board'>
      <textarea
        className='board__text-field'
        style={{
        fontFamily: setup.font, 
        fontWeight: setup.weight, 
        fontSize: `${setup.size}px`,
        color: setup.color,
        lineHeight: `${setup.lh}%`,
        letterSpacing: `${setup.ls}px`,
        textAlign: textDirection,
      }}
        >
        Type here...
      </textarea>
    </div>  
  )
}

export default Board