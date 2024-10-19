import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckBox from "react-native-bouncy-checkbox";


type formCheckBoxPropsType = {
    id: string,
    label: string,
    color: string,
    checkboxValue: boolean,
    updateCheckbox: (isChecked: boolean) => void,
};

function FormCheckBox(props: formCheckBoxPropsType): React.JSX.Element {
    return (
        <View style={styles.checkBoxView}>
            <BouncyCheckBox
                id={props.id}
                isChecked={props.checkboxValue}
                size={25}
                fillColor={props.color}
                unFillColor="#FFFFFF"
                iconStyle={{ borderColor: props.color }}
                innerIconStyle={{ borderWidth: 3 }}
                onPress={props.updateCheckbox}
            />
            <Text style={styles.label}>
                {props.label}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    checkBoxView: {
        flexDirection: 'row',
        padding: 10,
        marginLeft: 15,
        marginTop: 10,
    },

    label: {
        fontSize: 25,
        fontWeight: "700",
    }
});

export default FormCheckBox;