import { StyleSheet, Text, View } from 'react-native';

export default function MenuItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>☕ هذه صفحة مشروب واحد من المنيو</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 22,
  },
});