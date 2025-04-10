package com.example.stacksandracks.service;

import com.example.stacksandracks.model.ProgressLog;
import com.example.stacksandracks.repository.ProgressLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProgressLogService {
    @Autowired
    private ProgressLogRepository progressLogRepository;

    public List<ProgressLog> getAllLogs() {
        return progressLogRepository.findAll();
    }

    public List<ProgressLog> getLogsByUserId(String userId) {
        return progressLogRepository.findByUserId(userId);
    }

    public ProgressLog createLog(ProgressLog log) {
        return progressLogRepository.save(log);
    }

    public void deleteLog(String id) {
        progressLogRepository.deleteById(id);
    }
}
