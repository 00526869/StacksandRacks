package com.example.stacksandracks.repository;

import com.example.stacksandracks.model.ProgressLog;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProgressLogRepository extends MongoRepository<ProgressLog, String> {
    List<ProgressLog> findByUserId(String userId);
}
