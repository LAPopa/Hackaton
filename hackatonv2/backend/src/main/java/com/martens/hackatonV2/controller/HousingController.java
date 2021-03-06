package com.martens.hackatonV2.controller;


import com.martens.hackatonV2.entity.Housing;
import com.martens.hackatonV2.model.HousingRegistrationModel;
import com.martens.hackatonV2.service.HousingService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@AllArgsConstructor
public class HousingController {


    HousingService housingService;


    @PostMapping("/register/housing")
    public void registerNewHousing(@RequestBody HousingRegistrationModel housingRegistrationModel) {
        housingService.registerNewHousing(housingRegistrationModel);
    }


    @GetMapping("/housing/get-all")
    public Optional<List<Housing>> getAllHousing(){
        return housingService.getAllHousing();
    }

    @GetMapping("/housing/available")
    public Optional<List<Housing>> getAvailableHousing(){
        return housingService.getAvailableHousing();
    }

    @PostMapping("/housing/add-resident")
    public void addResidentToHouse(@RequestParam String house, @RequestParam String resident){
        housingService.addParticipantsToActivity(house, resident);
    }
}
