<?php
function firsttheme_post_meta(){
   printf(
      /* translatros: %s: Post Date */
      esc_html__('Posted on %s','firsttheme'),
      '<a href="'. esc_url(get_the_permalink()) .'">
      <time datetime="' . get_the_date('c'). '">' . esc_html(get_the_date()) . '</time></a>'
   
   ) ;
   printf(
       /* translatros: %s: Post author */
      esc_html__(' By %s','firsttheme'),
      '<a href="'.esc_url(get_author_posts_url(get_the_author_meta('ID'))) .'">'. esc_html(get_the_author()) .'</a>'

   );
}
function firsttheme_readmore_link(){
   echo  '<a href="' .esc_url(get_the_permalink()) .'" title="'. the_title_attribute(['echo' => false]).'">';

   printf(
       /* translatros: %s: Post title */
      wp_kses(
         __(' Read More <span class="u-sscreen-reader-text">About %s </span>','firsttheme'),
         [
            "span" => [
               "class" => []
            ]
         ]
      ),
      get_the_title()

   );
   echo '</a>';
}
?>