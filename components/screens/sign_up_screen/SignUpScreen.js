import { View, TextInput, Pressable, Text } from 'react-native';
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
            <Pressable style={styles.signUpButton} title='Sign Up' >
                <Text style={styles.signUpText}>Sign Up</Text>
            </Pressable>
        </View>
    )
}