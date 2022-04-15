package com.martens.hackatonV2.model;


import lombok.*;

@AllArgsConstructor
@Getter @Setter
@ToString
public class ActivityRegistrationModel {

    private String activityName;
    private String activityType;
    private int capacity;
    private int duration;
}
