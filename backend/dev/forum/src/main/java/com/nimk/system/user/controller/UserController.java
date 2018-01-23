package com.nimk.system.user.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

	private final Logger logger = LoggerFactory.getLogger(UserController.class);
		
	@RequestMapping(value= "/login", method = RequestMethod.GET)
	public String getLogin(){
		
		logger.debug("");
		return "";
	}
	
	@RequestMapping(value= "/logout", method = RequestMethod.GET)
	public String getLogout(){
		
		logger.debug("");
		return "";
	}
	
	@RequestMapping(value= "/user/{userid}", method = RequestMethod.GET)
	public String getUser(@PathVariable String userId){
		
		logger.debug("");
		return "";
	}
	
	@RequestMapping(value= "/user", method = RequestMethod.POST)
	public void createUser(){
		
		logger.debug("");
	}
	
	@RequestMapping(value= "/user/{userId}", method = RequestMethod.DELETE)
	public void deleteUser(@PathVariable String userId){
		
		logger.debug("");
	}
	
	@RequestMapping(value= "/user/{userId}", method = RequestMethod.PUT)
	public void updateUser(@PathVariable String userId){
		
		logger.debug("");
	}
		
	
}
