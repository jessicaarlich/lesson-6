<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { RouterLink } from 'vue-router'

const theme = useTheme()

const isDark = computed(() => theme.global.current.value.dark)

function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <v-container fluid class="fill-height d-flex align-center justify-center pa-4">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="pa-6 text-center rounded-xl" elevation="6">
          <div class="d-flex justify-space-between align-center mb-4">
            <span class="text-caption text-medium-emphasis">Theme</span>
            <v-btn
              variant="tonal"
              size="small"
              rounded="pill"
              prepend-icon="mdi-theme-light-dark"
              @click="toggleTheme"
            >
              {{ isDark ? 'Light' : 'Dark' }}
            </v-btn>
          </div>

          <v-avatar size="96" color="orange-lighten-3" class="mx-auto mb-4">
            <span class="text-h6 font-weight-bold">JA</span>
          </v-avatar>

          <p class="text-uppercase text-orange text-caption font-weight-medium mb-2">Human-Centered Professional</p>
          <h1 class="text-h4 font-weight-bold mb-2">Jessica Arlich</h1>
          <p class="text-body-1 mb-6">
            Building thoughtful digital experiences with clarity, color, and craft.
          </p>

          <v-btn
            class="mb-3"
            block
            rounded="pill"
            variant="outlined"
            color="primary"
            href="https://example.com/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            prepend-icon="mdi-briefcase"
          >
            Portfolio
          </v-btn>

          <v-btn
            class="mb-3"
            block
            rounded="pill"
            variant="outlined"
            color="primary"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            prepend-icon="mdi-linkedin"
          >
            LinkedIn
          </v-btn>

          <v-btn
            class="mb-3"
            block
            rounded="pill"
            variant="outlined"
            color="primary"
            href="mailto:jessica@example.com"
            prepend-icon="mdi-email"
          >
            Email
          </v-btn>

          <v-btn
            block
            rounded="pill"
            variant="flat"
            color="orange"
            to="/about"
            prepend-icon="mdi-account"
          >
            About
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
