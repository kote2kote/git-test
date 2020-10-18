<template>
  <div v-show="active" :id="id || label" :class="{ active: active }" class="">
    <slot></slot>
    <!-- <div class=""> -->
    <!-- <pre class="bg-gray-800 text-green-500 text-sm" v-if="type !== 'preview'">
        <code>
          
          <slot></slot>
        </code>
      </pre>
      <div class="p-4" v-else>
        <slot></slot>
      </div> -->
    <!-- </div> -->
    <!-- <div class="p-10 bg-gray-800 text-green-500 text-sm">
      <slot></slot>
    </div> -->
    <!-- <ul class="p-10 bg-gray-800 text-green-500 text-sm">
      <li class="mr-1">label: {{ label }}</li>
    </ul> -->
  </div>
</template>
<script>
export default {
  name: 'TabPane',
  props: ['type', 'label', 'id'],
  inject: ['addTab', 'removeTab', 'hello'],
  // 共通の関数
  // https://qiita.com/itouuuuuuuuu/items/bcad408842c7723e7ca3

  data() {
    return {
      active: false
    }
  },
  computed: {
    typeClass() {
      if (this.type) {
        return `language-${this.type}`
      }
    }
  },
  mounted() {
    this.addTab(this)
    this.hello() // injectで親の関数を共通化
    Prism.highlightAll()
  },
  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    this.removeTab(this)
  }
}
</script>
<style lang="scss" scoped>
span.token.tag:not(body) {
  background-color: #000 !important;
}
</style>
