import { FormEvent, useContext, useState } from "react";
import { Button, Form, Input, Inputs } from "./styles";
import { IWallet, WalletContext } from "../../../../context/wallet";
import { ThemeContext } from "../../../../context/theme";

export default function Forms () {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [value, setValue] = useState(0);

    const { toggleArray } = useContext(WalletContext);
    
    
    const handleClick = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const w : IWallet = {
            name : name,
            date: new Date(date),
            value : value
        }

        setName('');
        setDate('');
        setValue(0);

        toggleArray(w);
    }

    
    const { theme } = useContext(ThemeContext);

    return(
        <>
            <Form theme={theme} onSubmit={(e) => handleClick(e)}>
                <Inputs>
                    <Input theme={theme} placeholder="Digite a carteira" type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                    <Input theme={theme} placeholder="Digite a data" type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
                    <Input theme={theme} placeholder="Digite o valor" type="number" value={value} onChange={(e) => setValue(parseFloat(e.target.value))} required/>
                    <Button >Enviar</Button>
                </Inputs>
            </Form>
        </>
    )
}