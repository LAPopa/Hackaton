package com.martens.hackatonV2.repository;

import com.martens.hackatonV2.entity.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ActivityRepository extends JpaRepository {

    @Query("SELECT a from Activity a where a.name = :activity_name")
    Activity findActivityByName(@Param("activity_name")String activityName);

    @Query("SELECT a from Activity a where a.activityType = :activity_type")
    Activity findActivityByType(@Param("activity_type")String activityType);

    @Query("SELECT a from Activity a where a.availableSpots = :activity_availability")
    Activity findActivityByAvailability(@Param("activity_availability")String activityAvailability);

    @Query("SELECT a from Activity a where a.isActive = true ")
    Activity findActivityByIsActive();
}
