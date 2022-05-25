create table teampj_bank.securitycard(
   secno varchar(10) primary key,
   seccon varchar(1000),
   secpw varchar(6),
   acno varchar(14),
   foreign key( acno ) references account( acno )
);
