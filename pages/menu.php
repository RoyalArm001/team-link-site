<?php
// Մենյուի տվյալներ
$menuItems = [
    [
        'title' => 'Home',
        'url' => 'index.php',
        'icon' => 'home-icon'
    ],
    [
        'title' => 'About',
        'url' => 'about.php',
        'icon' => 'about-icon'
    ],
    [
        'title' => 'Games',
        'url' => 'games.php',
        'icon' => 'games-icon'
    ],
    [
        'title' => 'Contact',
        'url' => 'contact.php',
        'icon' => 'contact-icon'
    ],
    [
        'title' => 'Login',
        'url' => 'login.php',
        'icon' => 'login-icon'
    ],
    [
        'title' => 'Settings',
        'url' => 'settings.php',
        'icon' => 'settings-icon'
    ],
    [
        'title' => 'Search',
        'url' => 'search.php',
        'icon' => 'search-icon'
    ],
    [
        'title' => 'Profile',
        'url' => 'profile.php',
        'icon' => 'profile-icon'
    ],
    [
        'title' => 'Notifications',
        'url' => 'notifications.php',
        'icon' => 'notification-icon'
    ],
    [
        'title' => 'Calendar',
        'url' => 'calendar.php',
        'icon' => 'calendar-icon'
    ],
    [
        'title' => 'Download',
        'url' => 'download.php',
        'icon' => 'download-icon'
    ],
    [
        'title' => 'Upload',
        'url' => 'upload.php',
        'icon' => 'upload-icon'
    ]
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="menu">
        <ul>
            <?php foreach ($menuItems as $item): ?>
                <li>
                    <a href="<?php echo $item['url']; ?>">
                        <svg>
                            <use href="icons.svg#<?php echo $item['icon']; ?>"></use>
                        </svg>
                        <span><?php echo $item['title']; ?></span>
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>
    </nav>
</body>
</html>