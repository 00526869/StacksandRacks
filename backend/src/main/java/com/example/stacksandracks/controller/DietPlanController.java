package com.example.stacksandracks.controller;

import com.example.stacksandracks.model.DietPlan;
import com.example.stacksandracks.service.DietPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/dietplans")
public class DietPlanController {
    @Autowired
    private DietPlanService dietPlanService;

    @GetMapping
    public List<DietPlan> getAllDietPlans() {
        return dietPlanService.getAllDietPlans();
    }

    @GetMapping("/{id}")
    public Optional<DietPlan> getDietPlanById(@PathVariable String id) {
        return dietPlanService.getDietPlanById(id);
    }

    @PostMapping
    public DietPlan createDietPlan(@RequestBody DietPlan dietPlan) {
        return dietPlanService.saveDietPlan(dietPlan);
    }

    @DeleteMapping("/{id}")
    public void deleteDietPlan(@PathVariable String id) {
        dietPlanService.deleteDietPlan(id);
    }
}
