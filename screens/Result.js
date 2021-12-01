import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Result = (props) => {

    const navigation = useNavigation();
    const result = props.route.params.data.result
    
    return (
        <View style={styles.container}>
            <View style={styles.imageportion}>
                <Image
                style={styles.image}
                source={require('../static/homepic.png')}
                />
            </View>
            <View style={styles.questPortion}>
                <View style={styles.questSpace}>
                    <Text style={styles.questText}>
                        {result>=20?"Great Performance!":result>=10?"Satisfactory":"Poor Performance"}
                    </Text>
                    <Text style={styles.questText}>
                        {result}/25
                    </Text>
                </View>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Home")}} style={styles.buttonSpace}>
                    <Text style={styles.buttonSpaceText}>BACK TO HOME</Text>
                </TouchableOpacity>
            </View>

        </View>    

    )
}

export default Result

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    image:{
        height:354,
        width:324,
        resizeMode:"contain",
    },
    imageportion:{
        height:300,
        width:375,
        justifyContent:"center",
        alignItems:"center"  
    },
    questportion:{
        height:384,
        width:375,
        justifyContent:"center",
        alignItems:"center"
    },
    questSpace:{
        width:329,
        height:90,
        backgroundColor:"#0F0E0E",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 12,        
    },
    questText:{
        fontSize:18,
        fontWeight:"bold",
        color:"#E0EBEE",
    },
    bottom:{
        width:375,
        justifyContent:"center",
        alignItems:"center"
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
