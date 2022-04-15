package com.martens.hackatonV2;

import com.martens.hackatonV2.entity.Activity;
import com.martens.hackatonV2.entity.Housing;
import com.martens.hackatonV2.model.ActivityRegistrationModel;
import com.martens.hackatonV2.repository.ActivityRepository;
import com.martens.hackatonV2.service.ActivityService;
import com.martens.hackatonV2.utils.enums.ActivityType;
import lombok.val;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class HackatonV2Application {

    private static final Logger log = LoggerFactory.getLogger(HackatonV2Application.class);

    public static void main(String[] args) {
        SpringApplication.run(HackatonV2Application.class, args);
    }

    @Bean
    public CommandLineRunner appTesting(ActivityRepository activityRepository) {

        return (args) -> {

//            ActivityRegistrationModel testActivityModel = new ActivityRegistrationModel("Spring sowing", "sowing", 20, 5);
//            Activity newActivity = new Activity("Spring sowing", "SOWING", 15, 5);
//            activityRepository.save(newActivity);
            log.info("Current persisted activities ");
            for (val activity : activityRepository.findAll()) {
                log.info(activity.toString());
            }



        };
    }

}
