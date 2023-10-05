import React from 'react'
import { p2p } from '@/app/font'

const PanelDisplay = ({...props}) => {
  return (
    <div className={`${p2p.variable} font-cursive text-2xl p-4`}>{props.display}</div>
  )
}

export default PanelDisplay