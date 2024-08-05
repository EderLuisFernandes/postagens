            
import { Text, View, ScrollView,Pressable  } from "react-native";
import {FontAwesome} from "@expo/vector-icons"
import Constants from "expo-constants";
import {Membro} from  '../components/Membros/MembrosApi'

const statusBarHeight = Constants.statusBarHeight;

export default function Membros({navigation}) {
  const entrar = () =>{
   
}
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-red-400"
      showsVerticalScrollIndicator={false}
    >
      <View
        className="w-full flex flex-row py-4 px-5  justify-between items-centerfont-bold bg-gray-300"
        style={{ marginTop: statusBarHeight   }}
      >
            <FontAwesome name="github" size={54} color="black"/>
            <Pressable
            onPress={()=> navigation.navigate("Home")}
             className=" w-25 h-16 px-3 rounded-2xl flex justify-center items-end bg-white">
           
               <Text>Postagens</Text>
            </Pressable>
       
      </View>
      
        <Text  className="font-bold text-center text-xl px-12 py-4 color-white">Membros</Text>
    
      <View>
      <Membro/>
      </View>
     
      
    </ScrollView>
  );
}
