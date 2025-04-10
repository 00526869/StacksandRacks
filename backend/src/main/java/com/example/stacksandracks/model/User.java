package com.example.stacksandracks.model;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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

    // Getters & Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public static class ProgressEntry {
        private Date date;
        private int calories;

        public ProgressEntry() {}

        public ProgressEntry(Date date, int calories) {
            this.date = date;
            this.calories = calories;
        }       

        public Date getDate() { return date; }
        public void setDate(Date date) { this.date = date; }

        public int getCalories() { return calories; }
        public void setCalories(int calories) { this.calories = calories; }
    }
    public Date getLastLogin() {
        return lastLogin;
    }
    
    public void setLastLogin(Date lastLogin) {
        this.lastLogin = lastLogin;
    } 
}
