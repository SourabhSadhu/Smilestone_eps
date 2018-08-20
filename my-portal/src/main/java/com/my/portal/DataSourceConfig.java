package com.my.portal;

import java.util.HashMap;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.datasource.lookup.JndiDataSourceLookup;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
@EnableJpaRepositories(basePackages = "com.my.portal.repositories", entityManagerFactoryRef = "entityManager", transactionManagerRef = "transactionManager")
public class DataSourceConfig {

	/*
	 * @Value("${schema.name:''}") private String schema;
	 * 
	 * @Value("${transaction.schema.name:''}") private String txnSchema;
	 * 
	 * @Value("${datasource.transaction.driverClassName:''}") private String
	 * driverClassName;
	 */

	@Bean
	@Primary
	public LocalContainerEntityManagerFactoryBean entityManager() {
		LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
		em.setDataSource(dataSource());
		em.setPackagesToScan(new String[] { 
				"com.my.portal.entities" 
				});

		HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
		em.setJpaVendorAdapter(vendorAdapter);
		HashMap<String, Object> properties = new HashMap<String, Object>();
		properties.put("hibernate.dialect", "org.hibernate.dialect.PostgreSQL9Dialect");
		em.setJpaPropertyMap(properties);

		return em;
	}

	@Bean
	@Primary
	public PlatformTransactionManager transactionManager() {
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(entityManager().getObject());
		return transactionManager;
	}

	@Bean
	@Primary
	public DataSource dataSource() {
		final JndiDataSourceLookup dsLookup = new JndiDataSourceLookup();
		dsLookup.setResourceRef(true);
		DataSource dataSource = dsLookup.getDataSource("jdbc/eps");
		return dataSource;
	}

	@Bean
	@Primary
	public JdbcTemplate jdbcTemplate() {
		return new JdbcTemplate(dataSource());
	}

	@Bean
	@Primary
	public NamedParameterJdbcTemplate jdbcNamedTemplate() {
		return new NamedParameterJdbcTemplate(dataSource());
	}

	/**
	 * Changes for THEMIS Datasource
	 */

	/*
	@Bean
	@Qualifier("themisDatasource")
	public DataSource dataSourceThemis() {
		final JndiDataSourceLookup dsLookup = new JndiDataSourceLookup();
		dsLookup.setResourceRef(true);
		DataSource dataSource = dsLookup.getDataSource("jdbc/themis");
		return dataSource;
	}

	@Bean
	@Qualifier("themisEntityManager")
	public LocalContainerEntityManagerFactoryBean suiEntityManager() {
		LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
		em.setDataSource(dataSourceThemis());
		em.setPackagesToScan(new String[] { "com.indepay.cashlogistics.mobile.agent.entity" });

		HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
		em.setJpaVendorAdapter(vendorAdapter);
		HashMap<String, Object> properties = new HashMap<String, Object>();
		properties.put("hibernate.dialect", "org.hibernate.dialect.PostgreSQL9Dialect");
		em.setJpaPropertyMap(properties);

		return em;
	}

	@Bean
	@Qualifier("themisJpaTransactionManager")
	public PlatformTransactionManager themisJpaTransactionManager() {
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(suiEntityManager().getObject());
		return transactionManager;
	}

	@Bean
	@Qualifier("themisTransactionManager")
	public PlatformTransactionManager themisTransactionManager() {
		DataSourceTransactionManager transactionManager = new DataSourceTransactionManager();
		transactionManager.setDataSource(dataSourceThemis());
		return transactionManager;
	}

	@Bean

	@Qualifier("themisJdbcTemplate")
	public JdbcTemplate themisJdbcTemplate() {
		return new JdbcTemplate(dataSourceThemis());
	}

	@Bean
	@Qualifier("themisJdbcNamedTemplate")
	public NamedParameterJdbcTemplate themisJdbcNamedTemplate() {
		return new NamedParameterJdbcTemplate(dataSourceThemis());
	}*/
}
