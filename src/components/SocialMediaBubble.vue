<template>
  <li v-if="li">
    <social-link :url="url" :description="description" :is-brand="isBrand" :icon-id="iconId"/>
  </li>

  <social-link v-else :url="url" :description="description" :is-brand="isBrand" :icon-id="iconId"/>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

const SocialLink = `
  <a class="li" :href="url">
      <i :class="{
        'social-media-icon': true, 
        fab: isBrand, 
        fas: !isBrand, 
        ['fa-' + iconId]: true, 
        'icon-link': true}">
      </i>
   </a>
`;

const CommonProps = {
  description: {
    type: String,
    required: true
  },
  iconId: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  isBrand: {
    type: Boolean,
    required: false,
    default: true
  }
};

@Component({
  components: {
    SocialLink: {
      template: SocialLink,
      props: {
        ...CommonProps
      }
    }
  },
  props: {
    li: {
      type: Boolean,
      required: false,
      default: true
    },
    ...CommonProps
  }
})
export default class SocialMediaBubble extends Vue {}
</script>

<style lang="scss">
.li {
  overflow: hidden;
  list-style: none;
  white-space: nowrap;
  display: inline-block;

  .icon-link {
    width: 2.7rem;
    height: 2.7rem;
  }

  svg {
    background: #444;
    border-radius: 25px;
    padding: 0.5rem;
  }

  .icon-link-a {
    opacity: 0;
    color: #666;
    max-width: 0;

    display: inline-block;
    text-decoration: none;
    transition: max-width 1s ease-out 0.1s, opacity 1s ease-out 0.1s, color;
  }

  a {
    &:hover {
      color: #fff;
    }

    i {
      color: #fff;
      float: right;
      display: block;

      font-size: 1em;
    }
  }

  .social-media-icon {
    color: #fff;
    line-height: 1;
    font-size: 25px;
    display: inline-block;
  }
}

.social-media-icon {
  display: inline-block;
  font-size: 1.75em !important;
}
</style>
