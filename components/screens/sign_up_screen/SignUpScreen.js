import { View, TextInput, Button } from 'react-native';

export default function SignUpScreen(){
    return(
        <View>
            <View style={{marginBottom: 16}}>
                <TextInput placeholder='First Name' />
                <TextInput placeholder='Create A Username' textContentType='username' />
                <TextInput placeholder='Create A Password' textContentType='password' />
                <TextInput placeholder='Confirm Password' secureTextEntry={true} />
            </View>
            <Button title='Sign Up' />
        </View>
    )
}