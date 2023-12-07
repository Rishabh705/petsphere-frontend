import React, { createContext, useState } from 'react';

const SFContext = createContext();

export function SFProvider({ children }) {
  
  //sorting states
  const [sort,setSort] = useState({
    order:"desc",
    type:"original_title"
  })

  //filtering state
  const [filter,setFilter] = useState({
    type:"vote_average",
    limits:[5,10]
  })

  return (
    <SFContext.Provider value={{ sort,setSort, filter, setFilter}}>
      {children}
    </SFContext.Provider>
  );
}

export default SFContext;