import { Text, View } from 'react-native';
import SignUpScreen from '../../screens/sign_up_screen';
import styles from './styles';

export default function SignUpPage(){

    return(
        <View>
            <Text style={styles.signUp}>Sign Up</Text>
            <SignUpScreen />
        </View>
    )
}