import { Header, Table, TableHead } from "./styles";

export default function List() {
    return (
        <>
            <Table>
                <Header>
                    <TableHead>Tarefa</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Data</TableHead>
                </Header>
            </Table>
        </>
    )
}