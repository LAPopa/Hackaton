package com.martens.hackatonV2.controller;


import com.martens.hackatonV2.entity.Housing;
import com.martens.hackatonV2.model.HousingRegistrationModel;
import com.martens.hackatonV2.service.HousingService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@AllArgsConstructor
public class HousingController {


    HousingService housingService;


    @PostMapping("/register/housing")
    public void registerNewHousing(@RequestBody HousingRegistrationModel housingRegistrationModel) {
        housingService.registerNewHousing(housingRegistrationModel);
    }
}
