import React, { FC } from 'react'
import { IButtonSpan } from '../types'

interface IMyDirectionButtonProps {
  spanList: IButtonSpan[],
  align?: string,
  background: string,
  id: number,
  onAlignChange: (e: any) => void
}

const MyDirectionButton:FC<IMyDirectionButtonProps> = ({spanList, align, background, id, onAlignChange}) => {
  return (
    <button id={`${id}`} onClick={onAlignChange}>
      <span className='span-block' style={{alignItems: align}}>
        {spanList.map((span, index) =>
          <span key={index} style={{
            height: span.height, 
            width: span.width, 
            display: 'block',
            background: background,
            marginBottom: '2px'
          }} />
          )}
      </span>
      
    </button>
  )
}

export default MyDirectionButton