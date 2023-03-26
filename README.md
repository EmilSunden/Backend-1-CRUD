# Backend-1-CRUD

CREATE DATABASE TODO;

CREATE TABLE users (  
	id INT AUTO_INCREMENT PRIMARY KEY,  
    username VARCHAR(254) NOT NULL,  
    password VARCHAR(254) NOT NULL  
);

	
CREATE TABLE todos (  
	id INT AUTO_INCREMENT PRIMARY KEY,  
    description VARCHAR(254) NOT NULL,  
    user_id INT NOT NULL,  
    FOREIGN KEY(user_id) REFERENCES users (id)  
);

CREATE TABLE friends (  
	id INT AUTO_INCREMENT PRIMARY KEY,  
    friendname VARCHAR(254) NOT NULL,  
    user_id INT NOT NULL,  
    FOREIGN KEY(user_id) REFERENCES users(id)  
);