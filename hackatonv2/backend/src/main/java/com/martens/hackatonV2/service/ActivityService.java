package com.martens.hackatonV2.service;


import com.martens.hackatonV2.entity.Activity;
import com.martens.hackatonV2.model.ActivityRegistrationModel;
import com.martens.hackatonV2.repository.ActivityRepository;
import com.martens.hackatonV2.utils.enums.ActivityType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Locale;

@Service
@Getter
@Component
@AllArgsConstructor
public class ActivityService {

    private ActivityRepository activityRepository;


    public void registerNewActivity(ActivityRegistrationModel activityRegistrationModel){
        ActivityType activityType;

        switch (activityRegistrationModel.getActivityType().toUpperCase(Locale.ROOT)) {
            case "SOWING":
                activityType = ActivityType.SOWING;
                break;

            case "HARVESTING":
                activityType = ActivityType.HARVESTING;
                break;
            case "MANUFACTURE":
                activityType = ActivityType.MANUFACTURE;
                break;
            case "MAINTENANCE":
                activityType = ActivityType.MAINTENANCE;
                break;
            default:

                System.out.println("INVALID ACTIVITY TYPE");
                activityType = null;
        }

        Activity newActivity = new Activity(activityRegistrationModel.getActivityName(),activityType,activityRegistrationModel.getCapacity(),
                activityRegistrationModel.getDuration());

        activityRepository.save(newActivity);
        for (Object act : activityRepository.findAll()){
            System.out.println(act);
        }


    }


}
