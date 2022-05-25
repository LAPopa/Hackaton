package com.martens.hackatonV2.repository;

import com.martens.hackatonV2.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {


     Optional<List<Product>> findByName(String name);
     Optional<List<Product>> findByProductType(String productType);
}
