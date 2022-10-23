CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    title varchar(255),
    description varchar(255),
    status smallint
);