/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from "react";

export type configContextType =  DOMRect

const configContext = createContext<configContextType>({} as configContextType)
const configContextDispatch = createContext(( _ : DOMRect) => {});

export function ConfigContextProvider({children}: {children: ReactNode}) {
    const [state , setState] = useState<configContextType>({} as configContextType);
    function setPos(val: DOMRect) {
        setState(val);
    }

    return (
        <configContext.Provider value={state}>
            <configContextDispatch.Provider value={setPos}>
                {children}
            </configContextDispatch.Provider>
        </configContext.Provider>
    )
}

export function useConfig(): configContextType {
    return useContext(configContext);
}

export function useConfigDispatch(): React.Dispatch<React.SetStateAction<configContextType>> {
    return useContext(configContextDispatch) as React.Dispatch<React.SetStateAction<configContextType>>;
}
