import React from "react";
import  {View, Text, Modal} from 'react-native'

function AndroidPrompt(props){
    return(
        <Modal visible={true} transparent={true}>
            <View style={{
                position:'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: 0,
                backgroundColor: 'pink'
            }}>
                <Text>Hello nfc</Text>
            </View>
        </Modal>
    )
}
export default AndroidPrompt;