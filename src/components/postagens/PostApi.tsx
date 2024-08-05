import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import axios from 'axios';


const API_Post = 'https://api-postagem-1.onrender.com/posts';


export const Post = () => {
  const [posts, setPosts] = useState([]);
  


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(API_Post);
        setPosts(response.data);
      } catch (error) {
        console.error('Erro ao buscar postagens:', error);
      }
    };

    fetchPosts();
  }, []);


 
  return (
    <FlatList 
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
      
        <View className='' style={styles.item}>

          <View className=' w-full flex flex-row items-center '>
          <Image 
          className='w-10 h-10 rounded-ful ' 
          source={require("../../../assets/images/training.png")} />
          <Text className='px-3 font-bold'>
           {item.author}</Text>
          </View>
          
          <Text className='text-center py-2 font-bold'  style={styles.title}>{item.title}</Text>
          <Text className='py-3'>{item.content}</Text>
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
  title:{
    fontSize:18
  }
});


