import { Text, View } from 'react-native';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import styles from './Styles';

export default function LoginPage(){

    return(
        <View>
            <Text>Login</Text>
            <LoginScreen />
        </View>
    )
}