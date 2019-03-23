CREATE TABLE person_table (
person_id     serial       PRIMARY KEY,
first_name    VARCHAR(50)  NOT NULL,
last_name     VARCHAR(50)  NOT NULL,
date_of_birth DATE
);

CREATE TABLE relationship_table (
person_id int REFERENCES person_table(person_id),
child         VARCHAR(50)
);


INSERT INTO person_table VALUES ('Steve', 'Rodgers', '1918-07-04');
INSERT INTO person_table VALUES ('Peter', 'Parker', '1968-07-7');
INSERT INTO relationship_table ('May', 'Parker', '2001-08-15');
INSERT INTO person_table VALUES ('Reed', 'Richards', 1966-01-16');
INSERT INTO relationship_table VALUES ('Franklin', 'Richards', '1992-05-16');
INSERT INTO relationship_table VALUES ('Valeria', 'Richards', '1994-04-22');~ (edited) 