import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="container">
        <p className="colophon">
          &copy; Copyright {new Date().getFullYear()} - Serv{' '}
        </p>
      </div>
    </footer>
  )
}

export default Footer
