package com.martens.hackatonV2.controller;


import com.martens.hackatonV2.entity.Activity;
import com.martens.hackatonV2.entity.Client;
import com.martens.hackatonV2.model.ActivityRegistrationModel;
import com.martens.hackatonV2.service.ActivityService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@AllArgsConstructor
public class ActivityController {

    ActivityService activityService;


    @PostMapping("/register/activity")
    public void registerNewActivity(@RequestBody ActivityRegistrationModel activityRegistrationModel) {
        activityService.registerNewActivity(activityRegistrationModel);
    }

    @GetMapping("/activity/get-all")
    public Optional<List<Activity>> getAllActivities() {
        return activityService.getAllActivities();
    }

    @GetMapping("/activity/ongoing")
    public Optional<List<Activity>> getOngoingActivities() {
        return activityService.getOngoingActivities();
    }

    @GetMapping("/activity/of-type")
    @ResponseBody
    public Optional<List<Activity>> getActivitiesByType(@RequestParam String activityType) {
        return activityService.getActivitiesByType(activityType);
    }

    @GetMapping("/activity/available")
    public Optional<List<Activity>> getAvailableActivities() {
        return activityService.getAvailableActivities();
    }

    @PostMapping("/activity/add-participant")
    public void addParticipantToActivity(@RequestParam String activityName, @RequestParam String workerEmail){
        activityService.addParticipantsToActivity(activityName, workerEmail);
    }

}
