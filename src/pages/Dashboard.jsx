import {
  Box,
  SimpleGrid,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getIncome } from '../services/incomeService'
import { getExpense } from '../services/expenseServie'
import { getPlan } from '../services/planningServices'
import Talble from './../components/Talble';

export default function Dashboard() {
  const [income, setIncome] = useState([])
  const [totalIncome, setTotalIncome]= useState(0)
    const [expense, setExpense] = useState([])
    const [totalExpesne, setTotal] = useState(0)
    const [plan, setPlan] = useState([])
    const [totalPlan, setTotalPlan]= useState(0)

    useEffect(()=>{
      getIncome()
      .then(res=> {
        setIncome(res.data)
        let sum= 0 
        res.data.map(i => {sum += Number(i.amount)})
        setTotalIncome(sum)
      })
      .catch(e=> console.log(e.message))
    }, [])
    useEffect(()=> {
      getExpense()
      .then(res=> {
        setExpense(res.data)
        let sum= 0 
        res.data.map(i => {sum += Number(i.amount)})
        setTotal(sum)
      })
      .catch(e=> console.log(e.message))
    }, [])
    useEffect(()=> {
      getPlan()
      .then(res=> {
        setPlan(res.data)
        let sum= 0 
        res.data.map(i => {sum += Number(i.amount)})
        setTotalPlan(sum)
      })
      .catch(e=> console.log(e.message))
    }, [])
    
    return (
      <Box bg="gray.50" p={8}>
        <Box maxW="960px" mx="auto">
          <Text as="h1" textAlign="center" fontFamily="sans-serif" fontSize="2em" mb={10}>Dashboard</Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Card bg="white" borderRadius="lg" boxShadow="md">
                <CardHeader bg="blue" color="white" px={4} py={2} borderTopRadius="lg">
                <Text fontWeight="semibold">Income</Text>
                </CardHeader>
                <CardBody>
                <Text fontSize="2xl" fontWeight="semibold">{income.length > 0 ? income[(income.length)-1].amount: 0}</Text>
                </CardBody>
                <CardFooter bg="blue" borderBottomRadius="lg">
                <Text color="white" fontSize="sm">Total income: {totalIncome}</Text>
                </CardFooter>
            </Card>

            <Card bg="white" borderRadius="lg" boxShadow="md">
                <CardHeader bg="limegreen" color="white" px={4} py={2} borderTopRadius="lg">
                <Text fontWeight="semibold">Expense</Text>
                </CardHeader>
                <CardBody>
                <Text fontSize="2xl" fontWeight="semibold">{expense.length> 0? expense[expense.length-1].amount: 0}</Text>
                </CardBody>
                <CardFooter bg="limegreen" borderBottomRadius="lg">
                <Text color="white" fontSize="sm">Total expense: {totalExpesne}</Text>
                </CardFooter>
            </Card>

            <Card bg="white" borderRadius="lg" boxShadow="md">
                <CardHeader bg="orange" color="black" px={4} py={2} borderTopRadius="lg">
                <Text fontWeight="semibold">Plan</Text>
                </CardHeader>
                <CardBody>
                <Text fontSize="2xl" fontWeight="semibold">{totalPlan}</Text>
                </CardBody>
                <CardFooter bg="orange" borderBottomRadius="lg">
                <Text fontSize="sm">Your financial plan</Text>
                </CardFooter>
            </Card>
            
            </SimpleGrid>
        </Box>
        <br></br><br></br>
        <Talble title= "Income" transactions={income}/>
        <br></br><br></br>
        <Talble title= 'Expense' transactions={expense}/>
      </Box>
    )
}

