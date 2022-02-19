import React, { createContext } from 'react'

import { Convert, Types as DataTypes } from './types'
import data from '../../assets/strings.json'

export const dataTypes = Convert.toTypes(JSON.stringify(data))

export const DataContext = createContext<DataTypes>(dataTypes)
type DataProps = {
  children: React.ReactNode
  value: DataTypes
}

export const DataProvider = ({ children, value }: DataProps) => (
  <DataContext.Provider value={value}>{children}</DataContext.Provider>
)
