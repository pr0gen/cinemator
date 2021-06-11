drop table if exists bookmark;
drop table if exists user;

create table user
(
    id         int auto_increment
        primary key,
    username  varchar(255)                        not null,
    email   varchar(255)                        not null,
    password   varchar(255)                        not null,
    isActive   tinyint   default 0                 not null,
    updated_at timestamp default CURRENT_TIMESTAMP not null,
    created_at timestamp default CURRENT_TIMESTAMP not null
);

create table bookmark
(
    id      int auto_increment
        primary key,
    name    varchar(255)                        not null,
    date    timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    ownerId int                                 null,
    constraint FK_4d81414dd3eb3e64dbeb271a2a7
        foreign key (ownerId) references user (id)
);

INSERT INTO user (username, email, password)
VALUES ('Tigran', 'Rolfie', 'password');
INSERT INTO user (username, email, password)
VALUES ('Quentin', 'Bragg', 'password');
INSERT INTO user (username, email, password)
VALUES ('Arthur', 'Arthur', 'password');
INSERT INTO user (username, email, password)
VALUES ('Clement', 'Hao Fire Spirit', 'password');

INSERT INTO bookmark(name, ownerId)
VALUES ('2001: A Space Odyssey', 1);
INSERT INTO bookmark(name, ownerId)
VALUES ('Star Wars: A New Hope', 1);
INSERT INTO bookmark(name, ownerId)
VALUES ('Pulp Fiction', 2);
INSERT INTO bookmark(name, ownerId)
VALUES ('Power Rangers', 3);

