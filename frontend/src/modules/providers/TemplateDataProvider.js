import React, { createContext, useContext, useState } from 'react';

const ThisTemplateContext = React.createContext({});

export const TemplateDataProvider = props => {
  const [thisTemplate, setThisTemplate] = useState({})

  const attachTemplate = (template) => {
    setThisTemplate(template)
  }

  return (
    <ThisTemplateContext.Provider value={{thisTemplate, attachTemplate}} {...props} />
  )
}

export const useTemplate = () => useContext(ThisTemplateContext)