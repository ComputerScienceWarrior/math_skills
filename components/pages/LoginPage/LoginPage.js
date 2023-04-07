import { Text, View } from 'react-native';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import styles from './Styles';

export default function LoginPage(){

    return(
        <View>
            <Text style={styles.login}>Login</Text>
            <LoginScreen />
        </View>
    )
}