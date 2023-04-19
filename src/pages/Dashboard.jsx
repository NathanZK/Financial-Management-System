import { Box, SimpleGrid, Text, useToast} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Dashboard() {
  const tasks = useLoaderData()
  const toast= useToast()

  useEffect(()=>{
    toast({
      title: "Logged in",
      description: "Welcome back!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  }, [])

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

