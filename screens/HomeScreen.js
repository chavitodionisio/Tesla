import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import Navbar from '../components/Navbar'


function HomeScreen() {
    return (
        <View>
        
        
         <View>
          <Navbar />     

             <Image source={require('../assets/images/model-s.jpg')}
               
               style={{
                   width: '100',
                   height: '100vh',
                   position: 'absolute',
               }}
             />
         <View
         style={{
             justifyContent: 'center',
             alignItems: 'center',
             paddingTop: 30

         }}> 

         <Text
         style={{
             fontSize: 30,
             fontWeight: '800',
             color: 'grey'
         }}
         >Model S</Text>
        <Text style={{
            fontSize: 12
        }}
        >Order Online for Touchless Delivery</Text>
         </View>
         <View style={{
             marginTop: 350
         }}>
             <TouchableOpacity
             style={{
                 backgroundColor: '#393c41',
                 margin: 10,
                 borderRadius: 20,
                 height: 40,
             }}>
<Text>CUSTOM ORDER</Text>
             </TouchableOpacity>
             <TouchableOpacity 
             style={{
                 backgroundColor: 'black',
                 color: 'white'
             }}>
<Text>EXISTING INVENTORY</Text>
             </TouchableOpacity>
          </View>
        </View>
      </View>
    )
}

export default HomeScreen;
