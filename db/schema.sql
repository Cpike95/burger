DROP DATABASE burgers_db;

Create DATABASE burgers_db;

USE  burgers_db;

Create  table  burgers (

id INT auto_increment,

burger_name VARCHAR(50) NOT NULL,

devoured boolean DEFAULT false,

primary key(id)

)