import React from 'react'

type Item = {
  id: number;
  name: string;
  email: string;
}

export default async function Login() {

  const data = await fetch("https://next-portifolio-lime.vercel.app/api")
  const jsonData = await data.json()
  console.log(jsonData)
  return (
    <div className=' flex-col md:flex-row flex-wrap p-4'>
      {jsonData.map((item: Item) => {
        return (
          <div key={item.id} className=' p-4 m-2 rounded shadow-md w-full md:w-1/3 lg:w-1/4'>
            <h1 className='text-xl font-bold'>{item.name}</h1>
            <p className='text-gray-700'>{item.email}</p>
          </div>
        )
      })}
    </div>
  )
}
