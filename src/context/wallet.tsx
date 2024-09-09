import { createContext, ReactNode, useState } from "react";

export interface IWallet {
    name: string;
    date: Date;
    value: number;
}

interface IWalletArray {
    wallet: IWallet[];
    toggleArray: (newWallet: IWallet) => void;
}

export const WalletContext = createContext({} as IWalletArray)

export const WalletProvider = ({ children }: { children: ReactNode }) => {

    const [wallet, setWallet] = useState<IWallet[]>([])

    const toggleArray = (newWallet: IWallet) => {
        const newArray = [...wallet, newWallet];
        setWallet(newArray);
    }

    return (
        <>
            <WalletContext.Provider
                value={{
                    wallet,
                    toggleArray
                }}
                children={children}
            />
        </>
    )
}