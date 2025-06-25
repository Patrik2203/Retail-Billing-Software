package com.billing.billingsoftware.controller;

import com.billing.billingsoftware.io.DashBoardResponse;
import com.billing.billingsoftware.io.OrderResponse;
import com.billing.billingsoftware.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/dashboard")
@RequiredArgsConstructor
public class DashBoardController {

    private final OrderService orderService;

    @GetMapping
    public DashBoardResponse getDashboardData() {
        LocalDate today = LocalDate.now();
        Double todaySale = orderService.sumSalesByDate(today);
        Long todayOrderCount = orderService.countByOrderDate(today);
        List<OrderResponse> recentOrders = orderService.findRecentOrders();

        return new DashBoardResponse(
                todaySale != null ? todaySale : 0.0,
                todayOrderCount != null ? todayOrderCount : 0,
                recentOrders
        );

    }

}
