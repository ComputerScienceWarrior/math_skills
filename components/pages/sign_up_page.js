import { StyleSheet, Text, View } from 'react-native';
import SignUpScreen from '../screens/sign_up_screen';

export default function SignUpPage(){

    const styles = StyleSheet.create({
        signUp: {
            fontWeight: 'bold',
            fontSize: 24,
            textAlign: 'center',
            padding: 5,
            marginBottom: 25
        }
    })

    return(
        <View>
            <Text style={styles.signUp}>Sign Up</Text>
            <SignUpScreen />
        </View>
    )
}