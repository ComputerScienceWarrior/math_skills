import { StyleSheet, View } from 'react-native';
import SignUpPage from './components/pages/SignUpPage/SignUpPage';
import LoginPage from './components/pages/LoginPage/LoginPage';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignUpPage /> */}
      <LoginPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'navy'
  },
});
