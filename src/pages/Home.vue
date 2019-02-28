<template>
  <div>
    <portfolio-header/>
    <!--TODO <portfolio-nav id="navbar"/>-->
    <b-container>
      <div class="header" id="projects">Projects</div>
      <b-row>
        <b-col v-for="project of projects" :key="project.name" sm="6" md="4">
          <project-card
            @more-info-clicked="displayMoreInfoModal"
            :image-path="project.imagePath"
            :project="project"
          />
        </b-col>
      </b-row>
      <div class="header" id="about">About</div>
      <b-row>
        <b-col
          order-sm="2"
          order-md="2"
          md="8"
          sm="12"
        >I am a passionate problem-solver who loves exploring new technologies and applications to create products that will resonate with users and also be maintainable for years to come.</b-col>
        <b-col order-sm="1" order-md="1" md="4" sm="12">
          <b-img class="about-img" rounded thumbnail src="/static/images/me.jpg"/>
        </b-col>
      </b-row>
    </b-container>
    <br>
    <br>
    <br>
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
                <h3 class="modal-body-header">{{modalProject.name}}</h3>
                <p>{{ modalProject.description }}</p>
              </b-col>
            </b-row>
          </b-container>
          <div slot="modal-footer">
            <b-button
              v-if="modalProject.githubUrl"
              :href="modalProject.githubUrl"
              variant="default"
            >GitHub</b-button>
            <b-button
              v-if="modalProject.actionUrl"
              :href="modalProject.actionUrl"
              variant="primary"
            >{{ modalProject.actionText || 'Install' }}</b-button>
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
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s;
  z-index: 2001;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
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
  text-align: center;
}
</style>


<script>
import Component from 'vue-class-component';
import Vue from 'vue';
import PortfolioHeader from '@/components/PortfolioHeader';
import PortfolioNav from '@/components/PortfolioNav';
import ProjectCard from '@/components/ProjectCard';

import ProjectsJSON from '@/assets/projects.json';

@Component({
  components: {
    PortfolioHeader,
    PortfolioNav,
    ProjectCard
  }
})
export default class Home extends Vue {
  projects = ProjectsJSON;
  isShowing = false;
  modalProject = null;

  displayMoreInfoModal(projectId) {
    this.modalProject = Array.from(this.projects).find(v => v.id === projectId);
    this.$refs.moreInfoModal.show();
  }
}
</script>
