<template>
  <a class="bubble bubble-link" :href="link" v-if="link" :aria-label="header">
    <div class="content">
      <slot></slot>
    </div>
    <p v-if="content" class="text">{{ content }}</p>
  </a>
  <div class="bubble" :aria-label="header" v-else>
    <div class="content">
      <slot></slot>
    </div>
    <p v-if="content" class="text">{{ content }}</p>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    link: {
      type: String,
      required: false,
      default: ''
    },
    content: {
      type: String,
      required: false,
      defaultValue: ''
    },
    header: {
      type: String,
      default: false
    }
  }
})
export default class SocialMediaBubble extends Vue {}
</script>

<style lang="scss">
.bubble {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: #fefefe;
  font-size: 1.2rem;
  line-height: 26px;

  &:matches() {
    color: #fefefe;
  }

  &.bubble-link:hover {
    color: #fefefe;
    text-decoration: none;
  }

  .content {
    margin: 0 3px;
  }

  .text {
    margin: 2px;
  }
}
</style>
