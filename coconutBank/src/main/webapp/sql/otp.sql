create table teampj_bank.otp(
   otpno varchar(6) primary key,
   otppw varchar(6),
   acno varchar(14) ,
   foreign key( acno ) references account( acno )
);
