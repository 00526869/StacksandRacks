import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useUser } from '../contexts/UserContext';
import { LineChart } from 'react-native-chart-kit';

export default function PortfolioScreen() {
  const { user } = useUser();

  if (!user) {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.infoText}>No user data available.</Text>
      </SafeAreaView>
    );
  }

  const chartData = {
    labels: user.caloriesBurnedHistory?.map((entry) => {
      const date = new Date(entry.date);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    }) || [],
    datasets: [
      {
        data: user.caloriesBurnedHistory?.map((entry) => entry.calories) || [],
        strokeWidth: 2,
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>👤 {user.name}'s Portfolio</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>📧 Email: {user.email}</Text>
          <Text style={styles.infoText}>🪪 Subscription: {user.subscription}</Text>
          <Text style={styles.infoText}>
            🕒 Last Login:{' '}
            {user.lastLogin
              ? new Date(user.lastLogin).toLocaleString()
              : 'No login time'}
          </Text>
        </View>

        <Text style={styles.chartTitle}>🔥 Calories Burned</Text>
        {user.caloriesBurnedHistory && user.caloriesBurnedHistory.length > 0 ? (
          <LineChart
            data={chartData}
            width={Dimensions.get('window').width - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#1e1e1e',
              backgroundGradientFrom: '#1e1e1e',
              backgroundGradientTo: '#1e1e1e',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 188, 212, ${opacity})`,
              labelColor: () => '#fff',
              style: { borderRadius: 8 },
              propsForDots: {
                r: '5',
                strokeWidth: '2',
                stroke: '#00bcd4',
              },
            }}
            bezier
            style={{ marginVertical: 10, borderRadius: 8 }}
          />
        ) : (
          <Text style={styles.infoText}>No progress data to show.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  infoBox: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    borderColor: '#333',
    borderWidth: 1,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#fff',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#fff',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
});


