use alit;
# 1.Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.

select * from client where length(FirstName) > 6;

# 2.Вибрати львівські відділення банку.

select * from client where City = 'Lviv';

# 3.Вибрати клієнтів з вищою освітою та посортувати по прізвищу.

select * from client where Education = 'high';

# 4.Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.

select * from application order by idApplication desc limit 5;

# 5.Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.

select * from client where LastName like '%ov' or LastName like '%ova';
select * from client where LastName like '%iv' or LastName like '%iva';

# 6.Вивести клієнтів банку, які обслуговуються київськими відділеннями.

select * from client where City = 'kyiv';

# 7.Знайти унікальні імена клієнтів.

select distinct FirstName from client;

# 8.Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.

select idClient, FirstName, LastName, Age, City, Passport, Sum from client c join application a on c.idClient = a.Client_idClient
where Sum > 5000 order by Sum desc;

# 9.Порахувати кількість клієнтів усіх відділень та лише львівських відділень.

select
    (select count(idClient) from client) as allClient,
    (select count(idClient) from client where Department_idDepartment = 2 or Department_idDepartment = 5) as clientLviv;

# select count(*) as sum_client_department, DepartmentCity
# from client c join department d on d.idDepartment = c.Department_idDepartment
# where DepartmentCity = 'lviv';

# 10.Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.

select FirstName, LastName, Sum, CreditState, Currency, City from client c join application a on c.idClient = a.Client_idClient
where CreditState = 'Not returned' and Sum > 6000 and Currency = 'Gryvnia';

select Client_idClient, max(Sum) from application group by Client_idClient;

# 11. Визначити кількість заявок на крдеит для кожного клієнта.

select * from client c
join application a on c.idClient = a.Client_idClient
join department d on d.idDepartment = c.Department_idDepartment;

select FirstName, LastName, count(Client_idClient) AS total_credits FROM application
JOIN client a ON application.Client_idClient = a.idClient
GROUP BY Client_idClient;

# 12. Визначити найбільший та найменший кредити.

# select
#     (select max(Sum) from application) as maxSumCreditClient,
#     (select min(Sum) from application) as minSumCreditClient;

select max(Sum) as MaxSumCredit, min(Sum) as MixSumCredit from application;

# 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.

select idClient, FirstName, LastName, count(Client_idClient) as TotalCredits from application
join client a on application.Client_idClient = a.idClient
where Education = 'high' group by Client_idClient;

# 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.

select idClient, FirstName, LastName, avg(Sum) as TotalSumCredit from application a
join client c on c.idClient = a.Client_idClient
where idClient group by Client_idClient order by TotalSumCredit DESC limit 1;

# 15. Вивести відділення, яке видало в кредити найбільше грошей

select idDepartment, DepartmentCity, sum(Sum) as TotalSum from department d
join client c on d.idDepartment = c.Department_idDepartment
join application a on c.idClient = a.Client_idClient
group by idDepartment, DepartmentCity order by TotalSum desc limit 1;

# 16. Вивести відділення, яке видало найбільший кредит.

select Client_idClient, max(Sum) as sum from application a
join client c on c.idClient = a.Client_idClient
join department d on d.idDepartment = c.Department_idDepartment
group by Client_idClient order by sum desc limit 1;

# 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.

update application
    join client c on c.idClient = application.Client_idClient
    set Sum = 6000, Currency = 'Gryvnia'
    where Education = 'high';

# 18. Усіх клієнтів київських відділень пересилити до Києва.

update client set City = 'Kyiv'
where Department_idDepartment = 1 or Department_idDepartment = 4;

select * from client;

# 19. Видалити усі кредити, які є повернені.

delete from application
where CreditState = 'Returned';

# 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.



# 21.Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
#
# 22.Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
#
# 23.Знайти максимальний неповернений кредит.
#
# 24.Знайти клієнта, сума кредиту якого найменша
#
# 25.Знайти кредити, сума яких більша за середнє значення усіх кредитів
#
# 26. Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів
#
# 27. Місто клієнта з найбільшою кількістю кредитів