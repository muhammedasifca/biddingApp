import { createContext } from "react";
import { ContextType } from "../type";

const UserContext = createContext<ContextType>({} as ContextType);

export default UserContext;
