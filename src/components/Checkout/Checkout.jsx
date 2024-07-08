import React, { useContext, useState } from 'react'
import Context from '../../context/CartContext'
import {
    FormControl, FormLabel, FormErrorMessage, FormHelperText,
    Input, Flex, Center, Heading, Button,
  } from '@chakra-ui/react'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone: ''
    })
    const [ error, setError ] = useState({})
    const [ loading, setLoading ] = useState(false)

    const { cart, getTotal, clearCart } = useContext(Context)
    const navigate = useNavigate()
    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        const errors = {}
        if (!user.name) {
            errors.name = 'Debe ingresar su nombre' 
        } else if(user.name.length < 4) { errors.name = 'El nombre debe tener al menos 4 caracteres' }

        if (!user.email) { errors.email = 'Debe informar un email'
        } else if(!/\S+@\S+\.\S+/.test(user.email)) { errors.email = 'El email ingresado no es válido' }

        setError(errors)
        return Object.keys(errors).length === 0
    }

    const getOrder = async () => {
        if(!validateForm()){
            return
        }

        const coleccion = collection(db, 'orders')
        try {
            const order = {
                buyer: user,
                cart: cart,
                total: getTotal(),
                fecha: Timestamp.now()
            }

            const orderRef = await addDoc(coleccion, order)

            Swal.fire({
                title: "Gracias por tu compra",
                text: `El número de su pedido es: ${orderRef.id}`,
                icon: "success",
                confirmButtonText: "Ir al inicio",
              }).then(() => {
                 clearCart()
                 navigate('/')
              });
        } catch (error) {
            console.log(error)
        }
    }
    console.log(error)
  return (
    <Center mt={10}>
        <Flex direction={'column'} align={'center'} justify={'center'}>
            <Heading>Datos de facturación</Heading>
            <Flex w={'100%'} justify={'center'} align={'center'}>
                <FormControl>
                    <FormLabel>Nombre</FormLabel>
                    <Input 
                        type='text' 
                        name='name'
                        placeholder='Diego Bagur'
                        onChange={updateUser}
                    />
                    {error.name}
                    <FormErrorMessage>{error.name}</FormErrorMessage>
                    <FormLabel>Email</FormLabel>
                    <Input 
                        type='email' 
                        name='email'
                        placeholder='dlbagur@hotmail.com'
                        onChange={updateUser}
                    />
                    {error.email}
                    <FormLabel>Reingrese su email</FormLabel>
                    <Input 
                        type='email' 
                        name='repeatedEmail'
                        placeholder='dlbagur@hotmail.com'
                        onChange={updateUser}
                    />
                    <FormLabel>Teléfono</FormLabel>
                    <Input 
                        type='text' 
                        name='phone'
                        placeholder='11223344'
                        onChange={updateUser}
                        />
                </FormControl>
            </Flex>
            <Button mt={5} onClick={getOrder}>
                Finalizar compra
            </Button>
        </Flex>
    </Center>
  )
}

export default Checkout
