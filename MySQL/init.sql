CREATE USER 'raptorvue'@'%' IDENTIFIED BY 'raptorvue';
CREATE DATABASE raptorvue DEFAULT CHARACTER SET utf8;
GRANT ALL ON raptorvue.* TO 'raptorvue'@'%';