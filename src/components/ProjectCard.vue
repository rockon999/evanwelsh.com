 <template>
  <b-card :title="project.name" :img-src="imagePath" class="project-card">
    <b-card-text class="no-wrap">{{project.description || "..."}}</b-card-text>
    <b-button
      v-if="project.actionUrl"
      :href="project.actionUrl"
      variant="primary"
    >{{project.actionText || 'Install'}}</b-button>
    <b-button @click="moreInfoClicked" variant="secondary">More Info</b-button>
  </b-card>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
}

.no-wrap {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.project-card {
  overflow: hidden;
  border-radius: 10px;
  margin: 1rem 0.5rem;
}
</style>


<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    imagePath: {
      type: String,
      required: true
    },
    project: {
      type: Object,
      required: true
    }
  }
})
export default class ProjectCard extends Vue {
  moreInfoClicked() {
    this.$emit('more-info-clicked', this.project.id);
  }
}
</script>
