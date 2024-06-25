import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast} from 'react-toastify'
import { Box, Flex, useMediaQuery } from '@chakra-ui/react'

const ItemDetail = ({marca, nombre, descripcion, img, precio, stock}) => {
    console.log("imagen: ", img)
    const [largerThan800] = useMediaQuery("(min-width: 800px)");
    const onAdd = (cantidad) => {
        toast(`Agregaste ${cantidad} unidad/es`)
    }

  return (
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
  )
}

export default ItemDetail
