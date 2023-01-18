import React, { FC } from 'react'
import { ISelect } from '../types'
import './styles/mySelect.scss'

interface IMySelectProps {
  props: ISelect,
  keyValue: string,
  handler: (e: any) => void
}

const MySelect:FC<IMySelectProps> = (args) => {
  //сортировка для вывода выбранного значения селекта первым в списке
  args.props.optionsList.sort((first, second) => first == args.keyValue ? -1 : 1)

  return (
    <select onChange={(e: any) => args.handler(e)} className='select' style={{padding: args.props.padding ? args.props.padding : ''}}>
      <option disabled={true}>{args.props.defaultOption}</option> 
      {args.props.optionsList.map(option => 
        <option key={option}>{option}</option> 
        )}
    </select>
  )
}

export default MySelect