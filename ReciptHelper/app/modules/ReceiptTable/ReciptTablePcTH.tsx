import React from 'react'
type props ={
    reciptinterfaceProp:any
}
export function ReciptTablePcAdvancedTH({reciptinterfaceProp}:props) {
  return (
    <th className="px-6 py-4 font-bold text-xl text-gray-900 whitespace-nowrap dark:text-white">
        {reciptinterfaceProp
        .split("T")[0]
        .split("-")
        .reverse()
        .join("-")}
    </th>
  )
}
export function ReciptTableNonPcAdvancedTH({reciptinterfaceProp}:props)
{
  return(
    <th className="px-6 py-4 font-bold text-xl text-gray-900 whitespace-nowrap dark:text-white">
      {reciptinterfaceProp}
    </th>
  )
}

