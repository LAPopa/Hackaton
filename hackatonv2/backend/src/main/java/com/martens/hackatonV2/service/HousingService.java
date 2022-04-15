package com.martens.hackatonV2.service;


import com.martens.hackatonV2.entity.Housing;
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


    public void registerNewHousing(Housing newHousing) {
        housingRepository.save(newHousing);
    }
}
