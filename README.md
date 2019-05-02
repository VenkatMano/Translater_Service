#Introduction#

The DataAutomatter tool provides two main functionality

1) Message Resource table export and import operations
2) The internationalization json files export and import operations

##Functionality Explanation##

1) ###Message Resource table ###

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

	This tool is a maven spring boot command line project, so **import it as a existing maven project in the eclipse**.
	
	
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
	
