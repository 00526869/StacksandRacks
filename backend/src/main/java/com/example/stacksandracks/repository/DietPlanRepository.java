package com.example.stacksandracks.repository;

import com.example.stacksandracks.model.DietPlan;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DietPlanRepository extends MongoRepository<DietPlan, String> {
    List<DietPlan> findByUserId(String userId); // Custom query to find diet plans by user
}
