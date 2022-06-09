use alit;
select * from cars;
select * from users;

select distinct name from users;
select min(year) from cars
union
select max(year) from cars; # Получаем сразу несколько результатов одним запросом

show databases;
create database users;
use users;

create table users
(
    id int primary key auto_increment,
    username varchar(100) not null,
    password varchar(255) not null,
    profile_id int not null unique,
    foreign key (profile_id) references profile(id)
);

create table profile
(
  id int primary key auto_increment,
  name varchar(100) not null,
  surname varchar(100) not null,
  age int not null default 18
);

insert into profile (name, surname, age)
values ('Alex', 'Yatsenko', 27);

insert into profile (name, surname, age)
values ('Ivanka', 'Zablotskaya', 25);

insert into users (username, password, profile_id)
values ('iguides', 'password', 1);

select * from users;
select * from profile;

select * from users join users.profile on profile.id = users.profile_id;
select users.id, users.username, profile.* from users join users.profile on profile.id = users.profile_id;

create table cities
(
    id int primary key auto_increment,
    city varchar(100) null
);

select * from cities;
create table usersCity
(
    id int primary key auto_increment,
    name varchar(100) not null,
    age int not null,
    city_id int null,
    foreign key (city_id) references cities(id)
);

insert into cities (city)
values ('Kiev');

insert into cities (city)
values ('Lviv');

insert into cities (city)
values ('Rivne');

insert into cities (city)
values ('Zhytomyr');

select * from cities;
select * from usersCity;

insert into usersCity (name, age, city_id)
values ('Alex', 28, 1);

insert into usersCity (name, age, city_id)
values ('Artem', 26, 1);

insert into usersCity (name, age, city_id)
values ('Oleg', 35, null);

insert into usersCity (name, age, city_id)
values ('Pavlo', 22, 3);

insert into usersCity (name, age, city_id)
values ('Lina', 18, null);

select * from usersCity u join users.cities c on c.id = u.city_id; # Inner join
select * from usersCity u left join users.cities c on c.id = u.city_id; # Left join
select * from usersCity u right join users.cities c on c.id = u.city_id; # Right join

# Use alit DB
use alit;

select * from client;
select * from application;
select * from department;

# select * from client c join application a on c.idClient = a.Client_idClient;

select *
    from client c
    join department d
        on d.idDepartment = c.Department_idDepartment
    join application a
        on c.idClient = a.Client_idClient
    where city='Kyiv';









