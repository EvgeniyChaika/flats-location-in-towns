package com.control.life.home.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created on 14.02.17.
 */

@Controller
public class MainController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String indexPage() {
        return "index";

    }

    @RequestMapping(value = "/getMapsApiKey", method = RequestMethod.GET)
    @ResponseBody
    public String getMapsApiKey() {
        return "Hello!";
    }
}
