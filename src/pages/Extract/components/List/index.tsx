import { useContext } from "react";
import { Table, TableHeader, TableRow, TableHead, TableData } from "./styles";
import { WalletContext } from "../../../../context/wallet";

export default function List() {

    const { wallet } = useContext(WalletContext);

    console.log(wallet);

    return (
        <Table>
            <thead>
                <TableHeader>
                    <TableHead>Carteira</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Valor</TableHead>
                </TableHeader>
            </thead>
            <tbody>
                {
                    wallet.map(w => (
                        <>
                            <TableRow>
                                <TableData>{w.name}</TableData>
                                <TableData>{w.date.toUTCString()}</TableData>
                                <TableData>{w.value}</TableData>
                            </TableRow>
                        </>
                    ))
                }
            </tbody>
        </Table>
    )
}
