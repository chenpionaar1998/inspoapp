CREATE TABLE users ( 
	email varchar(50) PRIMARY KEY,
	password varchar(100)  NOT NULL,
	fname varchar(50) NOT NULL,
	lname varchar(50) NOT NULL
);

CREATE TABLE travelPlans (
	planID varchar(50) PRIMARY KEY,
	title varchar(50) NOT NULL,
	planStartDate DATE NOT NULL,
	planEndDate DATE NOT NULL,
	timeCreated varchar(30) NOT NULL
);

CREATE TABLE authors (
	email varchar(50) NOT NULL,
	planID varchar(50) NOT NULL,
	PRIMARY KEY (email, planID)
);