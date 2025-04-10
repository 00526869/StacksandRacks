package com.example.stacksandracks.controller;

import com.example.stacksandracks.model.Subscription;
import com.example.stacksandracks.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subscriptions")
@CrossOrigin(origins = "*")
public class SubscriptionController {
    @Autowired
    private SubscriptionService subscriptionService;

    @GetMapping
    public List<Subscription> getAllSubscriptions() {
        return subscriptionService.getAllSubscriptions();
    }

    @GetMapping("/user/{userId}")
    public List<Subscription> getSubscriptionsByUser(@PathVariable String userId) {
        return subscriptionService.getSubscriptionsByUserId(userId);
    }

    @PostMapping
    public Subscription createSubscription(@RequestBody Subscription sub) {
        return subscriptionService.createSubscription(sub);
    }

    @DeleteMapping("/{id}")
    public void deleteSubscription(@PathVariable String id) {
        subscriptionService.deleteSubscription(id);
    }
}
