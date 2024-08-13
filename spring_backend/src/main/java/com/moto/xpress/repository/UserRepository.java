package com.moto.xpress.repository;

import com.moto.xpress.model.User;
import com.moto.xpress.model.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Custom query methods if needed
    Optional<User> findByEmailId(String emailId);
}