import { useContext } from "react";
import { ObserverContext } from "./ObserverContext";

export const useObserver = () => useContext(ObserverContext);
