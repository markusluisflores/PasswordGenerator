import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Clipboard,
} from "react-native";
import Btn from "./components/Btn";
import Output from "./components/Output";
import InputBox from "./components/InputBox";
import FormCheckBox from "./components/FormCheckBox";
import { showErrorSnackbar, showInfoSnackBar, showSuccessSnackBar } from "./utility/utils";
import { generatePasswordString } from "./utility/passwordGenerator";




function Main(): React.JSX.Element {

    const [passLengthInput, setPassLengthInput] = useState("");
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [specialChar, setSpecialChar] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [password, setPassword] = useState("")

    function generatePassword() {
        let passLength = 0;

        passLength = parseInt(passLengthInput);

        if (isNaN(passLength) || passLength > 16 || passLength < 8) {
            showErrorSnackbar("Invalid length value.");
            setPassword("");
            return;
        }

        if (!upperCase && !lowerCase && !specialChar && !numbers) {
            showErrorSnackbar("Make a selection.");
            setPassword("");
            return;
        }

        const passReq = {
            length: passLength,
            includeUpper: upperCase,
            includeLower: lowerCase,
            includeSymbol: specialChar,
            includeNumber: numbers,
        }

        const passwordGenerated = generatePasswordString(passReq);
        setPassword(passwordGenerated);
    }

    function copyPassword(password: string) {
        Clipboard.setString(password)
        showSuccessSnackBar("Password Copied.");
    }

    function handleReset() {
        setPassLengthInput("");
        setUpperCase(false);
        setLowerCase(false);
        setSpecialChar(false);
        setNumbers(false);
        setPassword("");
        showInfoSnackBar("Cleared.");
    }

    return (
        <View>
            <Text style={styles.title}>Password Generator</Text>
            <InputBox
                inputValue={passLengthInput}
                changeInput={setPassLengthInput}
            />
            <FormCheckBox
                id="upperCaseLetter"
                label="Upper Case Letter"
                color="#87CEEB"
                checkboxValue={upperCase}
                updateCheckbox={setUpperCase}
            />
            <FormCheckBox
                id="lowerCaseLetter"
                label="Lower Case Letter"
                color="#CD7F32"
                checkboxValue={lowerCase}
                updateCheckbox={setLowerCase}
            />
            <FormCheckBox
                id="specialCharacter"
                label="Special Character"
                color="#FFAC1C"
                checkboxValue={specialChar}
                updateCheckbox={setSpecialChar}
            />
            <FormCheckBox
                id="numbers"
                label="Numbers"
                color="#800080"
                checkboxValue={numbers}
                updateCheckbox={setNumbers}
            />
            <Output
                generatedPassword={password}
                placeholder="Select Options..."
                handleCopy={copyPassword}
            />
            <Btn
                title="Generate Password"
                type={1}
                onPress={generatePassword}
            />
            <Btn
                title="Reset"
                type={2}
                onPress={handleReset}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '800',
        margin: 20,
        color: "#36454F"
    }
});


export default Main;