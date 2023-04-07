import { View, TextInput, Pressable, Text } from 'react-native';
import styles from './Styles';

export default function Login(){
    return(
        <View>
            <View>
                <View style={styles.inputs} >
                    <TextInput placeholder='Username' textContentType='username' />
                </View>
                <View style={styles.inputs} >
                    <TextInput placeholder='Password' textContentType='password' />
                </View>
            </View>
            <Pressable style={styles.loginButton} >
                <Text style={styles.loginText}>Login</Text>
            </Pressable>
        </View>
    )
}