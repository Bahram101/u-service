import React from 'react'
import Container from './container'

const Footer = () => {
  return (
    <footer className='mt-auto border-t pt-4 pb-4 '>
      <Container className='flex justify-between'>
        <div className="footer-left">
          2021 - All rights reserved
        </div>
        <div className="footer-right">
          PayPal
        </div>
      </Container>
    </footer>
  )
}

export default Footer