# T&T AniMotion Series Page 

## 1. Document Type Declaration
```
<!DOCTYPE html>
```
This declaration defines the document as an HTML5 document, ensuring the correct rendering mode in browsers.

## 2. HTML Language Declaration
```
<html lang="en">
```
Specifies the language of the document content. In this case, "en" stands for English.

## 3. Head Section
```
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> T&T's AniMotion Series </title>
    <link rel="icon" href="img/T&T_Flav.ico">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/series.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap" rel="stylesheet" />
    <style>
        body {
            background: url('img/animotionbg.jpg') no-repeat center center fixed;
            background-size: cover;
        }
    </style>
</head>
```

## 4. Body Section
```
<body>
    <button type="button" class="btn_up" id="btn_up">
        <i class="fa-solid fa-circle-up"></i>
    </button>

```
A button with an up-arrow icon that helps users quickly scroll back to the top of the page.

## 5. Header Section
```
<header class="head">
    <input type="checkbox" id="toggler">
    <label for="toggler" class="fas fa-bars"></label>

    <a href="#" class="logo">
        <img src="img/animotionhdr1.png" alt="T&T's AniMotion Logo">
    </a>

    <nav class="navbar" id="navbar">
        <a href="index.html">Home<span></span></a>
        <a href="series.html" style="color:#ff1ef6">Series <span class="on"></span></a>
        <a href="movies.html">Movies<span></span></a>
        <a href="contact.html">Contact Us<span></span></a>
    </nav>

    <div class="header-extras">
        <div class="search-container">
            <input type="text" placeholder="Search..." class="search">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <div class="account-container">
            <a class="account-btn">
                <i class="bi bi-person-circle"></i>
            </a>
            <div class="account-dropdown">
                <a href="account.html">Account</a>
                <a href="index-login.html">Log Out</a>
            </div>
        </div>
    </div>
</header>
```
## 6. Main Content Section (Series List)
```
<section class="content2">
    <div class="sub_con2">
        <div class="head2">
            <h1 class="page_title">Anime Series</h1>
        </div>
        <div class="main_con2">
```
This section contains the title "Anime Series" and a container for listing multiple anime series.

    
## 7. Series Box Elements
```
<div class="box_element">
    <div class="img_cont">
        <img src="img/bnh-ser.webp" alt="">
    </div>
    <div class="img_details">
        <div class="icn_content">
            <a href="#">
                <p class="bi bi-person-circle"></p>T&T's AniMotion
            </a>
            <div class="clock">
                <p class="bi bi-clock"></p>2 hours ago
            </div>
            <div class="flame">
                <p class="bi bi-fire"></p>2072
            </div>
        </div>
        <h2>
            <a class="page_title" href="#">My Hero Academia Seasons 1</a>
        </h2>
        <a href="#" class="btn_read">Read More</a>
    </div>
</div>
