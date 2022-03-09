import React, { createContext, useEffect, useState } from 'react'
import { Subject } from './subject'

type SubjectContextType = {
  subject: Subject
  setSubject: (subject: Subject) => void
}

export const SubjectContext = createContext<SubjectContextType>({
  subject: Subject.doctors,
  setSubject: () => null,
})

type SubjectProps = {
  children: React.ReactNode
}

export const SubjectProvider = ({ children }: SubjectProps) => {
  const [state, setState] = useState(Subject.customer)
  useEffect(() => {
    console.trace('state', state)
  }, [state])
  return (
    <SubjectContext.Provider value={{ subject: state, setSubject: setState }}>
      {children}
    </SubjectContext.Provider>
  )
}
