<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import LinkButton from '../components/LinkButton.vue'

const theme = useTheme()
const isDark = computed({
  get: () => theme.global.name.value === 'dark',
  set: (value: boolean) => {
    theme.global.name.value = value ? 'dark' : 'light'
  },
})
</script>

<template>
  <v-container fluid class="fill-height d-flex align-center justify-center pa-4">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-row class="justify-end mb-4">
          <v-col cols="auto" class="pa-0">
            <v-btn
              icon
              variant="flat"
              color="primary"
              size="large"
              class="ma-0"
              @click="isDark = !isDark"
              aria-label="Toggle dark and light mode"
            >
              <v-icon>{{ isDark ? 'mdi-moon-waxing-crescent' : 'mdi-white-balance-sunny' }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-card elevation="6" class="mx-auto rounded-xl" style="max-width: 420px;">
          <v-card-text class="text-center py-10 px-8">
            <v-avatar size="96" color="orange-lighten-3" class="mx-auto mb-4">
              <span class="text-h6 font-weight-bold">JA</span>
            </v-avatar>

            <p class="text-uppercase text-secondary text-caption font-weight-medium mb-2">Human-Centered Professional</p>
            <h1 class="text-h4 font-weight-bold mb-2">Jessica Arlich</h1>
            <p class="text-body-1 mb-6">
              Building thoughtful digital experiences with clarity, color, and craft.
            </p>
          </v-card-text>

          <v-divider />

          <v-card-text class="pa-6" style="display: grid; row-gap: 1.25rem;">
            <LinkButton
              label="Portfolio"
              url="https://example.com/portfolio"
              icon="mdi-briefcase"
            />

            <LinkButton
              label="LinkedIn"
              url="https://www.linkedin.com/"
              icon="mdi-linkedin"
            />

            <LinkButton
              label="Email"
              url="mailto:jessica@example.com"
              icon="mdi-email"
            />

            <LinkButton
              label="About"
              url="/about"
              icon="mdi-account"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
