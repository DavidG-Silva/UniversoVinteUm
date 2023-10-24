CREATE DATABASE universovinteum;

USE DATABASE universovinteum;

CREATE TABLE tipos_vagas 
( 
 id SERIAL PRIMARY KEY,  
 descricao VARCHAR(250) UNIQUE NOT NULL
); 

CREATE TABLE localidades_vagas 
( 
 id SERIAL PRIMARY KEY,  
 cidade VARCHAR(100) NOT NULL,  
 estado VARCHAR(2) NOT NULL  
); 

CREATE TABLE parceiros_vagas 
( 
 id SERIAL PRIMARY KEY,  
 nome VARCHAR(100) NOT NULL,  
 contato VARCHAR(100) NOT NULL  
); 

CREATE TABLE links_vagas 
( 
 id SERIAL PRIMARY KEY,  
 endereco VARCHAR(250) NOT NULL,  
 id_parceiros INT REFERENCES parceiros_vagas(id)
); 

CREATE TABLE vagas 
( 
 id SERIAL PRIMARY KEY,  
 titulo VARCHAR(100) NOT NULL,  
 descricao VARCHAR(250) NOT NULL,  
 id_tipos INT REFERENCES tipos_vagas (id) ,  
 id_localidades INT REFERENCES localidades_vagas (id),  
 id_links INT REFERENCES links_vagas(id),  
 id_parceiros INT REFERENCES parceiros_vagas(id)  
); 


