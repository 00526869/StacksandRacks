package com.example.stacksandracks.controller;

import com.example.stacksandracks.model.Workout;
import com.example.stacksandracks.service.WorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workouts")
@CrossOrigin(origins = "*")
public class WorkoutController {
    @Autowired
    private WorkoutService workoutService;

    @GetMapping
    public List<Workout> getAllWorkouts() {
        return workoutService.getAllWorkouts();
    }

    @GetMapping("/user/{userId}")
    public List<Workout> getWorkoutsByUser(@PathVariable String userId) {
        return workoutService.getWorkoutsByUserId(userId);
    }

    @PostMapping
    public Workout createWorkout(@RequestBody Workout workout) {
        return workoutService.createWorkout(workout);
    }

    @DeleteMapping("/{id}")
    public void deleteWorkout(@PathVariable String id) {
        workoutService.deleteWorkout(id);
    }
}
