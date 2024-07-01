import React, { useState } from 'react'
import { Box, Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'

const ItemCount = ({stock, valorInicial, onAdd}) => {
    const [ count, setCount ] = useState(valorInicial)
    const incrementar = () => {
        count < stock && setCount(count + 1)
    }
    const decrementar = () => {
        count > valorInicial && setCount(count - 1)
    }

  return (
    <Flex direction={'column'} align={'center'} justify={'center'} w={'100%'}>
      <Box className='counterContainer'>
        <Button         
          bg={'#243F4D'} 
          color={'#fff'}
          _hover={{ bg: '#3E6478', color: '#fff' }} 
          className='btnCounter'  
          onClick={decrementar}>
            -
        </Button>
        <Heading p={2}>{count}</Heading>
        <Button         
          bg={'#243F4D'} 
          color={'#fff'}
          _hover={{ bg: '#3E6478', color: '#fff' }}
          className='btnCounter'  
          onClick={incrementar}>
            +
        </Button>
      </Box>
      <Button 
        bg={'#243F4D'} 
        color={'#fff'}
        w={'100%'}
        h={'5vh'}
        borderRadius={0}
        _hover={{ bg: '#3E6478', color: '#fff' }} 
        onClick={() => onAdd(count)}
          >Agregar al carrito
        </Button>
    </Flex>
    // <Flex alignItems="center" flexDirection="column">
    //   <Flex alignItems="center" mt="10">
    //     <Button colorScheme="blue" fontWeight="bold" onClick={decrementar} size="md">
    //       -
    //     </Button>
    //     <Text fontSize="2xl" fontWeight="bold" color="black" mx="18px">
    //       {count}
    //     </Text>
    //     <Button colorScheme="blue" fontWeight="bold" onClick={incrementar} size="md">
    //       +
    //     </Button>
    //   </Flex>
    //   <Button colorScheme="green" mt="20" onClick={() => onAdd(count)}>
    //     Agregar al Carrito
    //   </Button>
    // </Flex>
  )
}

export default ItemCount
