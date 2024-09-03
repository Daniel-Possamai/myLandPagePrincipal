<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'b?[6XMJHoBXbT9J*F-x<ca&JZK_B?$e^!z[hG{2pQFtZo_p0A$X_-/>h|_Q7b@GO' );
define( 'SECURE_AUTH_KEY',   'Ov=<uFed+*O.7)T(YxJsqNk313]W(_)f@~~$ [Ej8>L27_4zf:cM5m@tkO$pOmwi' );
define( 'LOGGED_IN_KEY',     't3iN~4{I1Xr&8pKQ6s.2`q*L=!SQM(pf065p(c<OE:46tTu7lx0@nvF1/9*$]@5<' );
define( 'NONCE_KEY',         ']^X/qbKF>E;(BOGp6jOi1YT;&ETv7Wpnu vS.dx&-pZRbn9!78di9d.R.lXlDd0L' );
define( 'AUTH_SALT',         '6fpctWrInrXU].#f]aIW5P;0yJc^Fzg$A`*{~A[$^6KGejna$V;<bZ0+TupHdb M' );
define( 'SECURE_AUTH_SALT',  '}PSg#4vN7@q<C-3iE5fY*>5]q!DO|[/_yW7%`HO)g@RkP=3E%Hgjm8QnPi;AXxye' );
define( 'LOGGED_IN_SALT',    '5VzGbb5>*J{H<OW#wUG.L}T#*XhE!io[!PG1?90}5/2=fxTY5hBD2:kf*W&.I7@o' );
define( 'NONCE_SALT',        'Ih>1|v8p7n_W|R|/T8Ac,!<NN9a9*Gf[pjPc8_n~-$|6<lh`PO/0Asm[Ab)DR@s9' );
define( 'WP_CACHE_KEY_SALT', 'Y?%G bn4}i2Ri7+JLI_QB|$nwDo9&Zn@{D<v+:ye[<GViCM~W/*@n0).[s}w4w+s' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
