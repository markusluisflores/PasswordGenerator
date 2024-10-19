import React from "react";
import { StyleSheet, TextInput, View } from "react-native";


type inputBoxPropsType = {
    inputValue: string,
    changeInput: (input: string) => void,
}

function InputBox(props: inputBoxPropsType): React.JSX.Element {


    return (
        <View>
            <TextInput
                style={styles.inputArea}
                placeholder="Password Length (8-16)"
                value={props.inputValue}
                onChangeText={props.changeInput}
                maxLength={2}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputArea: {
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#FFF',
        width: '90%',
        height: 60,
        alignSelf: 'center',
        paddingStart: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
        fontSize: 25,
    }
});

export default InputBox;