create table teampj_bank.transfer(
   trfno int primary key auto_increment,
   trfamount int,
   trftime datetime default now(),
   achostno varchar(14),
   acguestno varchar(14),
   foreign key( achostno ) references account( acno ),
   foreign key( acguestno ) references account( acno )
);