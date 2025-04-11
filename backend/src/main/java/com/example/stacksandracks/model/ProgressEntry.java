package com.example.stacksandracks.model;

import java.util.Date;

public class ProgressEntry {
    private Date date;
    private int calories;

    public ProgressEntry() {}

    public ProgressEntry(Date date, int calories) {
        this.date = date;
        this.calories = calories;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getCalories() {
        return calories;
    }

    public void setCalories(int calories) {
        this.calories = calories;
    }
}
