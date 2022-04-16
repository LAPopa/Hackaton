package com.martens.hackatonV2.service;


import com.martens.hackatonV2.entity.Housing;
import com.martens.hackatonV2.model.HousingRegistrationModel;
import com.martens.hackatonV2.repository.HousingRepository;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Getter
@AllArgsConstructor
public class HousingService {

    HousingRepository housingRepository;


    public void registerNewHousing(HousingRegistrationModel housingRegistrationModel) {
        System.out.println(housingRegistrationModel);
        Housing newHousing = new Housing(housingRegistrationModel.getHousingName(), housingRegistrationModel.getHousingCapacity());
        housingRepository.save(newHousing);
    }

    public Optional<List<Housing>> getAllHousing() {
        return Optional.of(housingRepository.findAll());
    }

    public Optional<List<Housing>> getAvailableHousing(){
        return housingRepository.findHousingByAvailability();
    }

    public void addResident(String houseName, String residentName) {
        Housing currentHousing = housingRepository.findHousingByName(houseName);
        currentHousing.addResident(residentName);
        housingRepository.save(currentHousing);
    }
}
