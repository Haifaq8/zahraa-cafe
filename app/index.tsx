import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// مصفوفة المشروبات
const drinks = [
  { id: '1', name: 'Latte' },
  { id: '2', name: 'Espresso' },
  { id: '3', name: 'Cappuccino' },
];

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>اختر مشروبك المفضل ☕</Text>

      {drinks.map((drink) => (
        <TouchableOpacity
          key={drink.id}
          style={styles.button}
          onPress={() => router.push(`/menuItem/${drink.id}`)}
        >
          <Text style={styles.buttonText}>{drink.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#654321',
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});