package com.martens.hackatonV2.service;


import com.martens.hackatonV2.entity.Activity;
import com.martens.hackatonV2.entity.Client;
import com.martens.hackatonV2.model.ActivityRegistrationModel;
import com.martens.hackatonV2.repository.ActivityRepository;
import com.martens.hackatonV2.utils.enums.ActivityType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;
import java.util.Optional;

@Service
@Getter
@AllArgsConstructor
public class ActivityService {

    private ActivityRepository activityRepository;


    public void registerNewActivity(ActivityRegistrationModel activityRegistrationModel) {
        Activity newActivity = new Activity(activityRegistrationModel.getActivityName(), activityRegistrationModel.getActivityType(), activityRegistrationModel.getCapacity(),
                activityRegistrationModel.getDuration());

        activityRepository.save(newActivity);
        for (Object act : activityRepository.findAll()) {
            System.out.println(act);
        }
    }

    public Optional<List<Activity>> getAllActivities() {
        return Optional.of(activityRepository.findAll());
    }

    public Optional<List<Activity>> getOngoingActivities() {
        return activityRepository.findActivityByIsActive();
    }

    public Optional<List<Activity>> getActivitiesByType(String activityType) {
        return activityRepository.findActivityByType(activityType);
    }

    public Optional<List<Activity>> getAvailableActivities() {
        return activityRepository.findActivityByAvailability();
    }

    public void addParticipantsToActivity(String activityName, String workerEmail) {
        Activity currentActivity = activityRepository.findActivityByName(activityName);
        currentActivity.getParticipantsEmails().add(workerEmail);
        activityRepository.save(currentActivity);
    }

}
