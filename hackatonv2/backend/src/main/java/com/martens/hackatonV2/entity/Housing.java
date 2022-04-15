package com.martens.hackatonV2.entity;


import lombok.*;

import javax.persistence.*;

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

    public Housing(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        this.availability = capacity; //all spots in the house are initially available
    }
}
