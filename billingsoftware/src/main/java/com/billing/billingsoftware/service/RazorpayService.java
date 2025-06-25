package com.billing.billingsoftware.service;

import com.billing.billingsoftware.io.RazorpayOrderResponse;
import com.razorpay.RazorpayException;

public interface RazorpayService {
    RazorpayOrderResponse createOrder(Double amount, String currency) throws RazorpayException;
}
