package com.example.stacksandracks.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@Document(collection = "progress_logs")
public class ProgressLog {
    @Id
    private String id;
    private String userId;
    private double weight;
    private double bodyFatPercentage;
    private LocalDate logDate = LocalDate.now();
}
