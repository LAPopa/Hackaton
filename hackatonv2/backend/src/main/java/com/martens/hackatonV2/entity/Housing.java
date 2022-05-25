package com.martens.hackatonV2.entity;


import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor
@ToString
public class Housing {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(nullable = false, unique = true)
    private String name;
    @Column(nullable = false)
    private int capacity; // how many people can live here
    private int availability; // how many free spots are here
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> residents;

    public Housing(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        this.availability = capacity; //all spots in the house are initially available
        this.residents = new ArrayList<>();
    }
    public void addResident(String residentName) {
        if (availability > 0) {
            residents.add(residentName);
            availability -= 1;
        } else {
            System.out.println("HOUSE IS FULL");
        }
    }
}
