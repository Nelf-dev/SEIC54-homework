CREATE TABLE artists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT
);

--- seed data ---
INSERT INTO artists (name) VALUES ('Hiro Mashima');
INSERT INTO artists (name) VALUES ('Tsugumi Ohba');
INSERT INTO artists (name) VALUES ('Tomohiro');