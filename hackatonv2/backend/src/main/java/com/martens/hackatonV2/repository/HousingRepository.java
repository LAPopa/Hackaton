package com.martens.hackatonV2.repository;

import com.martens.hackatonV2.entity.Housing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface HousingRepository extends JpaRepository<Housing, Long> {

    @Query("SELECT h from Housing h where h.name = :house_name")
    Housing findHousingByName(@Param("house_name") String houseName);

    @Query("SELECT h from Housing h where h.availability > 0")
    Housing findHousingByAvailability();


}
