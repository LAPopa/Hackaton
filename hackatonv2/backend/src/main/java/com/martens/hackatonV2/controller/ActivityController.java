package com.martens.hackatonV2.controller;


import com.martens.hackatonV2.model.ActivityRegistrationModel;
import com.martens.hackatonV2.service.ActivityService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@AllArgsConstructor
public class ActivityController {

    ActivityService activityService;


    @PostMapping("/register/activity")
    public void registerNewActivity(@RequestBody ActivityRegistrationModel activityRegistrationModel) {
        activityService.registerNewActivity(activityRegistrationModel);
    }
}
