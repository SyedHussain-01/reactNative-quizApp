import React,{ useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { questions } from '../variables/questions'

const Questions = ({navigation}) => {

    const [questNumber,setQuestNumber] = useState(0)
    const [result,setResult] = useState(0)
    const [disableValue,setDisableValue] = useState(false)

    const nextHandle = (key) => {
        setDisableValue(true)
        if(key===questions[questNumber].correctAnswer){
            setResult(result+5)
        }
        
    }

    const nextPageHandle = () => {
        setDisableValue(false)
        if(questNumber<=3){
            setQuestNumber(questNumber+1)
        }else{
            navigation.navigate("Result", { data: { result: result} })
        } 
    }

    return (
        <View style={styles.container}>

            <View style={styles.appbar}>
                <View style={styles.pageNameSpace}>
                    <Text style={styles.pageName}>QUIZ</Text>
                </View>
            </View>

            <View style={styles.questPortion}>
                <View style={styles.questSpace}>
                    <Text style={styles.questText}>
                        {questions[questNumber].question}
                    </Text>
                </View>
            </View>
            <View style={styles.optionPortion}>
                {questions[questNumber].options.map((key)=>{
                    return(
                    <TouchableOpacity disabled={disableValue} onPress={()=>nextHandle(key)} style={styles.optionSpace}>
                        <Text style={styles.optionText}>{key}</Text>
                    </TouchableOpacity>        
                    )
                })}
            </View>
            
            <View style={styles.bottom}>
               
                <TouchableOpacity onPress={nextPageHandle} style={styles.buttonSpace}>
                    <Text style={styles.buttonSpaceText}>NEXT</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate("Home")}} style={styles.buttonSpace}>
                    <Text style={styles.buttonSpaceText}>END</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Questions

const styles = StyleSheet.create({
    container: {
        justifyContent:"space-evenly",
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
    optionPortion:{
        height:280,
        width:280,
        justifyContent:"center",
        alignItems:"flex-start"  
    },
    optionSpace:{
        width:273,
        height:40,
        backgroundColor:"#0F0E0E",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:2
    },
    optionText:{
        fontSize:18,
        fontWeight:"bold",
        color:"#E0EBEE",
    },
    bottom:{
        width:375,
        justifyContent:"center",
        alignItems:"flex-end",
        flexDirection:"row",

    },      
    buttonSpace:{
        backgroundColor:"#0F0E0E",
        width:67,
        height:49,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:12,
        marginHorizontal:12
    },
    buttonSpaceText:{
        color:"#E0EBEE",
        fontWeight:"bold",
        fontSize:24
    }
})
