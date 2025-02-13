"use client";
import { createContext, useContext } from "react";

const CustomSessionProviderContext = createContext(null);

export const useSession = () => useContext(CustomSessionProviderContext);

const CustomSessionProvider = ({ children, session }) => {
  return (
    <CustomSessionProviderContext.Provider value={session}>
      {children}
    </CustomSessionProviderContext.Provider>
  );
};

export default CustomSessionProvider;
