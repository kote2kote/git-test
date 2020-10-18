<template>
  <div class="c-button inline-block">
    <button :class="[TypeClass, { 'rounded-full': pill }]" class="btn btn-blue">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (value) => {
        const acceptedValues = [
          'primary',
          'info',
          'success',
          'warning',
          'danger',
          'default',
          'neutral'
        ]
        return acceptedValues.includes(value)
      }
    },
    pill: Boolean
  },
  computed: {
    TypeClass() {
      if (this.type) {
        return `type-${this.type}`
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  @apply font-bold py-2 px-4;
}

.btn-blue {
  @apply bg-blue-500 text-white;
}

.type-success {
  @apply bg-green-600;
}

.type-info {
}

.type-default {
}
</style>
