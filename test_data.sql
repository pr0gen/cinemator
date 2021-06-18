drop table if exists user_like;
drop table if exists bookmark;
drop table if exists user;

create table user
(
    id         int auto_increment
        primary key,
    username   varchar(255)                        not null,
    email      varchar(255)                        not null,
    password   varchar(255)                        not null,
    isActive   tinyint   default 0                 not null,
    updated_at timestamp default CURRENT_TIMESTAMP not null,
    created_at timestamp default CURRENT_TIMESTAMP not null
);

create table bookmark
(
    id      int auto_increment
        primary key,
    filmId  int,
    date    timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    ownerId int                                 null,
    constraint FK_BOOKMARK_USER
        foreign key (ownerId) references user (id)
);

create table user_like
(
    id      int auto_increment
        primary key,
    filmId  int,
    date    timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    ownerId int                                 null,
    constraint FK_LIKE_USER
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

INSERT INTO bookmark(filmId, ownerId)
VALUES (1771, 1);
INSERT INTO bookmark(filmId, ownerId)
VALUES (15239, 2);
INSERT INTO bookmark(filmId, ownerId)
VALUES (126889, 2);


INSERT INTO user_like(filmId, ownerId)
VALUES (1771, 1);
INSERT INTO user_like(filmId, ownerId)
VALUES (15239, 2);
INSERT INTO user_like(filmId, ownerId)
VALUES (126889, 2);
