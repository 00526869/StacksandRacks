package com.example.stacksandracks.service;

import com.example.stacksandracks.model.Subscription;
import com.example.stacksandracks.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubscriptionService {
    @Autowired
    private SubscriptionRepository subscriptionRepository;

    public List<Subscription> getAllSubscriptions() {
        return subscriptionRepository.findAll();
    }

    public List<Subscription> getSubscriptionsByUserId(String userId) {
        return subscriptionRepository.findByUserId(userId);
    }

    public Subscription createSubscription(Subscription sub) {
        return subscriptionRepository.save(sub);
    }

    public void deleteSubscription(String id) {
        subscriptionRepository.deleteById(id);
    }
}
