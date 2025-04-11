import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import axios from 'axios';

const API_BASE_URL = 'http://192.168.0.178:8081/api/workouts';

export default function WorkoutScreen() {
  const [workouts, setWorkouts] = useState([]);
  const [workoutName, setWorkoutName] = useState('');
  const [description, setDescription] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [weight, setWeight] = useState('');
  const [duration, setDuration] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = () => {
    axios.get(API_BASE_URL)
      .then((res) => setWorkouts(res.data))
      .catch((err) => console.error('GET error:', err))
      .finally(() => setLoading(false));
  };

  const submitWorkout = () => {
    if (!workoutName.trim() || !reps.trim() || !sets.trim()) {
      Alert.alert('Please enter workout name, reps, and sets');
      return;
    }

    const newWorkout = {
      userId: 'demoUser',
      workoutName: workoutName.trim(),
      description: description.trim(),
      reps: parseInt(reps),
      sets: parseInt(sets),
      weight: weight ? parseInt(weight) : undefined,
      durationMinutes: duration ? parseInt(duration) : undefined
    };

    axios.post(API_BASE_URL, newWorkout)
      .then(() => {
        setWorkoutName('');
        setDescription('');
        setReps('');
        setSets('');
        setWeight('');
        setDuration('');
        fetchWorkouts();
      })
      .catch((err) => {
        console.error('POST error:', err);
        Alert.alert('Error adding workout');
      });
  };

  const deleteWorkout = (id) => {
    axios.delete(`${API_BASE_URL}/${id}`)
      .then(() => fetchWorkouts())
      .catch((err) => {
        console.error('DELETE error:', err);
        Alert.alert('Error deleting workout');
      });
  };

  const renderItem = ({ item }) => (
    <View style={styles.workoutItem}>
      <Text style={styles.workoutText}>
        🏋️ {item.workoutName} - {item.reps} reps × {item.sets} sets {item.weight ? `@ ${item.weight} lbs` : ''} {item.durationMinutes ? `for ${item.durationMinutes} mins` : ''}
      </Text>
      <TouchableOpacity onPress={() => deleteWorkout(item.id || item._id)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🏋️ Workout Logger</Text>

      <View style={styles.section}>
        <TextInput
          style={styles.input}
          placeholder="Workout Name"
          placeholderTextColor="#ccc"
          value={workoutName}
          onChangeText={setWorkoutName}
        />
        <TextInput
          style={styles.input}
          placeholder="Description (optional)"
          placeholderTextColor="#ccc"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Reps"
          placeholderTextColor="#ccc"
          value={reps}
          onChangeText={setReps}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Sets"
          placeholderTextColor="#ccc"
          value={sets}
          onChangeText={setSets}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Weight (optional)"
          placeholderTextColor="#ccc"
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Duration (optional) in minutes"
          placeholderTextColor="#ccc"
          value={duration}
          onChangeText={setDuration}
          keyboardType="numeric"
        />
        <Button title="Add Workout" onPress={submitWorkout} color="#007bff" />
      </View>

      <Text style={styles.subHeader}>📋 Previous Workouts</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : workouts.length === 0 ? (
        <Text style={styles.text}>No workouts recorded yet.</Text>
      ) : (
        <FlatList
          data={workouts}
          keyExtractor={(item, index) => item.id || item._id || index.toString()}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#1e1e1e', // dark grey
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff'
  },
  section: {
    marginVertical: 10
  },
  subHeader: {
    fontSize: 20,
    marginVertical: 15,
    fontWeight: 'bold',
    color: '#fff'
  },
  input: {
    borderWidth: 1,
    borderColor: '#555',
    marginBottom: 10,
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#333',
    color: '#fff'
  },
  workoutItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#444'
  },
  workoutText: {
    fontSize: 16,
    flex: 1,
    color: '#fff'
  },
  deleteButton: {
    fontSize: 16,
    color: 'red',
    marginLeft: 10
  },
  text: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center'
  },
});


