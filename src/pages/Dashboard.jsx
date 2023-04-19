import { Box, SimpleGrid, Text} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useLoaderData } from 'react-router-dom'

export default function Dashboard() {
  const tasks = useLoaderData()


  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks && tasks.map(task => (
        <Card key={task.id}>
          <CardHeader>
            <Text>{task.title}</Text>
          </CardHeader>

          <CardBody>
            <Text>{task.description}</Text>
          </CardBody>
          <CardFooter>
          <Text>card header</Text>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  )
}

export const taskLoader  = async () => {
  const res = await fetch('http://localhost:3000/tasks')

  return res.json()

}

