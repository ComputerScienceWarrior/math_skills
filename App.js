import { StyleSheet, View } from 'react-native';
import SignUpPage from './components/pages/sign_up_page/sign_up_page';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 8,
    borderRadius: 5,
    borderColor: 'navy'
  },
});
