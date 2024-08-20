import { createContext, useState, ReactNode, FunctionComponent } from "react";

type ObserverContextType = {
  subscribe: (callback: (data: unknown) => void) => void;
  notify: (data: unknown) => void;
} | null;

export const ObserverContext = createContext<ObserverContextType>(null);

type ObserverProviderProps = {
  children: ReactNode;
};

export const ObserverProvider: FunctionComponent<ObserverProviderProps> = ({
  children,
}) => {
  const [subscribers, setSubscribers] = useState<
    Array<(data: unknown) => void>
  >([]);

  const subscribe = (callback: (data: unknown) => void) => {
    setSubscribers((prevSubscribers) => [...prevSubscribers, callback]);
  };

  const notify = (data: unknown) => {
    subscribers.forEach((callback: (data: unknown) => void) => callback(data));
  };

  return (
    <ObserverContext.Provider value={{ subscribe, notify }}>
      {children}
    </ObserverContext.Provider>
  );
};
