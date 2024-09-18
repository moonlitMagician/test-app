import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import styles from './styles.js'; // Ensure this imports correctly
import shakelist from './shakes.json';

export default function Index() {
  return (
    <ScrollView>
      <Text style={styles.textMainHeader}>List of shakes:</Text>
      {shakelist.map(shake => (
        <View style={styles.shakeDisplaybox} key={shake.name}>
          <Image
            source={{ uri: shake.image }} // For remote images
            style={styles.shakeImage}
          />
          <Text style={styles.textHeader}>{shake.name}</Text>
          <Text>Ingredients: {shake.ingredients}</Text>
          <Text>Calories: {shake.calories}</Text>
          <Text>Protein: {shake.protein}</Text>
          <Text>Carbs: {shake.carbs}</Text>
          <Text>Fats: {shake.fat}</Text>
          <button style={styles.button}>Add to cart</button>
        </View>
      ))}
    </ScrollView>
  );
}
