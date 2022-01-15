import React from 'react'
import { CreateTodoButton } from '../CreateTodoButton'
import { EmptyTodos } from '../EmptyTodos'
import { Modal } from '../Modal'
import { useTodos } from './useTodos'
import { TodoCounter } from '../TodoCounter'
import { TodoForm } from '../TodoForm'
import { TodoHeader } from '../TodoHeader'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'
import { TodoSearch } from '../TodoSearch'
import { TodosError } from '../TodosError'
import { TodosLoading } from '../TodosLoading'
import { ChangeAlert } from '../ChangeAlert'

function App () {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sicronizeTodos,
    sincronizedTodos
  } = useTodos()

  return (
      <React.Fragment>
          <TodoHeader loading={loading}>
              <TodoCounter
               totalTodos={totalTodos}
              completedTodos={completedTodos}
               />
              <TodoSearch
               searchValue={searchValue}
              setSearchValue={setSearchValue}
               />
          </TodoHeader>

          <TodoList
          sincronizedTodos={sincronizedTodos}
          totalTodos={totalTodos}
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          searchText={searchValue}
          onError= {() => <TodosError/> }
          onLoading= {() => <TodosLoading/> }
          onEmptyTodos= {() => <EmptyTodos /> }
          onEmptySearchResults= {(searchText) => <p>No hay resultados para {searchText} </p> }
          >{todo => (
              <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
          )}</TodoList>

          {!!openModal && (
          <Modal>
              <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
          </Modal>
          )}

          <CreateTodoButton
        setOpenModal={setOpenModal}
      />
          <ChangeAlert sincronize={sicronizeTodos}/>
      </React.Fragment>
  )
}

export default App
