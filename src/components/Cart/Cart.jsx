import { Button, Heading, background } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import {
    Table, Thead, Tbody, Tfoot, Tr, Th, Td,
    TableCaption, TableContainer, Flex
  } from '@chakra-ui/react'
import { RiDeleteBin5Line } from "react-icons/ri";
import {Link } from 'react-router-dom'

const Cart = () => {
    const { cart, removeItem, clearCart, getTotal } = useContext(Context)
    if(cart.length === 0) {
        return (
            <Flex direction={'column'} justify={'center'} align={'center'} mt={10}>
                <Heading>Todavía no agregaste productos al carrito</Heading>
                <Link to='/'>Ver productos</Link>
            </Flex>
    )
    } else {
        return (
            <TableContainer>
                <Table variant='striped' colorScheme='red'>
                    <Thead color={'#000'} background={'#f5b0ae'}>
                        <Tr size='xl' fontWeight={'bold'} >
                            <Th>Marca</Th>
                            <Th>Nombre</Th>
                            <Th>Cantidad</Th>
                            <Th isNumeric>Precio</Th>
                            <Th isNumeric>Subtotal</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            cart.map((prod) => (
                                <Tr key={prod.id}>
                                    <Td>{prod.marca}</Td>
                                    <Td>{prod.nombre}</Td>
                                    <Td>{prod.quantity}</Td>
                                    <Td isNumeric>{prod.precio}</Td>
                                    <Td isNumeric>{prod.precio * prod.quantity}</Td>
                                    <Td>
                                        <Button onClick={()=>removeItem(prod.id)}>
                                            <RiDeleteBin5Line />
                                        </Button>
                                    </Td>
                                </Tr>
                    ))
                    }
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th paddingLeft={"20%"}>
                            <Link to="/checkout"><Button fontWeight={'bold'}>Finalizar compra </Button></Link>
                            </Th>
                            <Th paddingLeft={"20%"} color={'#5c1f16'}><Heading>Total: {getTotal()}</Heading></Th>
                            <Th paddingLeft={"20%"}><Button onClick={() => clearCart()} fontWeight={'bold'}>Vaciar carrito </Button></Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        )
    }
}

export default Cart
