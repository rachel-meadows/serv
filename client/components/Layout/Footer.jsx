import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {
  const currentUser = useSelector((state) => state.currentUser)
  return (
    <footer
      className={`${
        currentUser?.type === 'business' ? 'bg-primary' : 'bg-success'
      }`}
    >
      <div className={`colophon`}>
        &copy; Copyright {new Date().getFullYear()} - Serv{' '}
      </div>
    </footer>
  )
}

export default Footer
