

create database burgers_db;

use burgers_db;

create table burgers(
    id int auto_increment not null primary key,
    name varchar(30) null,
    devoured boolean default false
);

