<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ label: string; url: string; icon: string }>()

const isInternal = computed(() => props.url.startsWith('/') || props.url.startsWith('#'))
const buttonAttrs = computed(() => {
  if (isInternal.value) {
    return { to: props.url }
  }
  return {
    href: props.url,
    target: '_blank',
    rel: 'noopener noreferrer',
  }
})
</script>

<template>
  <v-btn
    class="w-100 white--text"
    rounded="pill"
    variant="elevated"
    color="primary"
    size="large"
    v-bind="buttonAttrs"
    :aria-label="`${props.label} link`"
  >
    <v-icon style="margin-right: 0.5rem;">{{ props.icon }}</v-icon>
    {{ props.label }}
  </v-btn>
</template>
