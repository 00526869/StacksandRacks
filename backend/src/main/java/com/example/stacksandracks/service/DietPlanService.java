package com.example.stacksandracks.service;

import com.example.stacksandracks.model.DietPlan;
import com.example.stacksandracks.repository.DietPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DietPlanService {
    @Autowired
    private DietPlanRepository dietPlanRepository;

    public List<DietPlan> getAllDietPlans() {
        return dietPlanRepository.findAll();
    }

    public Optional<DietPlan> getDietPlanById(String id) {
        return dietPlanRepository.findById(id);
    }

    public DietPlan saveDietPlan(DietPlan dietPlan) {
        return dietPlanRepository.save(dietPlan);
    }

    public void deleteDietPlan(String id) {
        dietPlanRepository.deleteById(id);
    }
}
