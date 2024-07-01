import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast} from 'react-toastify'
import { Card, CardHeader, CardBody, CardFooter, Flex, Box, Text, Heading, Image,  Avatar,  IconButton, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Context from '../../context/CartContext'

const ItemDetail = ({id, marca, nombre, descripcion, img, precio, stock}) => {
    const [ cantidad, setCantidad ] = useState(0)
    const { addItem } = useContext(Context)
    // const [largerThan800] = useMediaQuery("(min-width: 800px)");

    const onAdd = (cantidad) => {
        const item = {
            id,
            nombre,
            precio,
            img
        }
        addItem(item, cantidad)
        toast(`Agregaste ${cantidad} unidades`)
        setCantidad(cantidad)     
    }

  return (
    <Card maxW='md' mt={20}>
    <CardHeader>
      <Image
          objectFit='cover'
          src={img}
          alt={nombre}
          borderRadius='md'
          boxSize='100%'
          w={'400px'}
          h='400px' 
      />
    </CardHeader>
    <CardBody>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Box w={'100%'}>
                <Heading 
                    size='md' 
                    textAlign={'center'}>
                    {nombre}
                </Heading>
                <Text fontSize='lg' textAlign={'center'}>Bodega: {marca}</Text>
            </Box>
            <Text textAlign={'center'}>
            {descripcion}
            </Text>
        </Flex>
            <Text fontSize='3xl' textAlign={'center'} mt={10} color={'#fff'} fontWeight={'bold'}>
                ${precio}
            </Text>
            <Text fontSize='xl' textAlign={'center'} mt={1} color={'#fff'}>
            Stock disponible: {stock}
            </Text>
    </CardBody>

       <CardFooter w={'100%'} p={0}>
        {
            cantidad > 0 ?
            <Flex justify={'space-between'} align={'center'} w={'100%'}>
                <Button 
                    bg={'#AD886E'} 
                    color={'#243F4D'}
                    w={'100%'}
                    h={'5vh'}
                    mt={11}
                    borderRadius={0}
                    _hover={{ bg: '#ECCDB7', color: '#243F4D' }}>
                            <Link to='/cart'>Ir al carrito</Link> 
                </Button>
                <Button 
                    bg={'#AD886E'} 
                    color={'#243F4D'}
                    w={'100%'}
                    h={'5vh'}
                    mt={11}
                    borderRadius={0}
                    _hover={{ bg: '#ECCDB7', color: '#243F4D' }}>
                                        <Link to='/'>Seguir comprando</Link> 
                </Button>
            </Flex>
                            
                :
                <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
        }    
      </CardFooter>
          <ToastContainer />
      </Card>  
  )
}

export default ItemDetail



/*
    <Flex direction={['column', 'row']} wrap="wrap">
      <Box
        width={['100%', '20%']}
        alignItems="center"
        height="400px"
        display="flex"
        flexDirection="column"
        bg="gray.300"
        color="brown"
        fontSize={largerThan800 ? '2xl' : 'l'}
        p={['10px', '30px']}
        textAlign="center"
      >
        <Box>Producto:</Box>
        <Box fontWeight="bold">{nombre}</Box>
        <Box>Bodega:</Box>
        <Box fontWeight="bold">{marca}</Box>
        <Box mb="5px" mt="20"color="black" fontSize={'s'}>Precio por unidad:</Box>
        <Box mb="20px" color="black" fontSize={'s'}>${precio}</Box>

      </Box>

      <Box
        bg="#B4B6BE"
        width={['100%', '60%']}
        display="flex"
        p={['10px', '20px']}
        justifyContent="center"
        alignItems="center"
        height="400px"
        flexDirection="column"
        color="black"
        fontSize={largerThan800 ? 'xl' : 's'}
        textAlign="center"
      >
        <Box mb="20px">{descripcion}</Box>
      </Box>
      <Box
        width={['100%', '20%']}
        p={['10px', '50px']}
        bg="gray.300"
        color="brown"
        textAlign="center"
      >
        <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} />
        <ToastContainer />
      </Box>
    </Flex>
*/