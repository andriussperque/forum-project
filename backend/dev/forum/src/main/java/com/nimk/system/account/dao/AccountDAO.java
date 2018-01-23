package com.nimk.system.account.dao;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class AccountDAO {
	
	@Autowired
	@Qualifier("dataSource")
	private DataSource dataSource;
	
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}	

	public boolean logIn(String user, String password) {

		String query = "SELECT account_id FROM ACCOUNT WHERE ACCOUNT.USER_NAME = '"+ user +"' ";
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);

		Long id = jdbcTemplate.queryForLong(query);
		
		return id != null;
	}

}
