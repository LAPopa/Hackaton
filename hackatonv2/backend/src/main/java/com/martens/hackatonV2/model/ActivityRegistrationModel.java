package com.martens.hackatonV2.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class ActivityRegistrationModel {

    private String activityName;
    private String activityType;
    private int capacity;
    private int duration;
}
