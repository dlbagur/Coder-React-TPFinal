import { Flex, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import { db } from '../../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Swal from 'sweetalert2'; // Asegúrate de tener importado SweetAlert

const ItemListContainer = ({ texto }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('Tienda de Vinos');
  const [quantities, setQuantities] = useState({}); // Inicializa quantities como un objeto vacío

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const coleccion = collection(db, 'productos');
      const queryRef = !categoryId
        ? coleccion
        : query(coleccion, where('variedad', '==', categoryId));

      const response = await getDocs(queryRef);

      const productos = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id,
        };
        return newItem;
      });
      setProducts(productos);
      setLoading(false);
    };

    getData();

    // Actualiza el título basado en categoryId
    if (categoryId) {
      setTitle(`Selección de ${categoryId}`);
    } else {
      setTitle('Tienda de Vinos');
    }
  }, [categoryId]);

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1; // Default to 1 if no quantity selected
    if (quantity > product.stock) {
      Swal.fire({
        title: 'Stock insuficiente',
        text: `No hay suficiente stock para ${product.nombre}. Disponible: ${product.stock}`,
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return;
    }
    // Aquí agregarías el producto al carrito
  };

  return (
    <Flex direction={'column'} justify={'center'} align={'center'}>
      <Heading color={'#FCD7B6'} mt={10}>
        {title}
      </Heading>
      {loading ? (
        <Flex justify={'center'} align={'center'} h={'50vh'}>
          <ScaleLoader color="#970805" />
        </Flex>
      ) : (
        <ItemList 
          products={products} 
          texto={texto} 
          onAddToCart={handleAddToCart} // Pasa la función a ItemList
        />
      )}
    </Flex>
  );
};

export default ItemListContainer;