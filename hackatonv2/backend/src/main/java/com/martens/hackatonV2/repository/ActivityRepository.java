package com.martens.hackatonV2.repository;

import com.martens.hackatonV2.entity.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {

    @Query("SELECT a from Activity a where a.name = :activity_name")
    Activity findActivityByName(@Param("activity_name")String activityName);

    @Query("SELECT a from Activity a where a.activityType = :activity_type")
    Optional<List<Activity>> findActivityByType(@Param("activity_type")String activityType);

    @Query("SELECT a from Activity a where a.availableSpots > 0")
    Optional<List<Activity>> findActivityByAvailability();

    @Query("SELECT a from Activity a where a.isActive = true ")
    Optional<List<Activity>> findActivityByIsActive();
}
