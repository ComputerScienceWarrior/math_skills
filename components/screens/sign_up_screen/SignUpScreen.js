import { View, TextInput, Button } from 'react-native';
import styles from './SignUpScreen/Styles';

export default function SignUpScreen(){
    return(
        <View>
            <View>
                <View style={styles.inputs} >
                    <TextInput placeholder='First Name' />
                </View>
                <View style={styles.inputs} >
                    <TextInput placeholder='Create A Username' textContentType='username' />
                </View>
                <View style={styles.inputs} >
                    <TextInput placeholder='Create A Password' textContentType='password' />
                </View>
                <View style={styles.inputs} >
                    <TextInput placeholder='Confirm Password' secureTextEntry={true} />
                </View>
            </View>
            <Button title='Sign Up' />
        </View>
    )
}