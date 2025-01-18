package com.example.apex.portfolio_site.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class HomeController {

    private String name;

    // constructor
    public HomeController() {
        this.name = "Hello World";
    }

    @GetMapping("/")
    public String getMethodName(@RequestParam String param) {
        return new String(name + " " + param);
    }

}
