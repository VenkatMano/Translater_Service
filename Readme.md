# Introduction #

The DataAutomatter tool provides ***two*** main functionality

1) **Message Resource table** export and import operations
2) **The internationalization json files** export and import operations

## Functionality Explanation ##

1) ### Message Resource table ###

		a) Export
		
	    This functionality is used to export the details from the Message Resource table to excel sheet in the following format
		
	    ----------------------------------------
	   |                                        |
	   |  KEY         en          fr            |
	   |  CAPE.VERDE  CAPE VERDE  CAPE-VERT     |
	    ----------------------------------------
		
    	b) Import
		
	    This functionality is used to save the edited data from the excel sheet to the Message Resource table again

2)  ### Internationalization json files ###

	    a) Export
		
		This functionality is used to export the json files to excel sheets in the following format
		
		Sheet Name - applicant-holder.json
		
	  	 ------------------------------------------------------------
	   	|                                                            | 
	  	| Key                           en       fr        zh-cn     |
	  	| applicantHolders~form~name    Name     Nom       Name	     | 
	   	| applicantHolders~form~remark  Remarks  Remarque  Remarks   | 
	   	 ------------------------------------------------------------
	    b) Import
	
	        This functionality is used to save the edited key value sheets into json files in the same path. Writes the new values if all the keys are present, else throws missing key error.
		
## Development Environment setup ##

	This tool is a maven spring boot command line project, so import it as a existing maven project in the eclipse.
	
	
	Operations supported
	
	1) exportdatabase
	2) importdatabase
	3) exportjson
	4) importjson
	
    Run the project
	
	1) In Eclipse, Run as maven build with the configuration, In the goals use the following
	
		spring-boot:run -Drun.arguments="exportdatabase"
		
	2) To run from cmd, use the following maven command
		
		mvn spring-boot:run -Drun.arguments="exportdatabase"

## Package Details ##

	This tool consists of the following packages
	
	1) com.jouve --- This is the starting point of the application
 	2) com.jouve.datareadwrite --- Contains the classes for read, write and helper
    3) com.jouve.entity --- Contains the entity for Message Resource Table
	4) com.jouve.exceptions --- Contains the custom exception classes
	5) com.jouve.keysandlanguage --- Exports the data in a formatted way
    6) com.jouve.model --- Contains the POJO classes used
	7) com.jouve.repositories --- Contains the Message Resource table repository

## Properties Configuration ##

The following are the jpa and hibernate related properties, **change the database url, username and password as per requirement**

	## Spring DATASOURCE (DataSourceAutoConfiguration & DataSourceProperties)    
	spring.datasource.url = jdbc:mysql://localhost:3306/venkat
	spring.datasource.username = root
	spring.datasource.password = root

	## Hibernate Properties
	# The SQL dialect makes Hibernate generate better SQL for the chosen database
	spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQLDialect
	spring.datasource.driver-class-name = org.mariadb.jdbc.Driver
    spring.jpa.properties.hibernate.current_session_context_class=org.springframework.orm.hibernate5.SpringSessionContext
	spring.jpa.properties.hibernate.globally_quoted_identifiers=true

The following **file path** will be used for Message Resource table export and import

	filePath = \\YourFilePath\\excelname.xlsx

The following properties are used for **json related export and import**

	##Folder Containing JSON Files
	jsonFolderPath = \\TheJsonFolderPath


	##File path for export and import
	jsonExcelFilePath = \\FilePathForImportExport\\excelname.xlsx

	
