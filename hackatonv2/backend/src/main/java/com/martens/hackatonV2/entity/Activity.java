package com.martens.hackatonV2.entity;


import com.martens.hackatonV2.utils.enums.ActivityType;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor
@ToString
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(nullable = false, unique = true)
    private String name;
    @Column(nullable = false)
    private String activityType;
    @Column(nullable = false)
    private int capacity; // how many people can participate
    private int availableSpots; // how many people can still enroll
    private int duration; // !!!! should use a date format?
    private boolean isActive; // is the activity ongoing?
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> participantsEmails;

    public Activity(String name, String activityType, int capacity, int duration) {
        this.name = name;
        this.activityType = activityType;
        this.capacity = capacity;
        this.availableSpots = capacity; // initially all spots are available
        this.duration = duration;
        this.isActive = true;
        this.participantsEmails = new ArrayList<>();

    }


}
