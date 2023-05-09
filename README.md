<p align="center">
  <a href="https://motopress.com/products/hotel-booking/">
    <svg width="128" height="128" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1024" height="1024" fill="url(#paint0_linear_2_89)" />
        <path d="M489.756 184.769L288.913 331.457C268.229 346.565 256 370.639 256 396.254V756.062C256 795.274 287.788 827.062 327 827.062H698C737.212 827.062 769 795.274 769 756.062V397.238C769 371.075 756.244 346.554 734.82 331.536L524.966 184.427C514.365 176.996 500.21 177.133 489.756 184.769Z" stroke="white" stroke-width="62"/>
        <path d="M432 614.2C432 612.433 433.433 611 435.2 611H590.8C592.567 611 594 612.433 594 614.2V821H432V614.2Z" stroke="white" stroke-width="62"/>
        <circle cx="512.5" cy="354.5" r="55.5" fill="white"/>
        <path d="M507 354.5C587.199 276.382 718.906 160.337 755.5 197C780.005 221.551 741.248 292.449 716 317" stroke="white" stroke-width="55"/>
        <defs>
            <linearGradient id="paint0_linear_2_89" x1="512" y1="0" x2="512" y2="1024" gradientUnits="userSpaceOnUse">
            <stop stop-color="#0DB5F7"/>
            <stop offset="1" stop-color="#016AF7"/>
            </linearGradient>
        </defs>
    </svg>
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