import React, { FC } from 'react'

interface IButtonProps {
  children: string,
}

const MySettingsButton:FC<IButtonProps> = ({children}) => {
  return (
    <button>
      {children}
    </button>
  )
}

export default MySettingsButton