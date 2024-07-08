import React, { useContext, useState } from 'react';
import Context from '../../context/CartContext';
import {
  FormControl, FormLabel, FormErrorMessage, Input, Flex, Center, Heading, Button, Box,
} from '@chakra-ui/react';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    repeatedEmail: '',
    phone: ''
  });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const { cart, getTotal, clearCart } = useContext(Context);
  const navigate = useNavigate();
  
  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!user.name) {
      errors.name = 'Debe ingresar su nombre';
    } else if (user.name.length < 4) {
      errors.name = 'El nombre debe tener al menos 4 caracteres';
    }

    if (!user.email) {
      errors.email = 'Debe informar un email';
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = 'El email ingresado no es válido';
    }

    if (user.email !== user.repeatedEmail) {
      errors.repeatedEmail = 'Los correos electrónicos no coinciden';
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const getOrder = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const coleccion = collection(db, 'orders');
    try {
      const order = {
        buyer: user,
        cart: cart,
        total: getTotal(),
        fecha: Timestamp.now()
      };

      const orderRef = await addDoc(coleccion, order);

      Swal.fire({
        title: "Gracias por su compra",
        text: `El número de su pedido es: ${orderRef.id}`,
        icon: "success",
        confirmButtonText: "Ir al inicio",
      }).then(() => {
        clearCart();
        navigate('/');
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Center mt={10}>
      <Box
        p={5}
        boxShadow='lg'
        borderRadius='md'
        backgroundColor='white'
        maxWidth='500px'
        w='100%'
      >
        <Flex direction={'column'} align={'center'} justify={'center'}>
          <Heading mb={5}>Datos de facturación</Heading>
          <FormControl isInvalid={!!error.name}>
            <FormLabel>Nombre</FormLabel>
            <Input
              type='text'
              name='name'
              placeholder='Diego Bagur'
              onChange={updateUser}
            />
            {error.name && <FormErrorMessage>{error.name}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={!!error.email} mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type='email'
              name='email'
              placeholder='dlbagur@hotmail.com'
              onChange={updateUser}
            />
            {error.email && <FormErrorMessage>{error.email}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={!!error.repeatedEmail} mt={4}>
            <FormLabel>Reingrese su email</FormLabel>
            <Input
              type='email'
              name='repeatedEmail'
              placeholder='dlbagur@hotmail.com'
              onChange={updateUser}
            />
            {error.repeatedEmail && <FormErrorMessage>{error.repeatedEmail}</FormErrorMessage>}
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Teléfono</FormLabel>
            <Input
              type='text'
              name='phone'
              placeholder='11223344'
              onChange={updateUser}
            />
          </FormControl>
          <Button
            bg='#5E9FA4'
            mt={5}
            _hover={{ bg: '#693546', color: '#fff' }}
            onClick={getOrder}
            isLoading={loading}
            loadingText='Procesando'
            isDisabled={loading}
          >
            Finalizar compra
          </Button>
        </Flex>
      </Box>
    </Center>
  );
}

export default Checkout;