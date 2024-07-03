import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import nfcManager, {NfcEvents} from "react-native-nfc-manager";



function Game(props){
    const [start, setStart] = React.useState(null);
    const [duration, setDuration] = React.useState(0);

    React.useEffect(()=>{
        let count = 5;
        nfcManager.setEventListener(NfcEvents.DiscoverTag, () =>{
            count--;
            nfcManager.setAlertMessageIOS(`${count}...`);
            if(count <= 0 ){
                nfcManager.unregisterTagEvent().catch(()=>0);
                setDuration(new Date().getTime() - start.getTime());
            }
        });
        return()=>{
            nfcManager.setEventListener(NfcEvents.DiscoverTag, null);
        };
    },[start]);
    async function scantag(){
        await nfcManager.registerTagEvent();
        setStart(new Date());
        setDuration(0);
    }
    return(
        <View style={styles.wrapper}>
            <Text>NFC game</Text>
            {duration >0 && <Text>{duration}ms</Text>}
            <TouchableOpacity style={styles.btn} onPress={scantag}>
                <Text>START</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    btn:{
        margin: 15,
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#ccc'
    }
})

export default Game;