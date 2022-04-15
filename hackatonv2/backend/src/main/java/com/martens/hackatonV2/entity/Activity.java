package com.martens.hackatonV2.entity;


import com.martens.hackatonV2.utils.enums.ActivityType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    private String name;
    private ActivityType activityType;
    private int capacity; // how many people can participate
    private int availableSpots; // how many people can still enroll
    private int duration; // !!!! should use a date format?
    private boolean isActive; // is the activity ongoing?

}
