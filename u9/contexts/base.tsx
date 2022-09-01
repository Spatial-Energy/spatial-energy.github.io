import React, { createContext, ReactNode, useMemo, useState } from "react";

interface BaseProviderProps {
  children: ReactNode | ReactNode[];
}

export interface BaseContextType {
  isMenuDark: boolean;
  setMenuDark(state: BaseContextType["isMenuDark"]): void;
}

const defaultContext: BaseContextType = {
  isMenuDark: false,
  setMenuDark: () => null,
};

export const BaseContext: React.Context<BaseContextType> =
  createContext<BaseContextType>(defaultContext);

export const BaseProvider = ({ children }: BaseProviderProps): JSX.Element => {
  const [isMenuDark, setMenuDark] = useState<BaseContextType["isMenuDark"]>(
    defaultContext.isMenuDark
  );

  const contextValue: BaseContextType = useMemo(
    () => ({
      isMenuDark,
      setMenuDark,
    }),
    [isMenuDark, setMenuDark]
  );

  return (
    <BaseContext.Provider value={contextValue}>{children}</BaseContext.Provider>
  );
};
