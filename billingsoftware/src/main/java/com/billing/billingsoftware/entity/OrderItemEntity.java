package com.billing.billingsoftware.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tbl_order_items")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderItemEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String itemId;
    private String name;
    private Double price;
    private Integer quantity;
}
