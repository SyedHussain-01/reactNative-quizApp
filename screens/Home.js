import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>

            <View style={styles.appbar}>
                <View style={styles.pageNameSpace}>
                    <Text style={styles.pageName}>HOME</Text>
                </View>
            </View>

            <View style={styles.imageportion}>
                <View >
                    <Image
                    style={styles.image}
                    source={require('../static/homepic.png')}
                    />
                </View>
            </View>
            
            <View style={styles.bottom}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Questions")}} style={styles.buttonSpace}>
                    <Text style={styles.buttonSpaceText}>PLAY</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        height:"100%",
        flex:1,
        backgroundColor:"#E0EBEE"
      },
    appbar:{
        width:375,
        height:60,
        justifyContent:"center",
        alignItems:"center",
    },
    imageportion:{
        height:384,
        width:375,
        justifyContent:"center",
        alignItems:"center"
        
    },
    bottom:{
        width:375,
        justifyContent:"center",
        alignItems:"center"
    },      
    image:{
        height:354,
        width:324,
        resizeMode:"contain",
    },
    pageNameSpace:{
        backgroundColor:"#0F0E0E",
        width:185,
        height:48,
        justifyContent:"center",
        alignItems:"center"
    },
    pageName:{
        color:"#E0EBEE",
        fontWeight:"bold",
        fontSize:18
    },
    buttonSpace:{
        backgroundColor:"#0F0E0E",
        width:255,
        height:53,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:12
    },
    buttonSpaceText:{
        color:"#E0EBEE",
        fontWeight:"bold",
        fontSize:24
    }
    
})
