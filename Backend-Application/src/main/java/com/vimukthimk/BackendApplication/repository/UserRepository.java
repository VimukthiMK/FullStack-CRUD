package com.vimukthimk.BackendApplication.repository;

import com.vimukthimk.BackendApplication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
