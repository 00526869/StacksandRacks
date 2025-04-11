package com.example.stacksandracks.controller;

import com.example.stacksandracks.model.Workout;
import com.example.stacksandracks.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workouts")
public class WorkoutController {

    @Autowired
    private WorkoutRepository workoutRepository;

    @GetMapping
    public List<Workout> getAllWorkouts() {
        return workoutRepository.findAll();
    }

    @PostMapping
    public Workout addWorkout(@RequestBody Workout workout) {
        return workoutRepository.save(workout);
    }

    @DeleteMapping("/{id}")
    public void deleteWorkout(@PathVariable String id) {
        workoutRepository.deleteById(id);
    }
}


