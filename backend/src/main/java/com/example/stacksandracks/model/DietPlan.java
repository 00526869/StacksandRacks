package com.example.stacksandracks.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "diet_plans")
public class DietPlan {
    @Id
    private String id;
    private String userId;
    private String mealName;
    private int calories;
    private int proteinGrams;
    private int carbsGrams;
    private int fatsGrams;
}
