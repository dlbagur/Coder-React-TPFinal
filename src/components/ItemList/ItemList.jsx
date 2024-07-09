import React from 'react'
import Item from '../Item/Item'
import { Box, Flex } from '@chakra-ui/react'

const ItemList = ({products, texto, onAddToCart}) => {
  return (
    <Flex wrap={'wrap'} justify={'center'} align={'center'} mt={5} mb={5}>
      {products.map((prod) => (
        <Box key={prod.id} m={2}>
          <Item {...prod} texto={texto} onAddToCart={() => onAddToCart(prod)} />
        </Box>
      ))}
    </Flex>
  )
}

export default ItemList
