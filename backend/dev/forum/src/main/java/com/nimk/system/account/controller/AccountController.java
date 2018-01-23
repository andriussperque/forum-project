package com.nimk.system.account.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nimk.system.account.service.AccountService;

@RestController
@RequestMapping("/login")
public class AccountController {

	private final Logger logger = LoggerFactory.getLogger(AccountController.class);
	
	@Autowired
	private AccountService accountService;
	
	@RequestMapping(value= "/{name}", method = RequestMethod.GET)
	public String getLogin(@PathVariable String name){
		
		logger.debug("Log-in : username" + name);
		
		return accountService.accountLogin(name, "sperque");
	}
	
	
	
	
	
	
	
	
}
