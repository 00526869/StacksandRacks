package com.example.stacksandracks.controller;

import java.util.Date;
import com.example.stacksandracks.model.User;
import com.example.stacksandracks.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        Optional<User> existing = userService.findByEmail(user.getEmail());
        if (existing.isPresent()) {
            return "User already exists";
        }
        userService.saveUser(user);
        return "User registered";
    }

    @PostMapping("/login")
public String login(@RequestBody User user) {
    Optional<User> existing = userService.findByEmail(user.getEmail());
    if (existing.isPresent() && existing.get().getPassword().equals(user.getPassword())) {
        existing.get().setLastLogin(new Date()); 
        userService.saveUser(existing.get());
        return "Login successful";
    }
    return "Invalid credentials";
}

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
