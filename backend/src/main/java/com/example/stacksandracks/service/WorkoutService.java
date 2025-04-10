package com.example.stacksandracks.service;

import com.example.stacksandracks.model.Workout;
import com.example.stacksandracks.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkoutService {
    @Autowired
    private WorkoutRepository workoutRepository;

    public List<Workout> getAllWorkouts() {
        return workoutRepository.findAll();
    }

    public List<Workout> getWorkoutsByUserId(String userId) {
        return workoutRepository.findByUserId(userId);
    }

    public Workout createWorkout(Workout workout) {
        return workoutRepository.save(workout);
    }

    public void deleteWorkout(String id) {
        workoutRepository.deleteById(id);
    }
}
