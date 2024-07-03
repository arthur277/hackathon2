import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import nfcManager from "react-native-nfc-manager";
import Game from './Game';
import AndroidPrompt from "./AndroidPromt";

function App(props){
    const [hasNfc,setHasNfc] = React.useState(null);

    React.useEffect(()=>{
        async function checkNfc(){
            const supported = await nfcManager.isSupported();
            if(supported){
                await nfcManager.start();
            }
            setHasNfc(supported);
        }
        checkNfc();
    }, []);
    if(hasNfc === null){
        return null;
    }else if(!hasNfc){
        return(
            <View>
                <Text>You device doesn't support nfc</Text>
                <AndroidPrompt />
            </View>
        )
    }
    return <Game />
}
export default App;