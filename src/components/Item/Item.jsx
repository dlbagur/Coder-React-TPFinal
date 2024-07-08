import React from 'react'
import { 
    Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, 
    ButtonGroup, Button, Divider, Heading, Center, Flex 
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({nombre, marca, precio, stock, img, id}) => {
  return (
    <Card minWidth='250px' border='3px' borderColor='#243F4D' boxShadow='2xl'>
      <CardBody>
        <Image
          src={img}
          alt={nombre}
          borderRadius='md'
          boxSize='100%'
          objectFit='cover' 
          w={'80px'}
          h='180px' 
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md' align={'center'}>{nombre}</Heading>
          <Heading size='sm' align={'center'}>{marca} </Heading>
          <Text color='red.800' fontSize='2xl' align={'center'}>${precio}</Text>
          <Text color='blue.700' fontSize='xl' align={'center'}>stock: {stock}</Text>
        </Stack>
      </CardBody>
      <Center height='2px' bg={'#c7cfd4'}>
      </Center>
      <Divider color={'#c7cfd4'}  />
      <CardFooter>
        <Flex spacing='2' justifyContent={'center'} align={'center'} w={'100%'}>
          <Button 
            variant='solid' 
            bg={'#243F4D'} 
            color={'#fff'}
            _hover={{ bg: '#3E6478', color: '#fff' }}
            >
              <Link to={`/producto/${id}`}>
                Ver detalle
              </Link>
          </Button>

        </Flex>
      </CardFooter>
    </Card>
  )
}

export default Item
