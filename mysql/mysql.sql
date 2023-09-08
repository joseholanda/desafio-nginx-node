CREATE DATABASE IF NOT EXISTS nodedb;
USE nodedb;
CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, nome varchar(50), primary key(id));