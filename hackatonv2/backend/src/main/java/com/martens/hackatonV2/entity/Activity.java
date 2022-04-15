package com.martens.hackatonV2.entity;


import com.martens.hackatonV2.utils.enums.ActivityType;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter @Setter
@NoArgsConstructor
@ToString
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private ActivityType activityType;
    @Column(nullable = false)
    private int capacity; // how many people can participate
    private int availableSpots; // how many people can still enroll
    private int duration; // !!!! should use a date format?
    private boolean isActive; // is the activity ongoing?

    public Activity(String name, ActivityType activityType, int capacity, int duration) {
        this.name = name;
        this.activityType = activityType;
        this.capacity = capacity;
        this.availableSpots = capacity; // initially all spots are available
        this.duration = duration;
        this.isActive = true;

    }
}
