package com.billing.billingsoftware.service;

import com.billing.billingsoftware.io.UserRequest;
import com.billing.billingsoftware.io.UserResponse;

import java.util.List;

public interface UserService {

    UserResponse createdUser(UserRequest request);

    String getUserRole(String email);

    List<UserResponse> readUser();

    void deleteUser(String id);
}
