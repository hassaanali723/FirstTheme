
<?php get_header(); ?>

<?php if(have_posts()) { ?>
        
        <?php while(have_posts() ){ ?>

        <?php the_post() ?>

        <h2>
         <a href="<?php get_the_permalink()?>" title="<?php the_title_attribute() ?>"> 
         <?php the_title() ?>
         </a>
        </h2>

        <div>
          <?php   firsttheme_post_meta();?>
        </div>

        <div>
        <?php the_excerpt() ?>
        </div>

        <?php  firsttheme_readmore_link(); ?>

        <?Php } ?>

        <?php the_posts_pagination() ?>


<?php } else { ?>
    <p>Sorry, No posts were found</p>
<?php } ?>

<?php get_footer(); ?>
