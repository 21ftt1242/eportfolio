# 21FTT1242 Logbook

Muhammad Ghazali @ Mu'az Bin Haji Haripin (21FTT1242)

DISS07

WD5208 SYSTEM OPERATIONS

Diploma Level 5 in Information Systems

---
# AS2 Assignment 2: Web Application Server
---

## Table of contents

  * [1. VPS Setup](#1-vps-setup)
    + [1.1 Creating SSH Key using terminal](#11-creating-ssh-key-using-terminal)
    + [1.2 Creating a Digital Ocean Droplet](#12-creating-a-digital-ocean-droplet)
    + [1.3 Domain Setup](#13-domain-setup)
  * [2. Root Login using terminal](#2-root-login-using-terminal)
    + [2.1 Make new non-root user](#21-make-new-non-root-user)
    + [2.2 Grant Administrative Privileges (Sudo) for non-root user](#22-grant-administrative-privileges--sudo--for-non-root-user)
    + [2.3 Enabling external access for non-root user](#23-enabling-external-access-for-non-root-user)
    + [2.4 Setting up firewall](#24-setting-up-firewall)
    + [2.5 SSH Server Configuration](#25-ssh-server-configuration)
    + [2.6 Changing Timezone](#26-changing-timezone)
    + [2.7 VPS Welcome Message](#27-vps-welcome-message)
  * [3. Create config file for shortcut](#3-create-config-file-for-shortcut)
  * [4. Installing LEMP Stack](#4-installing-lemp-stack)
    + [4.1 Install and enable Nginx Full](#41-install-and-enable-nginx-full)
    + [4.2 Install MySQL/MySQL Hardening](#42-install-mysql-mysql-hardening)
    + [4.3 Install required PHP modules](#43-install-required-php-modules)
  * [5. Install Composer](#5-install-composer)
    + [5.1 Install PHP and Additional Dependencies](#51-install-php-and-additional-dependencies)
    + [5.2 Download and Install Composer](#52-download-and-install-composer)
  * [6. Create a database for the Laravel application](#6-create-a-database-for-the-laravel-application)
  * [7. Creating Laravel Application](#7-creating-laravel-application)
    + [7.1 Configure Laravel](#71-configure-laravel)
    + [7.2 Setting up Nginx](#72-setting-up-nginx)
  * [8. Enabling Email Verification](#8-enabling-email-verification)
    + [8.1 Install Node JS](#81-install-node-js)
    + [8.2 Install Breeze Laravel Authentication Package](#82-install-breeze-laravel-authentication-package)
    + [8.3 Database migration and checking](#83-database-migration-and-checking)
    + [8.4 Changing the env file](#84-changing-the-env-file)
  * [9. Changing the default laravel logo to PB logo](#9-changing-the-default-laravel-logo-to-pb-logo)
    + [9.1 Copy picture from local to VPS](#91-copy-picture-from-local-to-vps)
    + [9.2 Changing the default laravel logo](#92-changing-the-default-laravel-logo)
    + [9.3 Change the logo in the email verifcation link message](#93-change-the-logo-in-the-email-verifcation-link-message)
  * [10. Security hardening using Fail2Ban](#10-security-hardening-using-fail2ban)
    + [10.1 Installing Fail2Ban](#101-installing-fail2ban)
    + [10.2 Modifying the config file](#102-modifying-the-config-file)
    + [10.3 Enabling Fail2Ban](#103-enabling-fail2ban)
  * [11. Serve website over HTTPS](#11-serve-website-over-https)
    + [11.1 Installing Certbot](#111-installing-certbot)
    + [11.2 Obtain SSL Certificate](#112-obtain-ssl-certificate)

---
`Log entry date: 24th September 2023`
## 1. VPS Setup
### 1.1 Creating SSH Key using terminal 

- Open terminal and create a .ssh folder
```sh
mkdir .ssh
```
- Go into the .ssh folder
```sh
cd .ssh
```
- Create an ed25519 encrytped key using student email as the comment:
```sh
> ssh-keygen -t ed25519 -C "21ftt1242@student.pb.edu.bn"
> File name: sop_as2
> Passphrase (Leave empty):
```
This will genereate two keys, one public and one private.
- Open the sop_as2.pub key to copy the public SSH key
```
> cat sop_as2.pub
```

### 1.2 Creating a Digital Ocean Droplet
1. Login to DigitalOcean using Github
2. Top right, Create Droplet (Green button)
3. Options:
    
    i) Region: `Singapore`
    
    ii) Image OS: `Ubuntu 22.04`
    
    iii) Droplet Type: `Basic plan`
    
    iv) CPU option: `Regular - Disk type: SSD`
    
    v) Pricing option: `$6/month (1GB /
1vCPU, 25GB SSD 1000GB Transfer)`
    
    vi) Choose Authentication Method: `SSH Key`
    
    vii) Add new SSH Key: `Paste the copied sop_as2.pub key and name it as` ***`sop_as2`***
    
    viii) Add Sir Bahit's SSH Key: `Copy and Paste Sir Bahit's SSH Key and 
    name it ` ***`sop_as2_sirbahit`***
   
    ix) Hostname: `sop-as2`

4. Create Droplet

5. VPS IP Address: `174.138.26.16`

### 1.3 Domain Setup
Since this assignment uses a domain name rather than the VPS IP Address itself, we must host our own domain. 
There are quite a lot of options to host domain names such as `NameCheap`, `GoDaddy`, `DuckDNS` and many more. But in this case, since `dottech` gives away free 1 year domain hosting to any student registered under the Github Student Developer Pack, we will just use that instead.

Under the DNS Management, add an `A Record` and paste the VPS IP Address. In this case, my domain name will be `muazharris.tech`.

---
## 2. Root Login using terminal
- Open the terminal and go into .ssh directory
```sh
> cd .ssh
```
This is necessary as the user must find the SSH key which is inside the .ssh directory.
- Type this into the terminal:
```sh
> ssh -i sop_as2 root@174.138.26.16
```
The ***`-i`*** means that the user can choose which SSH Key they want to log in with, in this case specifying the ***`sop_as2`*** as the key.
### 2.1 Make new non-root user
```
# adduser ftt1242
# password 21ftt1242
```
### 2.2 Grant Administrative Privileges (Sudo) for non-root user
```
# usermod -aG sudo ftt1242
```
### 2.3 Enabling external access for non-root user
```
# rsync --archive --chown=ftt1242:ftt1242 ~/.ssh /home/ftt1242
```
### 2.4 Setting up firewall
1. List installed UFW profiles
```
# ufw app list

Output
Available applications:
    OpenSSH
```
2. Allow SSH connections
```
# ufw allow OpenSSH
```
3. Enable Firewall
```
# ufw enable
```
4. Check firewall status
```
# ufw status

Status: active  
    To                Action      From  
    --                -----       ----  
    OpenSSH           ALLOW      Anywhere  
    OpenSSH (v6)      ALLOW      Anywhere
```
### 2.5 SSH Server Configuration
1. Open the sshd_config file
```
$ nano /etc/ssh/sshd_config
```
2. Find and configure settings as such:

| No. | Conditions | New Changes
| ------ | ------ | ------- |
| 1 | Don't allow password auth | PasswordAuthentication `no`
| 2 | Allow public key auth | PubKeyAuthentication `yes`
| 3 | Don't allow root login | PermitRootLogin `no`

Then close and save the edited config file using ***`CTRL + x`*** to exit and ***`y`*** to save changes.

3. Reload ssh service
```
$ sudo service ssh restart
```

Now when entering as root, it will show the following message
```
root@174.138.26.16: Permission denied (publickey)
```
However, user `can actually change to root` **ONLY** when the non-root user is logged in by typing in the following command:
```
$ sudo -i
```
### 2.6 Changing Timezone
1. Check list of timezones in Asia
```
$ timedatectl list-timezones | grep Asia
```
Brunei should be there as `Asia/Brunei`
To set the timezone to Brunei, run:
```
sudo timedatectl set-timezone Asia/Brunei
```
We can check if the change is done by running `timedatectl`
```
$ timedatectl

Local time: Sat 2023-09-30 01:10:00 +08
           Universal time: Fri 2023-09-29 17:10:00 UTC
                 RTC time: Fri 2023-09-29 17:10:00
                Time zone: Asia/Brunei (+08, +0800)
System clock synchronized: yes
              NTP service: active
          RTC in local TZ: no
```

### 2.7 VPS Welcome Message
To change the VPS greeting to greet the user, we must modify the `00-header`.
Go into this directory:
```
$ cd /etc/update-motd.d
```
Inside here, open the `00-header` file.
```
$ sudo nano 00-header
```
Then at the very bottom line, edit the text to include any message, in this case, my student id.
```
printf "Welcome to 21ftt1242 %s (%s %s %s)\n" "DISTRIB_DESCRIPTION" "$(uname -o)" "
```
Don't forget to `save` and `exit`.

---
## 3. Create config file for shortcut
- Go inside the .ssh directory
```
cd .ssh
```
- Make a notepad file called config
```
> notepad config
```
It will then open the Notepad application. Inside of the config file is:
```
Host as2
    HostName 174.138.26.16
    User ftt1242
	IdentityFile ~/.ssh/sop_as2
```
- Save file and close
- Go to file explorer and search inside the .ssh folder
- The `config` file is currently a .txt file which can not be read by the terminal.
- On Windows, make it so that the file explorer can view File name extensions if haven't so.
- Rename `config.txt` to just `config`

On the terminal, there are two ways to login now. The first one is the original way, **assuming that the user is already inside the .ssh directory**:
```
ssh -i sop_as2 ftt1242@174.138.26.16
```
And the second one is using the shortcut config file:
```
ssh as2
```
`Log entry date: 26th September 2023`

---
## 4. Installing LEMP Stack
LEMP stack are group of software that is required/a preqrequisite to install Laravel. It can also be called LAMP stack if the user is using Apache instead of Nginx.
`L` - Linux OS
`E` - Nginx
`M` - MySQL
`P` - PHP

### 4.1 Install and enable Nginx Full
Since the assignment wants us to use only enable web traffic (port 80 & 443), Nginx Full will fulfill this requirement. The differences of other Nginx versions are:

`Nginx Full`: This profile opens both port 80 (normal, unencrypted web traffic) and port 443 (TLS/SSL encrypted traffic) 

`Nginx HTTP`: This profile opens only port 80 (normal, unencrypted web traffic) 

`Nginx HTTPS`: This profile opens only port 443 (TLS/SSL encrypted traffic)Apr 24, 2020

1. Update local package index and install Nginx Full
```
$ sudo apt update
$ sudo apt install nginx
```
2. Adjusting the firewall and allowing Nginx
```
$ sudo ufw app list

Output
Available applications:
    Nginx Full
    Nginx HTTp
    Nginx HTTPS
    OpenSSH
```
```
$ sudo ufw allow 'Nginx Full'
$ sudo ufw status

Status: active  
To                 Action      From  
 --                 -----       ----  
OpenSSH             ALLOW       Anywhere  
Nginx Full          ALLOW       Anywhere  
OpenSSH (v6)        ALLOW       Anywhere  
Nginx Full (v6)     ALLOW       Anywhere 
```
3. Check if Nginx is running
```
$ systemctl status nginx
```

### 4.2 Install MySQL/MySQL Hardening
Install database system to store and manage data for the website.
```
$ sudo apt install mysql-server
```

To do MySQL hardening, which will remove the default insecure settings and lock down access to the database system, run:
```
$ sudo mysql_secure_installation
```

There will be a couple of prompts for the user to answer. For the validate password plugin, opt for `No`.
```
VALIDATE PASSWORD COMPONENT can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD component?
```

For removing anonymous users, opt for `Yes`.
```
By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.
```

For disallowing root login remotely, opt for `No`.
```
Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.
```

For removing test database, opt for `Yes`.
```
By default, MySQL comes with a database named 'test' that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.
```

Then reload the privilege tables and opt for `Yes`.
```
Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.
```

Now when entering `sudo mysql`, MySQL should run.

### 4.3 Install required PHP modules
Next is to install PHP to process code and generate dynamic content for the web server.

```
$ sudo apt install php8.1-fpm php-mysql
```

Install these PHP extensions which will provide extra support for dealing with character encoding, XML and precision mathematics.
```
$ sudo apt install php-mbstring php-xml php-bcmath php-curl
```

---
## 5. Install Composer
Composer is a dependency management tool for PHP to manage installations and updates for project dependencies.

### 5.1 Install PHP and Additional Dependencies
Composer requires `php-cli` in order to execute PHP scripts in the command line, and `unzip` to extract zipped archives. To install these dependencies, run:
```
$ sudo apt install php-cli unzip -y
```

### 5.2 Download and Install Composer
Make sure to be in the home directory to retrieve the installer using `curl`.
```
$ cd ~
$ curl -sS https://getcomposer.org/installer -o /tmp/composer-setup.php
```

Next, verify that the downloaded installer match the SHA-384 hash for the latest installer found on the Composer page.
```
$ HASH=`curl -sS https://composer.github.io/installer.sig`
```

To verify the obtained value, run:
```
$ echo $HASH

Output
e21205b207c3ff031906575712edab6f13eb0b361f2085f1f1237b7126d785e826a450292b6cfd1d64d92e6563bbde02
```

Now, execute this code to verify that the installation script is safe to run:
```
$ php -r "if (hash_file('SHA384', '/tmp/composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
```

The following output will be displayed:
```
Installer verified
```
If the output says `Installer corrupt` then you will need to download the installation script again and double check to use the correct hash.

Next is to install the composer globally as a system-wide command named `composer`.
```
$ sudo php /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer
```

After installation, to check that composer is now installed, run:

```
$ composer
```

---
## 6. Create a database for the Laravel application

Login to the MySQL console and run:
```
$ sudo mysql
```

Create a new database. In this case, I named it `laravel`.
```
mysql> CREATE DATABASE laravel;
```

Now, create a new user. Here I named the user `ftt1242` and its password, `21ftt1242`.
```
mysql> CREATE USER 'ftt1242'@'%' IDENTIFIED BY '21ftt1242';
```

Give the user permission over the `laravel` database.
```
GRANT ALL ON laravel.* TO 'ftt1242'@'%';
```

Exit the MySQL shell.
```
mysql> exit
```

Then enter using the newly created user to check if the database is available.

```
$ mysql -u ftt1242 -p
```

Confirm if have access to the `laravel` database.

```
mysql> SHOW DATABASES;
```
Output:
```
+--------------------+
| Database           |
+--------------------+
| information_schema |
| laravel            |
| performance_schema |
+--------------------+
3 rows in set (0.01 sec)
```

Exit MySQL.
```
mysql> quit
```

---
`Log entry date: 28th September 2023`
## 7. Creating Laravel Application

Before everything, go to the home directory.
```
$ cd ~
```

Create a project directory containing basic Laravel application based on default settings. In this case, I named it as `sysop2`.
```
$ composer create-project --prefer-dist laravel/laravel sysop2
```

When the installation is finished, verify that all the components were sucessfully installed by running Laravel's `artisan` command.
```
$ cd sysop2
$ php artisan
```

Output:
```
Laravel Framework 10.24.0

Usage:
  command [options] [arguments]

Options:
  -h, --help            Display help for the given command. When no command is given display help for the list command
  -q, --quiet           Do not output any message
  -V, --version         Display this application version
      --ansi|--no-ansi  Force (or disable --no-ansi) ANSI output
  -n, --no-interaction  Do not ask any interactive question
      --env[=ENV]       The environment the command should run under
  -v|vv|vvv, --verbose  Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
 ...
```

### 7.1 Configure Laravel
Get inside the Laravel application directory.
```
$ cd sysop2
```

Open the `.env` file to customize the configuration options for the current application environment.

```
$ nano .env
```

Inside the .env file, change the `APP_URL`, `DB_DATABASE`, `DB_USERNAME` and `DB_PASSWORD` as needed.

```
APP_NAME=Laravel
APP_ENV=development
APP_KEY=APPLICATION_UNIQUE_KEY_DONT_COPY
APP_DEBUG=true
APP_URL=muazharris.tech

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=ftt1242
DB_PASSWORD=21ftt1242

. . .
```

### 7.2 Setting up Nginx

First, move the application folder to `/var/www/`, which is the usual location for web applications running on Nginx as its not a recommended practice for web servers to work with local development environments.

```
$ sudo mv ~/sysop2 /var/www/sysop2
```

Next is to give the web server user write access to the `storage` and `cache` folders where Laravel stores application-generated files.

```
$ sudo chown -R www-data.www-data /var/www/sysop2/storage
$ sudo chown -R www-data.www-data /var/www/sysop2/bootstrap/cache
```

Next is to create a new virtual host configuration file at `/etc/nginx/sites-available`

```
$ sudo nano /etc/nginx/sites-available/sysop2
```

Paste the following configuration which contains the recommended settings for Laravel applications on Nginx. Change the `server_name` and the `/public` destination as needed.

```
server {
    listen 80;
    server_name muazharris.tech;
    root /var/www/sysop2/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    index index.html index.htm index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

Save and close the file when done editing.

To activate the new virtual host configuration file, create a symbolic link to `sysop2` in `sites-enabled`:
```
$ sudo ln -s /etc/nginx/sites-available/sysop2  /etc/nginx/sites-enabled/
```

To confirm that the configuration doesn't contain any syntax errors, run:
```
$ sudo nginx -t
```

Output:
```
$
Output
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

To apply changes, reload Nginx.
```
$ sudo systemctl reload nginx
```

Now when visiting the domain, in this case http://muazharris.tech , it will show Laravel's default welcome page.

---
## 8. Enabling Email Verification
### 8.1 Install Node JS
A prerequisite to enable email verification is to install Node JS. There are various ways to install Node JS but here we are using the Noder Version Manager.
Run this `curl` command to see if the script is good to install. It will grab the link from the NVM's github page.
```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh
```
Now if everything is correct, use `| bash` to download and execute the script.
```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
To use the NVM, source the `.bashrc` file.
```
$ source ~/.bashrc
```
Now list the versions of Node that are available using NVM.
```
...
v18.10.0
       v18.11.0
       v18.12.0   (LTS: Hydrogen)
       v18.12.1   (LTS: Hydrogen)
       v18.13.0   (LTS: Hydrogen)
       v18.14.0   (LTS: Hydrogen)
       v18.14.1   (LTS: Hydrogen)
       v18.14.2   (LTS: Hydrogen)
       v18.15.0   (LTS: Hydrogen)
       v18.16.0   (LTS: Hydrogen)
       v18.16.1   (LTS: Hydrogen)
       v18.17.0   (LTS: Hydrogen)
       v18.17.1   (LTS: Hydrogen)
       v18.18.0   (Latest LTS: Hydrogen)
...
```
For this instance, I will be using the Node `v18.18.0` version.
```
$ nvm install v18.18.0
```
Now to see if the NodeJS is successfully installed, run this command:
```
$ node -v
```

```
Output
v18.18.0
```

### 8.2 Install Breeze Laravel Authentication Package
To get the authentication package, we need to install `breeze` first.
Before anything, cd inside the project folder,  `/var/www/sysop2` in my case.
```
$ cd /var/www/sysop2
```
Then, run the `composer` command with `sudo` to install the breeze package into the application.
```
$ sudo composer require laravel/breeze --dev
```
Install the artisan breeze.
```
$ php artisan breeze:install
```
It will then ask a series of questions.
```
Which Breeze Stack would you like to install?

> Blade with Alpine
> Livewire with Alpine
> React with Inertia
> Vue with Inertia
> API only
```
For this, opt for `Blade with Alpine`.
```
Would you like dark mode support?

> Yes / No
```
For this, it's up to the user's preference. 
```
Which testing framework do you prefer?

> PHPUnit
> Pest
```
For this, opt for `PHPUnit`.

Next, install the necessary dependencies using `npm`.
```
$ npm install && npm run build
```
If everything is done correctly, visiting the website now at http://muazharris.tech will show a clickable **Log in** and **Register** link on the upper right.

At this point, the UI and everything should work but the authentication/sending email verifcation link will not work. To enable the email verification, first we must modify the **User.php** file.

Make sure to cd inside the project folder first. We will then go to the **app/Models** folder.
```
$ cd app/Models
```
Open the **User.php** file using `nano`.
```
$ nano User.php
```
Inside the file, **uncomment** the `use Illuminate\Contracts\Auth\MustVerifyEmail;` and then, **add** `implements MustVerifyEmail` after the ``class User extends Authenticable`

The first few lines of the file should look like this:
```
namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{

...
```

Make sure to close the file and save.


### 8.3 Database migration and checking
Before doing the next part, make sure to be inside the application directory, in my case, `/var/www/sysops2`.
Next is to migrate the database to set up the database for the authentication package by running the following command:
```
$ php artisan migrate
```

Now we can see the registered users by checking the database.
```
$ sudo mysql
```
Show the available databases.
```
mysql> SHOW databases;
```
Use the database created earlier, in this case, `laravel`.
```
mysql> USE laravel;
```
Now that we are inside the database, we can list the tables available.
```
mysql> SHOW tables;

+------------------------+
| Tables_in_laravel      |
+------------------------+
| failed_jobs            |
| migrations             |
| password_reset_tokens  |
| personal_access_tokens |
| users                  |
+------------------------+
```
Now to see the registered users that registers using your website. You could run:
```
mysql> SELECT * FROM users;
```


### 8.4 Changing the env file
Next step is to have the PB email credential to be used to send an email via SMTP.

cd to the application directory, `/var/www/sysop2` and open the .env file.
```
$ nano .env
```
Scroll where the MAIL_ are listed. Change the values of the **MAIL_HOST**, **MAIL_PORT**, **MAIL_USERNAME**, **MAIL_PASSWORD**, **MAIL_ENCRYPTION**, **MAIL_FROM_ADDRESS** as below:
```
MAIL_MAILER=smtp
MAIL_HOST=smtp.office365.com
MAIL_PORT=587
MAIL_USERNAME=PBEMAILWITHOUTQUOTES
MAIL_PASSWORD=PASSWORDLWITHOUTQUOTES
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="PBEMAILWITHQUOTES"
MAIL_FROM_NAME="${APP_NAME}"
```

Now when registering through the website, the email verification link should be sent to the registered email using the PB email, and the user should now be recorded in the database. `Note: gmail will move the email to a spam folder first, so make sure to check it as safe.`

So now when the user clicks on the verification link, it will redirect to the Laravel dashboard.

---
`Log entry date: 30th September 2023`
## 9. Changing the default laravel logo to PB logo
### 9.1 Copy picture from local to VPS
After downloading the PB logo from the LMS, the picture should be inside the user's download folder. Use the following command to move the picture to the application's public folder.

`First, make sure to logout of the VPS.`
Go to the downloads folder.
```
cd Downloads
```
Then run this command to move the picture. Here, the `-i ../.ssh/sop_as2.pub` means that it will specify which public key to enter the SSH with. The colon `:` after the IP address signifies the destination it will go to. In this case, `/var/www/sysop2/public`.

The `public/` directory is the default location where Laravel serves static assets like images. By default, any file in the public directory can be accessed by users using a URL that points to the file.
```
scp -i ../.ssh/sop_as2.pub pblogo.png ftt1242@174.138.26.16:/var/www/sysop2/public
```
So now after you log in, when you cd into `/var/www/sysops2/public` , the picture should be there.

```
cd /var/www/sysop2/public
```
List all the files inside folder using this command:
```
$ ls

build   favicon.ico index.php   pblogo.png   robots.txt
```

### 9.2 Changing the default laravel logo
There are three files to change in this step. First is the welcome screen logo. Go into the application directory and navigate to `/resources/views` below:
```
$ cd /var/www/sysop2/resources/views
```
When listed the files inside, there should be a `welcome.blade.php` which is the one to be edited. Open the file.
```
$ nano welcome.blade.php
```

Inside the welcome.blade.php, on the `2nd div` inside the `<body>` element, navigate to `line 39` which shows an `<svg>` element  like this:
```
<div class="max-w-7xl mx-auto p-6 lg:p-8">
                <div class="flex justify-center">
                    <svg viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-16 w-auto bg-gray-100 dark:bg-gray-900">
                        <path d="M61.8548 1... />
                    </svg>
                </div>
```

The svg element will be inside a `<div class="flex justify-center"` which is from line 39 until line 41. 

Delete these 3 lines using `CTRL + K`. Then paste this following code:
```
<img src="{{ asset('pblogo.png') }}" alt="PB Logo" class ="h-26 w-auto bg-gray-100 dark:bg-gray-900" viewBox="0 0 62 65" fill="none">
```
This code will retrieve the PB Logo whilst stil using the same sizing structure as the previous laravel logo so that it looks normal. Make sure to `save and exit`.

Now, since we are still inside the views folder, the next thing to do is to navigate to the `components` folder which is inside the `views` folder.
```
$ cd components
```
Inside here, open the `application-logo.blade.php` file. This will modify the all the logo inside the application, including the `Login`, `Registration` and `Dashboard` when the user has logged in.
```
$ nano application-logo.blade.php
```
Inside here, delete every line using `CTRL + K` and paste the following code:
```
<img src=" {{ asset('pblogo.png') }}" class="logo" alt="PB Logo" style="width: auto; height: auto;"/>
```
Make sure to `save and exit`.

Now, navigate back to the views folder. (`/var/www/sysop2/resources/views`)
```
$ cd ..
```

And open the layouts folder. $ cd layouts (`/var/www/sysop2/resources/views/layouts`)
```
$ cd layouts
```
Here we are searching for the navigation blade file. Since we changed the `application-logo.blade.php` file, the sizes for the Login and Registration should look normal but the dashboard logo when the user logs in will be quite big. Modifying the `navigation.blade.php` file will make sure that the size stays normal.

Open the navigation blade php file.
```
$ nano navigation.blade.php
```
Inside the file, the first 11 lines should be like this:
```
<nav x-data="{ open: false }" class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
    <!-- Primary Navigation Menu -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <div class="flex">
                <!-- Logo -->
                <div class="shrink-0 flex items-center">
                    <a href="{{ route('dashboard') }}">
                        <x-application-logo class="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                    </a>
                </div>
```
Delete the line inside the `<a href="{{ route('dashboard') }}">` element and paste the following code:
```
<img src="{{asset('pblogo.png')}}" class="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
```
Don't forget to `save and exit`.

### 9.3 Change the logo in the email verifcation link message

Lastly, go back to the application directory.
```
$ cd /var/www/sysop2
```

Paste the following command:
```
$ php artisan vendor:publish --tag=laravel-mail
```
To customise email components, we must first publish the mail components. This command will publish the Markdown mail components to the `resources/views/vendor/mail` directory. Now it can finally be customised.

Navigate to the `resources/views/vendor/mail/html` directory. (`/var/www/sysop2/resources/views/vendor/mail/html`)
```
$ cd resources/views/vendor/mail/html
```

Inside here, open the header file.
```
$ nano header.blade.php
```

Then, make sure to change the contents inside the `if else` to the `img src`.
The final file should look like this:
```
@props(['url'])
<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'Laravel')
<img src=" {{ asset('pblogo.png') }}" class="logo" style="width: auto; height:auto;" alt="PB Logo"/>
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
```
`Save and exit` the file.
The Email Verifcation message should now have a PB Logo.

Go back to home directory.
```
$ cd ~
```

---
## 10. Security hardening using Fail2Ban
### 10.1 Installing Fail2Ban

Fail2ban can significantly mitigate brute force attacks by creating rules that automatically alter your firewall configuration to ban specific IPs after a certain number of unsuccessful login attempts. This will allow your server to harden itself against these access attempts without intervention from you.

Install fail2ban, don't forget to update the package listings before Installing.
```
$ sudo apt update
$ sudo apt install fail2ban
```

### 10.2 Modifying the config file
Before starting the systemctl fail2ban service, we must first change the configuration files. To change the config go to this directory:

```
$ cd /etc/fail2ban
```
Inside this directory there is a config file called `jail.conf`. You should not directly modify this file. Instead, make a copy of it into a `jail.local` file so that it will save as a local setting.
```
$ sudo cp jail.conf jail.local
```
Now open the `jail.local` file.

```
$ sudo nano jail.local
```
Search `ignoreip` using `CTRL + W`, then you should see the following line. `Uncomment the line and whitelist Politeknik's IP Address (119.160.132.250)`
```
[DEFAULT]

. . .
ignoreip = 127.0.0.1/8 ::1 119.160.132.250
```

A few lines after this line, there should be the `bantime` and `maxretry` line. Change those to below:
```
[DEFAULT]

. . .
bantime = 2h
. . .
maxretry = 4
```

Next part is to enable log monitoring for Nginx login attempts. Use `CTRL + W` and search for `nginx`. This will lead you to this line:

Just add `enabled = true`.
```
…
[nginx-http-auth]

enabled  = true
port     = http,https
logpath = %(nginx_error_log)s
. . .
```
Make sure to `save` and `exit`.

### 10.3 Enabling Fail2Ban

Run `systemctl enable`:
```
$ sudo systemctl enable fail2ban
```

Start fail2ban
```
$ sudo systemctl start fail2ban
```

You can verify that it's running using `systemctl status`
```
$ sudo systemctl status fail2ban
```

```
Output
● fail2ban.service - Fail2Ban Service
     Loaded: loaded (/lib/systemd/system/fail2ban.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2023-09-29 15:18:02 UTC; 5s ago
       Docs: man:fail2ban(1)
   Main PID: 31253 (fail2ban-server)
      Tasks: 7 (limit: 1102)
     Memory: 16.6M
        CPU: 218ms
     CGroup: /system.slice/fail2ban.service
             └─31253 /usr/bin/python3 /usr/bin/fail2ban-server -xf start

Sep 29 15:18:02 sop-as2 systemd[1]: Started Fail2Ban Service.
Sep 29 15:18:03 sop-as2 fail2ban-server[31253]: Server ready
```

---
## 11. Serve website over HTTPS
To get HTTPS, we are using `Let's Encrypt` which is a Certificate Authority (CA) that provides an accessible way to obtain and install free TLS/SSL certificates, thereby enabling encrypted HTTPS on web servers. 

It simplifies the process by providing a software client, `Certbot`, that attempts to automate most (if not all) of the required steps. 
### 11.1 Installing Certbot
Make sure you are in the home directory.
```
$ cd ~
```
Certbot recommends using their **snap** package for installation.
```
$ sudo snap install core; sudo snap refresh core
```
Install `certbot` package:
```
$ sudo snap install --classic certbot
```
Link the `certbot` command from the snap install directory to your path.
```
$ sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

### 11.2 Obtain SSL Certificate
Use the `certbot` `nginx` plugin to get the SSL Certificate, enter your own domain name:
```
$ sudo certbot --nginx -d muazharris.tech
```

When running the command, several questions will be asked. For the email, enter the student email address.
```
Enter email address (used for urgent renewal and security notices)
 (Enter 'c' to cancel): 21ftt1242@student.pb.edu.bn
```
`Agree` to the Terms of Service.
```
- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.3-September-21-2022.pdf. You must
agree in order to register with the ACME server. Do you agree?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: Y
```
`Disagree` to the email subscription.
```
- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Would you be willing, once your first certificate is successfully issued, to
share your email address with the Electronic Frontier Foundation, a founding
partner of the Let's Encrypt project and the non-profit organization that
develops Certbot? We'd like to send you email about our work encrypting the web,
EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: N
```

Finally, the certificate should be successfully received.
```
Output
Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/muazharris.tech/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/muazharris.tech/privkey.pem
This certificate expires on 2023-12-28.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

Deploying certificate
Successfully deployed certificate for muazharris.tech to /etc/nginx/sites-enabled/sysop2
Congratulations! You have successfully enabled HTTPS on https://muazharris.tech/

- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 
Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```

Now when we go to http://muazharris.tech, with or without the `http`, it will automatically redirect the site to a secure `https` version.

### 11.3 Setting up Cron Job
To make Let's Encrypt to automatically renew its certificate every 30 days, we will use a cron job.

First, enter this command:
```
$ crontab -e
```

Inside here, there will be a lot of commented lines. Go to the very bottom and start a new line. Paste this code:
```
0 0 * */1 * /usr/bin/certbot renew --quiet
```
What this cron job will do is to run the renew certbot program every 30 days, at 12AM. Now `save` and `exit` the file.
