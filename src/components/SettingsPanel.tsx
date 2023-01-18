import React, { FC, useState } from 'react'
import MyDirectionButton from '../ui/MyDirectionButton'
import MySelect from '../ui/MySelect'
import {fontsOptions, weightsOptions, colorOptions, directionButtonList} from '../data/variables'
import './styles/settingsPanel.scss'
import { ISetup } from '../types'
import { useDispatch } from 'react-redux'

interface ISettingsPanel {
  defaultSetup: ISetup
}

const SettingsPanel:FC<ISettingsPanel> = ({defaultSetup}) => {
  const [setup, setSetup] = useState<ISetup>(defaultSetup)

  const dispatch = useDispatch()
  
  console.log(setup)
  
  //изменяем шрифт
  const onFontChange = (e: any) => {
    e.preventDefault()
    setSetup({...setup, font: e.target.value})
  }

  //изменяем толщину текста
  const onWeightChange = (e: any) => {
    e.preventDefault()
    setSetup({...setup, weight: e.target.value})
  }

  //изменяем цвет текста
  const onColorChange = (e: any) => {
    e.preventDefault()
    setSetup({...setup, color: e.target.value})
  }
  
  //изменяем line-height
  const onLhChange = (e: any) => {
    e.preventDefault()
    setSetup({...setup, lh: e.target.value})
  }
  
  //изменяем letter-space
  const onLsChange = (e: any) => {
    e.preventDefault()
    setSetup({...setup, ls: e.target.value})
  }

  //изменяем размер текста
  const onSizeChange = (e: any) => {
    e.preventDefault()
    setSetup({...setup, size: e.target.value})
  }
  
  //изменяем выравнивание текста
  const onAlignChange = (e: any) => {
    e.preventDefault()
    setSetup({...setup, textAlign: e.currentTarget.id})
  }

  const onSaveSetup = (e: any) => {
    e.preventDefault()
    setSetup({...setup})
    localStorage.removeItem('params')
    localStorage.setItem('params', JSON.stringify(setup))
    dispatch({type: 'CHANGE_SETUP', payload: setup})
  }

  return (
    <div className='settings-wrapper panel'>
      <h2 className='panel__title'>
        TEXT
      </h2>
      <form className='panel__form form'>
        <div className='form__fonts-block form-item'>
          <MySelect handler={onFontChange} keyValue={setup.font} props={fontsOptions} />
        </div>
        <div className='form__options-block form-item'>
          <div className='form__weight-block'>
            <MySelect handler={onWeightChange} keyValue={setup.weight} props={weightsOptions}/>
          </div>
          <div className='form__size-block'>
            <input 
              onChange={onSizeChange} 
              value={setup.size} 
              className='form__options-block--size input' 
              type='number'/>
          </div>
        </div>
        
        <div className='form__color-block form-item'>
          <div className='color-example' style={{background: setup.color}}/>
          <MySelect handler={onColorChange} keyValue={setup.color} props={colorOptions}/>
        </div>


        <div className='form__options-block form-item'>
          <div className='form__options-block--lh'>
            <input onChange={e => onLhChange(e)} value={setup.lh} className='input' type='number'/>
          </div>
          <div className='form__options-block--ls'>
            <input onChange={onLsChange} value={setup.ls} className='input' type='number'/>
          </div>
        </div>

        <div className='form__direction-block direction-block form-item'>
          {directionButtonList.map((item, index) =>
            <MyDirectionButton
              onAlignChange={onAlignChange}
              background={setup.textAlign == index ? '#2198ED' : '#AAB2BB'}
              key={index}
              id={index} 
              spanList={item.spanList} 
              align={item.align}/>
            )}
        </div>

        <button onClick={e => onSaveSetup(e)} className='form__submit-button' type='submit'>Apply Changes</button>
      </form>
    </div>
  )
}

export default SettingsPanel