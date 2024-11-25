import { db } from '@/shared/lib/db'
import { Button } from '@/shared/ui/button'
import React from 'react'

const Home = async () => {
  
  const res = await db.post.findMany()
  console.log('res',res)

  return (
    <div>Home <Button variant={'default'} size="lg" >Button</Button></div>
  )
}

export default Home