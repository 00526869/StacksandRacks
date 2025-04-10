package com.example.stacksandracks.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@Document(collection = "subscriptions")
public class Subscription {
    @Id
    private String id;
    private String userId;
    private String planName;
    private double price;
    private LocalDate startDate = LocalDate.now();
    private LocalDate endDate;
}
