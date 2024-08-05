import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const API_Membro = 'https://api-postagem-1.onrender.com/users';


export const Membro= () => {
  const [users, setUsers] = useState([]);
  


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(API_Membro);
        setUsers(response.data);
      } catch (error) {
        console.error('Erro ao buscar postagens:', error);
      }
    };

    fetchPosts();
  }, []);


 
  return (
    <FlatList 
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className='' style={styles.item}>
          <Text className='font-bold'>Nome:</Text>
          <Text className='px-3 py-2 '>{item.name}</Text>
          <Text className='font-bold'>E-mail:</Text>
          <Text className='py-2 px-3'>{item.email}</Text>
        </View>
      )}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
 
});


