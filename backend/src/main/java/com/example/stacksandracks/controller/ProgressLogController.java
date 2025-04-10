package com.example.stacksandracks.controller;

import com.example.stacksandracks.model.ProgressLog;
import com.example.stacksandracks.service.ProgressLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/progress")
@CrossOrigin(origins = "*")
public class ProgressLogController {
    @Autowired
    private ProgressLogService progressLogService;

    @GetMapping
    public List<ProgressLog> getAllLogs() {
        return progressLogService.getAllLogs();
    }

    @GetMapping("/user/{userId}")
    public List<ProgressLog> getLogsByUser(@PathVariable String userId) {
        return progressLogService.getLogsByUserId(userId);
    }

    @PostMapping
    public ProgressLog createLog(@RequestBody ProgressLog log) {
        return progressLogService.createLog(log);
    }

    @DeleteMapping("/{id}")
    public void deleteLog(@PathVariable String id) {
        progressLogService.deleteLog(id);
    }
}
