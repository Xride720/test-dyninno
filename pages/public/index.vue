<template>
  <section class="public-section">
    <ul class="person-info-list">
      <span class="header">Personal info</span>
      <li v-for="info of personalInfo" class="person-info-list-item">
        {{info}}
      </li>
    </ul>
    <ul class="experience-list">
      <span class="header">Working experience</span>
      <li v-for="exp of workingExperience" class="experience-list-item">
        {{exp}}
      </li>
    </ul>
    <ul class="projects-list">
      <span class="header">Projects done</span>
      <li v-for="project of projects" class="projects-list-item">
        {{project}}
      </li>
    </ul>
    <ul class="tech-stack-list">
      <span class="header">Technology stack</span>
      <li v-for="tech of techStack" class="tech-stack-list-item">
        {{tech}}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { personalInfo, projects, techStack, workingExperience } from './constants';
import { PropsType } from './models';
import './styles.scss';

export default defineComponent<PropsType>({
  data() {
    return {
      personalInfo,
      workingExperience,
      projects,
      techStack
    }
  }
})
</script>