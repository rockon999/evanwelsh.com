 <template>
  <b-card :img-src="imagePath" :no-gutters="true" class="project-card">
    <b-card-body>
      <b-img thumbnail alt="..."/>
      <div class="caption">
        <h3>{{projectName}}</h3>
        <p>{{projectDescription || "..."}}</p>
      </div>
      <b-button :href="actionUrl" variant="primary">Install</b-button>
      <b-button :href="moreInfoUrl" variant="default">More Info</b-button>
    </b-card-body>
  </b-card>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
}

.project-card {
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
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
    projectName: {
      type: String,
      required: true
    },
    projectDescription: {
      type: String,
      required: true
    },
    actionUrl: {
      type: String,
      required: true
    },
    moreInfoUrl: {
      type: String,
      required: true
    }
  }
})
export default class ProjectCard extends Vue {}
</script>
