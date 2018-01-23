package com.nimk.system.account.service.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nimk.system.account.dao.AccountDAO;
import com.nimk.system.account.service.AccountService;

@Service
public class AccountServiceImpl implements AccountService{

	@Autowired
	private AccountDAO accountDAO;
	
	public String accountLogin(String user, String password) {
		
		boolean isLogged = accountDAO.logIn(user, password);
	
		return isLogged ? "Logged In" : "Not Logged";
	}
	
}
