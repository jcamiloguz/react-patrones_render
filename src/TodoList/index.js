import React from 'react'
import './TodoList.css'

function TodoList ({ children, error, onError, loading, onLoading, render, searchedTodos, onEmptyTodos, onEmptySearchResults, totalTodos, searchText }) {
  return (
      <section className='TodoList-container'>
          {error && onError()}
          {loading && onLoading()}
          {(!loading && !searchedTodos.length && !totalTodos) && onEmptyTodos()}
          {(totalTodos && !searchedTodos.length) && onEmptySearchResults(searchText)}
          <ul>
              {(!loading && !error) && searchedTodos.map(children)}
          </ul>
      </section>
  )
}

export { TodoList }
