import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { defaultSetup } from '../types/variables';
import Board from './Board';
import SettingsPanel from './SettingsPanel';
import './styles/main.scss'

const Main = () => {  
  const [setup, setSetup] = useState(null)
  const storeSetup = useSelector((state: RootState) => state.changeSetup)
  console.log(storeSetup)
  useEffect(() => {
    const lsSetup = localStorage.getItem('params')
    const params = typeof lsSetup === 'string' ? JSON.parse(lsSetup) : defaultSetup;
    setSetup(params)
  }, [])
  if(setup === null) {
    return (
      <div className='loader'>
        <div>
          Параметры загружаются...
        </div>
      </div>
    )
  } else {
    return (
      <div className='main'>
        <Board setup={storeSetup === null ? setup : storeSetup}/>
        <SettingsPanel defaultSetup={storeSetup === null ? setup : storeSetup} />
      </div>
    )
  }
}

export default Main