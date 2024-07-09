import React, { useContext, useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import { 
        Card, CardHeader, CardBody, CardFooter, 
        Flex, Box, Text, Heading, Image,  
        Button,
        Center
    } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Context from '../../context/CartContext';

const ItemDetail = ({id, variedad, marca, nombre, descripcion, img, precio, stock}) => {
    const [ cantidad, setCantidad ] = useState(0);
    const { addItem } = useContext(Context);
    const [disableAddButton, setDisableAddButton] = useState(stock === 0);

    const onAdd = (quantity) => {
        if (quantity > stock) {
            toast.error(`No hay suficiente stock para ${nombre}. Disponible: ${stock}`);
            return;
        }
        
        const item = {
            id,
            nombre,
            marca,
            descripcion,
            precio,
            img
        };
        
        addItem(item, quantity);
        toast.success(`Agregaste ${quantity} unidades`);
        setCantidad(quantity);
    };

    useEffect(() => {
        setDisableAddButton(stock === 0);
    }, [stock]);

    return (
        <Card maxW='md' mt={20}>
            <CardHeader>
                <Flex>
                    <Box w={'80%'} 
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center">
                        <Heading
                            size='xl' 
                            textAlign={'center'}>
                            {nombre}
                        </Heading>
                        <Text fontSize='lg' textAlign={'center'}>Bodega {marca}</Text>
                    </Box>
                    <Image
                        objectFit='cover'
                        src={img}
                        alt={nombre}
                        borderRadius='md'
                        boxSize='80%'
                        w={'80px'}
                        h='180px' 
                    />
                </Flex>
            </CardHeader>
            <CardBody>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Text textAlign={'center'}>{descripcion}</Text>
                </Flex>
                <Text fontSize='3xl' textAlign={'center'} mt={10} color={'#742323'} fontWeight={'bold'}>
                    ${precio}
                </Text>
                <Text fontSize='xl' textAlign={'center'} mt={1} color={'#742323'}>
                    Stock disponible: {stock}
                </Text>
            </CardBody>
            <CardFooter w={'100%'} p={0}>
                {cantidad > 0 ? (
                    <Flex justify={'space-between'} align={'center'} w={'100%'}>
                        <Button 
                            bg={'#AD886E'} 
                            color={'#4a1007'}
                            w={'100%'}
                            h={'5vh'}
                            mt={11}
                            borderRadius={0}
                            border={'#000'}
                            _hover={{ bg: '#693546', color: '#fff' }}>
                            <Link to='/cart'>Ir al carrito</Link> 
                        </Button>
                        <Button 
                            bg={'#AD886E'} 
                            color={'#4a1007'}
                            w={'100%'}
                            h={'5vh'}
                            mt={11}
                            borderRadius={0}
                            _hover={{ bg: '#693546', color: '#fff' }}>
                            <Link to='/'>Seguir comprando</Link> 
                        </Button>
                    </Flex>
                ) : (
                    <ItemCount stock={stock} initialValue={1} onAdd={onAdd} disableAddButton={disableAddButton} />
                )}
            </CardFooter>
            <ToastContainer />
        </Card>
    );
};

export default ItemDetail;