import React, { createContext, useState } from 'react'
import { Subject } from './subject'

type SubjectContextType = {
  subject: Subject
  setSubject: (subject: Subject) => void
}

export const SubjectContext = createContext<SubjectContextType>({
  subject: Subject.customer,
  setSubject: () => null,
})

type SubjectProps = {
  children: React.ReactNode
}

export const SubjectProvider = ({ children }: SubjectProps) => {
  const [state, setState] = useState(Subject.customer)
  return (
    <SubjectContext.Provider value={{ subject: state, setSubject: setState }}>
      {children}
    </SubjectContext.Provider>
  )
}

export const connectSubject =
  (Child: React.ReactElement) => (props: JSX.IntrinsicAttributes) => {
    const subject = React.useContext(SubjectContext)
    return React.cloneElement(Child, {
      subject,
      ...props,
    })
  }
