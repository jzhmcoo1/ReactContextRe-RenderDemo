import { createContext, useContext, useState } from "react";

const AppContext = createContext<{
  count: number;
  data: {
    foo: number;
    bar: number;
  };
  addCount: () => void;
  changeData: () => void;
} | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    foo: 1,
    bar: 2
  });

  const addCount = () => {
    setCount(count + 1);
  };

  const changeData = () => {
    setData({
      foo: data.foo + 1,
      bar: data.bar + 2
    });
  };

  return (
    <AppContext.Provider value={{ count, data, addCount, changeData }}>
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useSideBtn必须在SidePanelControlProvider中使用");
  }
  return context;
}
