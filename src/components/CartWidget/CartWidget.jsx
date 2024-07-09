import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import Context from '../../context/CartContext';

const CartWidget = () => {
  const { getQuantity } = useContext(Context)

  return (
    <Flex m={2} justify={'center'} align={'center'}  fontSize={'4xl'} color={'#FFF'}>
      <span>{ getQuantity() > 0 && getQuantity() }</span>
      <ChakraLink as={Link} to='/cart'><IoCartOutline /></ChakraLink>
    </Flex>
  )
}

export default CartWidget