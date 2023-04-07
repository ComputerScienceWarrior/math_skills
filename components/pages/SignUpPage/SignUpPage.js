import { Text, View } from 'react-native';
import SignUpScreen from '../../screens/SignUpScreen/SignUpScreen';
import styles from './Styles';

export default function SignUpPage(){

    return(
        <View>
            <Text style={styles.signUp}>Sign Up</Text>
            <SignUpScreen />
        </View>
    )
}