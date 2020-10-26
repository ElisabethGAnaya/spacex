<template>

<div class="container">
 
  <div class="columns is-multiline p-6">

    <div class="column is-3">
      <div class="card card-blog">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4"><a href="#">Title</a></p>
              <p class="subtitle is-6 has-text-white">Subtitle</p>
            </div>
          </div>

          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris...</p>

            <time class="mt-4" datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </div>
    
  </div>

</div>

</template>

<script>
export default {
  name: "BlogPage",
  data() {
    return {
      
    }
  }
}
</script>