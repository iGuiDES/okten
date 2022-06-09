create database users_shop;
use users_shop;

create table users
(
    id int not null primary key auto_increment,
    name varchar(100) not null,
    age int not null,
    gender varchar(6) not null
);

show tables;

insert into users (name, age, gender)
values ('Max', 27, 'male');

insert into users (name, age, gender)
values ('Oleg', 32, 'male');

insert into users (name, age, gender)
values ('Petro', 43, 'male');

select * from users;

select * from users where gender='male';
select * from users where name like '%a%';
select * from users where name like '__x%';

select * from users where age > 20;
select * from users where age >= 20 and age <= 30;
select * from users where age > 20 or name = 'M%';

select * from users where age between 20 and 30 or name = 'M%_';

select * from users where age in(19, 20, 27, 32);
select * from users where length(name) >= 3;

select name, age from users where length(name) > 4;

select * from users order by id desc; #asc
select * from users order by name desc; #asc

select * from users limit 2;

select distinct name from users; # Уникальные имена

select min(age) from users
union
select max(age) from users;






