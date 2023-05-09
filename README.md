<p align="center">
  <a href="https://motopress.com/products/hotel-booking/">
    <img src="https://ps.w.org/motopress-hotel-booking-lite/assets/icon-128x128.png" width="128" height="128" alt="MotoPress Hotel Booking">
  </a>
</p>

<h2 align="center">MotoPress Hotel Booking Style Kit</h2>

This boilerplate is designed for WordPress theme developers who are interested in developing themes with the MotoPress Hotel Booking plugin.

This Style Kit provides smartly organized starter scss files to style [**MotoPress Hotel Booking**](https://motopress.com/products/hotel-booking/).

The **MotoPress WordPress Hotel Booking** plugin is an all-in-one property management suite for rental property websites. List unlimited accommodations and services, accept direct online reservations, synchronize all bookings across OTAs and more (no per-booking or per-property commission).

See also: [Pre-made Hotel Booking Themes](https://motopress.com/products/category/hotel-rental-wordpress-themes/)

## For themes built using SASS/SCSS

1. Download a zip folder/clone a repository.
2. Copy the `scss` directory and paste it to the sass/scss directory of the theme styles.
3. Import `style.scss` at the end of the main file containing styles.
4. Have fun!

## For themes built without SASS/SCSS

1. Download a zip folder/clone a repository.
2. Run a console command `npm i`.
3. Run a console command `npm run watch` (this will run a task that will watch for changes in .scss files).
4. Add generated `style.css` to your theme.
5. Have fun!

## Useful theme support snippets

### Enqueuing the style to your theme

Add the following snippet into `functions.php`:

```
wp_enqueue_style( 'mphb-style-kit', 'path_to_compiled_style/style.css', array(), '1.0.0' );
```

### Enqueuing the style to Block Editor

If you are using default Block Editor, and want load styles there - then add the following snippet into `functions.php`:

```
add_theme_support('editor-styles');

add_editor_style( array(
    'path_to_compiled_style/style.css',
    /* here can be url to Google Font, or another style file */
) );
```

## Directory structure
For your convenience, all styles are logically divided into files. All files contain templates with the minimum set of selectors for styling different blocks.

```
mphb-style-kit
├───css                     # compiled css will be here
└───scss
    ├───shortcodes          # shortcode-related styles
    │   ├───_accommodations-list.scss
    │   ├─── ...
    │   └───_single-accommodation.scss
    ├───_accommodations-attributes.scss
    ├─── ...
    ├─── _single-service.scss
    └───style.scss          # main general style file
```

## License
MotoPress Hotel Booking Style Kit, Copyright &copy; 2023, MotoPress. MotoPress Hotel Booking Style Kit is distributed under the terms of the [GPLv2](http://www.gnu.org/licenses/gpl-2.0.html).

<p align="center">
    <br/>
    Made with 💙 by <a href="https://motopress.com/">MotoPress</a>.<br/>
</p>