import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';

const dummyRecipes = {
  "build muscle": [
    "Steak with sweet potatoes and broccoli",
    "Tuna sandwich with whole grain bread",
    "Beef burrito bowl",
    "Chicken Alfredo with whole grain pasta",
    "Omelet with veggies and cottage cheese",
    "Greek yogurt with almonds and honey",
    "Salmon fillet with quinoa",
    "Grilled chicken tacos with avocado",
    "Protein smoothie (banana, peanut butter, whey)",
    "Ground turkey chili with beans"
  ],
  "lose weight": [
    "Grilled salmon with green beans",
    "Spinach and feta egg white omelet",
    "Chicken breast with cauliflower mash",
    "Zucchini noodle stir fry",
    "Avocado toast with egg",
    "Veggie quinoa salad",
    "Shrimp and veggie stir fry",
    "Turkey lettuce wraps",
    "Baked cod with broccoli",
    "Tomato and cucumber salad with chickpeas"
  ],
  "maintain": [
    "Grilled fish with brown rice",
    "Chicken Caesar salad",
    "Egg omelet with spinach and toast",
    "Tofu and vegetable stir fry",
    "Turkey sandwich with avocado",
    "Sweet potato and black bean tacos",
    "Cottage cheese with berries",
    "Whole grain pasta with marinara and chicken",
    "Roasted veggie bowl",
    "Beef and vegetable kebabs"
  ]
};

export default function MealsRecommendedScreen() {
  const [goal, setGoal] = useState('');
  const [recommendedMeal, setRecommendedMeal] = useState(null);
  const [loading, setLoading] = useState(false);

  const recommendMeal = () => {
    if (!goal.trim()) {
      alert('Please enter a fitness goal');
      return;
    }

    setLoading(true);
    const lowerGoal = goal.trim().toLowerCase();
    const recipes = dummyRecipes[lowerGoal] || [
      "Grilled Chicken Salad",
      "Veggie Stir Fry",
      "Avocado Toast with Eggs"
    ];
    const randomMeal = recipes[Math.floor(Math.random() * recipes.length)];
    setTimeout(() => {
      setRecommendedMeal(randomMeal);
      setLoading(false);
    }, 500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🥗 Meal Recommendations</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your fitness goal (e.g. build muscle, lose fat, maintain)"
        placeholderTextColor="#ccc"
        value={goal}
        onChangeText={setGoal}
      />

      <Button title="Get Meal Recommendation" onPress={recommendMeal} color="#28a745" />

      {loading ? (
        <ActivityIndicator size="large" color="#28a745" style={{ marginTop: 20 }} />
      ) : recommendedMeal && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>{recommendedMeal}</Text>
          <Button title="Show Another" onPress={recommendMeal} color="#007bff" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#1e1e1e'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff'
  },
  input: {
    borderWidth: 1,
    borderColor: '#555',
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
    backgroundColor: '#333',
    color: '#fff'
  },
  resultBox: {
    marginTop: 30,
    alignItems: 'center'
  },
  resultText: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff'
  }
});


