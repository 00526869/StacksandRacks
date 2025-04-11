package com.example.stacksandracks.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Data
@Document(collection = "workouts")
public class Workout {
    @Id
    private String id;

    private String userId;
    private String workoutName;
    private int reps;
    private int sets;
    private Integer weight;           
    private Integer durationMinutes;  
    private LocalDateTime createdAt = LocalDateTime.now();
}
