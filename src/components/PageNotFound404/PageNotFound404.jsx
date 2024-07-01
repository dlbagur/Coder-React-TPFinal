import React from 'react'
import { Flex, Spacer, Square, Text, Box, Image, Center } from '@chakra-ui/react'
import e404 from "/imagenes/error-404.jpg"

function PageNotFound404() {
  return (
    <Flex m={150} color='white' h={'30vh'} >
      <Center>
        <Spacer />
        <Square alignContent={'center'} bg='blue.800' size='250px'>
          <Image src={e404} />
        </Square>
        <Square bg='blue.800' size='250px'>
          <Text>Producto no encontrado</Text>
        </Square>
      </Center>
    </Flex>
  )
}

export default PageNotFound404