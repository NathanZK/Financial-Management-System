import { TableCaption, TableContainer, Table, Thead, Tbody, Tr, Th, Td  } from "@chakra-ui/react";

function Talble({transactions, title}) {
    console.log(transactions)
    return (
        
        <TableContainer>
            <Table variant="striped" colorScheme="teal">
                <TableCaption>Changes in Finance</TableCaption>
                <Thead>
                <Tr>
                    <Th>Date</Th>
                    <Th style={title == 'Income'? { color: 'green' }:{ color: 'red' }}>{title}</Th>
                </Tr>
                </Thead>
                <Tbody>
                {transactions && transactions.map(transaction => (
                    <Tr>
                    <Td>{transaction.created.slice(0, 10)}</Td>
                    <Td>{transaction.amount}</Td>
                </Tr>

                ))}
                </Tbody>
            </Table>
            </TableContainer>
    );
}

export default Talble;