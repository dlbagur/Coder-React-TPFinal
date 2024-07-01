import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Menu, MenuButton,
    MenuList, MenuItem,
    MenuItemOption, MenuGroup,
    MenuOptionGroup, MenuDivider,
    Box, Button, Flex, Heading, 
    Image, Link as ChakraLink
  } from '@chakra-ui/react'
import { TiArrowDownOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';
import logo from "/imagenes/logo.png";

const NavBar = () => {
  return (
    <Flex 
        h={'10vh'} 
        w={'100%'} 
        justify={'space-between'} 
        align={'center'} 
        backgroundColor={'#c8b6ff'}
        >
        <ChakraLink as={Link} width={'30%'} to='/'>
          <Image w={'15%'} src={logo}/>
        </ChakraLink>

        <Menu>
            <MenuButton as={Button} rightIcon={<TiArrowDownOutline />}>
                Nuestros Vinos
            </MenuButton>
            <MenuList>
                <MenuItem>
                  <Link to='/categorias/Tintos'>Tintos</Link>
                </MenuItem>
                <MenuItem>
                  <Link to='/categorias/Blancos'>Blancos</Link>
                </MenuItem>
                <MenuItem>
                  <Link to='/categorias/Rosados'>Rosados</Link>
                </MenuItem>
                <MenuItem>
                  <Link to='/categorias/Espumantes'>Espumantes</Link>
                </MenuItem>
            </MenuList>
        </Menu>
        <CartWidget />
    </Flex>
  )
}

export default NavBar
