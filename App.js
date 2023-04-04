import { StyleSheet, View } from 'react-native';
import SignUpPage from './components/pages/SignUpPage/SignUpPage';

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
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'navy'
  },
});
