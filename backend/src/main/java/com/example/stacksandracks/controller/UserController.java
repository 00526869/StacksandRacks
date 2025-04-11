package com.example.stacksandracks.controller;

import com.example.stacksandracks.model.User;
import com.example.stacksandracks.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    // Register a new user
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        Optional<User> existing = userService.findByEmail(user.getEmail());
        if (existing.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
        }
        user.setLastLogin(new Date());
        userService.saveUser(user);
        return ResponseEntity.ok("User registered successfully");
    }

    // Login with email and password
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User loginRequest) {
        Optional<User> userOpt = userService.findByEmail(loginRequest.getEmail());

        if (userOpt.isPresent() && userOpt.get().getPassword().equals(loginRequest.getPassword())) {
            User user = userOpt.get();
            user.setLastLogin(new Date());
            userService.saveUser(user);
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    // Get full profile by email
    @GetMapping("/profile")
    public ResponseEntity<?> getUserProfile(@RequestParam String email) {
        Optional<User> user = userService.findByEmail(email);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }
}

