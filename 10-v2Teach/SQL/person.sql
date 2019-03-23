CREATE TABLE person (
	person_id serial PRIMARY KEY,
	person_firstame varchar(50) NOT NULL,
	person_lastname varchar(50) NOT NULL,
	person_birthdate date NOT NULL	
);


CREATE TABLE parent_person_relationship (
	parent_id serial PRIMARY KEY,
	person_id int NOT NULL REFERENCES person(person_id),
	relationship_type varchar (30),
	parent_firstname varchar(50) NOT NULL,
	parent_lastname varchar(50) NOT NULL
);
