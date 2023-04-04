import { Text, View } from 'react-native';
import SignUpScreen from '../../screens/sign_up_screen/SignUpScreen';
import styles from './Styles';

export default function SignUpPage(){

    return(
        <View>
            <Text style={styles.signUp}>Sign Up</Text>
            <SignUpScreen />
        </View>
    )
}