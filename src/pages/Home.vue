<template>
  <div>
    <b-row class="no-gutters">
      <b-col lg="4" md="5" order-md="1" order="2" cols="12">
        <div class="about-sidebar">
          <h1 class="website-title">
            <a href="/">
              <b>Evan</b>
              <span class="last-name">Welsh</span>
            </a>
          </h1>
          <h3 class="website-subtitle">one line of code at a time</h3>
          <bubble
            header="email"
            link="mailto:contact@evanwelsh.com"
            content="contact@evanwelsh.com"
          >
            <mail-icon />
          </bubble>
          <bubble header="my hometown" content="Grand Forks, North Dakota">
            <home-icon />
          </bubble>
          <bubble
            link="https://github.com/ewlsh/"
            header="github"
            content="@ewlsh"
          >
            <github-icon />
          </bubble>
          <div>
            <b-row class="social-links no-gutters">
              <b-col cols="auto">
                <bubble
                  header="linkedin"
                  link="https://www.linkedin.com/in/evan-welsh-291577141/"
                >
                  <linkedin-icon />
                </bubble>
              </b-col>
              <b-col cols="auto">
                <bubble
                  header="instagram"
                  link="https://www.instagram.com/ewlsh/"
                >
                  <instagram-icon />
                </bubble>
              </b-col>
              <b-col cols="auto">
                <bubble header="twitter" link="https://www.twitter.com/ewlsh/">
                  <twitter-icon />
                </bubble>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
      <b-col lg="8" md="7" order-md="2" order="1" cols="12">
        <portfolio-header />
      </b-col>
      <b-col class="content" cols="12" order="4">
        <b-row v-if="projects" class="no-gutters">
          <b-col>
            <section class="projects">
              <h4 class="header" id="projects">A Few Things I've Done</h4>
              <b-row class="no-gutters">
                <b-col
                  v-for="project of projects"
                  :key="project.name"
                  sm="12"
                  md="6"
                  lg="4"
                >
                  <project-card
                    @more-info-clicked="displayMoreInfoModal"
                    :image-path="project.imagePath"
                    :project="project"
                  />
                </b-col>
              </b-row>
            </section>
          </b-col>
        </b-row>
        <b-row class="no-gutters justify-content-center" v-else>
          <b-col cols="auto">
            <b-spinner class="loading"></b-spinner>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <transition name="modal">
      <b-modal
        v-show="isShowing"
        v-model="isShowing"
        no-fade
        size="lg"
        centered
        ref="moreInfoModal"
        id="moreInfoModal"
      >
        <template v-if="modalProject">
          <b-container>
            <b-row>
              <b-col>
                <b-img
                  v-if="modalProject.imagePath"
                  class="modal-image"
                  :src="modalProject.imagePath"
                  rounded
                />
                <h3 class="modal-body-header">{{ modalProject.name }}</h3>
                <p>{{ modalProject.description }}</p>
              </b-col>
            </b-row>
          </b-container>
          <div slot="modal-footer">
            <b-button
              v-if="modalProject.githubUrl"
              :href="modalProject.githubUrl"
              variant="default"
              >GitHub</b-button
            >
            <b-button
              v-if="modalProject.actionUrl"
              :href="modalProject.actionUrl"
              variant="primary"
              >{{ modalProject.actionText || 'Install' }}</b-button
            >
          </div>
        </template>
      </b-modal>
    </transition>
  </div>
</template>

<style lang="scss">
#moreInfoModal {
  .modal-footer {
    border: none;
    padding-top: 0;
  }

  .modal-header {
    padding-bottom: 0;
    border: none;
  }
}
</style>

<style lang="scss" scoped>
@import '../scss/variables';

.projects {
  margin: 1rem;
}

.website-title {
  padding-top: 5%;
  font-weight: 700;
  font-size: 4rem;
  color: #fefefe;
  a {
    color: #fefefe;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }
}

.website-subtitle {
  padding-bottom: 1%;
  text-align: left;
  font-family: 'Merriweather', 'serif';
  font-size: 0.75rem;
  color: #fefefe;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s;
  z-index: 2001;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.social-link {
  color: #fff;
}

.website-title {
  margin: 0;
  font-size: 3rem;
  text-align: left;
  font-family: 'Raleway';

  .last-name {
    color: $primary;
  }
}

.loading {
  text-align: center;
  margin-top: 30px;
}

.about-sidebar {
  background-color: #000;
  padding: 2rem;
  height: 100%;
  width: 100%;
}

@media (max-width: 767px) {
  .about-img {
    margin-bottom: 2rem;
    padding-right: 10vw;
    padding-left: 10vw;
  }

  .about-img-container {
    margin-left: auto;
    margin-right: auto;
  }
}

.social-links {
  .bubble {
    margin: 3px;
  }
}

.about-img {
  max-width: 100%;
  max-height: 40vh;
}

.modal-body-header {
  padding-top: 1rem;
}

.modal-image {
  width: 100%;
  height: 5rem;
  object-fit: cover;
}

.header {
  margin: 2rem 0;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: left;
}
</style>

<script>
import Component from 'vue-class-component';
import Vue from 'vue';
import PortfolioHeader from '@/components/PortfolioHeader';
import ProjectCard from '@/components/ProjectCard';
import SocialMediaBubble from '@/components/SocialMediaBubble';

import {
  MailIcon,
  HomeIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon
} from 'vue-feather-icons';

@Component({
  components: {
    PortfolioHeader,
    ProjectCard,
    MailIcon,
    HomeIcon,
    GithubIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
    bubble: SocialMediaBubble
  }
})
export default class Home extends Vue {
  projects = null;
  isShowing = false;
  modalProject = null;

  created() {
    import('@/assets/projects.json')
      .then(({ default: results }) => {
        this.projects = [...Array.from(results.projects)];
      })
      .catch(err => {
        console.error(err);
      });
  }

  displayMoreInfoModal(projectId) {
    if (this.projects) {
      this.modalProject = Array.from(this.projects).find(
        v => v.id === projectId
      );
      this.$refs.moreInfoModal.show();
    }
  }
}
</script>
