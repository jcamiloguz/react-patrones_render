import { useState } from 'react'

const useStorageListener = (sincronize) => {
  const [storageChange, setStorageChange] = useState(false)
  window.addEventListener('storage', (event) => {
    if (event.key === 'TODOS_V1') {
      setStorageChange(true)
    }
  })

  const toggleShow = () => {
    sincronize(false)
    setStorageChange(false)
  }
  return {
    show: storageChange,
    toggleShow
  }
}

export { useStorageListener }
