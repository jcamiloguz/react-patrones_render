import React, { cloneElement, Children } from 'react'

function TodoHeader ({ children, loading }) {
  children = Children.toArray(children)
  return (
      <header>
          {children.map(child => cloneElement(child, { loading: loading }))}
      </header>
  )
}

export { TodoHeader }
