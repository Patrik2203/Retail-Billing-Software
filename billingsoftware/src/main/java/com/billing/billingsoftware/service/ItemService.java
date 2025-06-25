package com.billing.billingsoftware.service;

import com.billing.billingsoftware.io.ItemRequest;
import com.billing.billingsoftware.io.ItemResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ItemService {
    ItemResponse add(ItemRequest request, MultipartFile file);

    List<ItemResponse> fetchItem();

    void deleteItem(String itemId);
}
