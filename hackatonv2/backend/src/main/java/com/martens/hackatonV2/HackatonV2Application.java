package com.martens.hackatonV2;

import com.martens.hackatonV2.entity.Activity;
import com.martens.hackatonV2.entity.Client;
import com.martens.hackatonV2.entity.Housing;
import com.martens.hackatonV2.model.ActivityRegistrationModel;
import com.martens.hackatonV2.repository.ActivityRepository;
import com.martens.hackatonV2.repository.ClientRepository;
import com.martens.hackatonV2.repository.HousingRepository;
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
    public CommandLineRunner appTesting(ActivityRepository activityRepository, ClientRepository clientRepository,
                                        HousingRepository housingRepository) {

        return (args) -> {

//            ActivityRegistrationModel testActivityModel = new ActivityRegistrationModel("Spring sowing", "sowing", 20, 5);
//            Activity newActivity = new Activity("Spring sowing", "SOWING", 15, 5);
//            activityRepository.save(newActivity);
//            Housing housing1 = housingRepository.findHousingByName("Summer House");
//            housing1.addResident("Mike");
//            housing1.addResident("Jules");
//            housing1.addResident("Claire");
//            housing1.addResident("Fiona");
//            housing1.addResident("Dan");
//            housing1.addResident("Jim");
//            housingRepository.save(housing1);
//            Housing housing2 = new Housing("Winter Dream", 10);
//            housing2.addResident("Marie");
//            housing2.addResident("Marta");
//            housing2.addResident("Jones");
//            housingRepository.save(housing2);
//            Housing housing3 = new Housing("Spring Bliss", 13);
//            housing3.addResident("Michael");
//            housing3.addResident("Roxanne");
//            housingRepository.save(housing3);

            log.info("Current persisted activities ");
            for (val activity : activityRepository.findAll()) {
                log.info(activity.toString());
            }


        };
    }

}
