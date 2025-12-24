import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

// بيانات تجريبية للمشروبات
const drinks = [
  { id: '1', name: 'Latte', description: 'قهوة بالحليب ☕' },
  { id: '2', name: 'Espresso', description: 'قهوة مركزة بدون حليب 💥' },
  { id: '3', name: 'Cappuccino', description: 'قهوة برغوة الحليب ☁️' },
];

export default function MenuItemDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // نبحث عن المشروب حسب الـ id
  const drink = drinks.find((item) => item.id === id);

  if (!drink) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>🚫 لم يتم العثور على هذا المشروب</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{drink.name}</Text>
      <Text style={styles.text}>{drink.description}</Text>
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
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});