interface Props{
    children:React.ReactNode,
    className?: String
}
import React from 'react'

const Container = ({children, className}: Props) => {
  return (
    <div className={`${className} max-w-[1320px] mx-auto px-4 xl:px-0`}>
      {children}
    </div>
  )
}

export default Container
