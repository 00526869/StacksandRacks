package com.example.stacksandracks.repository;

import com.example.stacksandracks.model.Subscription;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SubscriptionRepository extends MongoRepository<Subscription, String> {
    List<Subscription> findByUserId(String userId);
}
