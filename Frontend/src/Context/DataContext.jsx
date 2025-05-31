import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {

  const [user, setUser] = useState('')

  console.log(user)

  return (
    <DataContext.Provider value={{setUser}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
