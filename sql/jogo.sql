-- Active: 1757266980568@@127.0.0.1@5432@pixelbot
CREATE TABLE jogo (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  plataforma VARCHAR(50) NOT NULL,
  status VARCHAR(20) NOT NULL
    CHECK (status IN ('Nunca joguei', 'Jogando', 'Zerado'))
);