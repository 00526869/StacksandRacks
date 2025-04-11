package com.example.stacksandracks.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document(collection = "users")
public class User {
    @Id
    private String id;

    private String name;
    private String subscription;
    private Date lastLogin;
    private List<ProgressEntry> caloriesBurnedHistory = new ArrayList<>();
    private String email;
    private String password;

    // Getters and Setters

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSubscription() { return subscription; }
    public void setSubscription(String subscription) { this.subscription = subscription; }

    public Date getLastLogin() { return lastLogin; }
    public void setLastLogin(Date lastLogin) { this.lastLogin = lastLogin; }

    public List<ProgressEntry> getCaloriesBurnedHistory() { return caloriesBurnedHistory; }
    public void setCaloriesBurnedHistory(List<ProgressEntry> caloriesBurnedHistory) { this.caloriesBurnedHistory = caloriesBurnedHistory; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}

