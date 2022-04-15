package com.martens.hackatonV2.service;


import com.martens.hackatonV2.entity.Housing;
import com.martens.hackatonV2.model.HousingRegistrationModel;
import com.martens.hackatonV2.repository.HousingRepository;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

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
}
