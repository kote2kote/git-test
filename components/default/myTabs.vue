<template>
  <div>
    <div>
      <ul
        v-bind="$attrs"
        :class="[
          tabTypeClass,
          { 'rounded-md': icons },
          { 'rounded-full': pills },
          { 'rounded-md': !pills },
          { 'flex-col': vertical },
          { 'justify-center': centered },
          tabNavClasses
        ]"
        class="flex border-b"
        role="tablist"
      >
        <li
          v-for="tab in tabs"
          :key="tab.id"
          class="mr-1 active"
          data-toggle="tab"
          role="tablist"
        >
          <a
            :href="`#${tab.id}`"
            @click.prevent="activateTab(tab)"
            :class="{ active: tab.active }"
            data-toggle="tab"
            role="tablist"
            class="cm-tablist bg-orange-300 inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          >
            <tab-item-content :tab="tab"> </tab-item-content>
          </a>
        </li>
      </ul>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
/**
 * メモ
 * area-expand,class→true
 */
export default {
  name: 'Tabs', // props定義してない属性をこのvueのルートhtml属性として付与しない
  // https://isoppp.com/note/2018-12-16/what-is-vue-attrs/
  components: {
    TabItemContent: {
      props: ['tab'],
      render(h) {
        // 仮想DOM(VNODE)
        // https://jp.vuejs.org/v2/guide/render-function.html#%E4%BB%AE%E6%83%B3-DOM
        // <i>のところはdivで囲って要素を再整形
        console.log(h('div', [this.tab.$slots.label || this.tab.label]))
        return h('div', [this.tab.$slots.label || this.tab.label])
      }
    }
  },
  inheritAttrs: false,
  provide() {
    return {
      addTab: this.addTab,
      removeTab: this.removeTab,
      hello: this.hello
    }
  },
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
        console.log(
          'value',
          value, // success
          acceptedValues.includes(value)
        )
        return acceptedValues.includes(value)
      }
    },
    activeTab: {
      type: String,
      default: ''
    },
    tabNavWrapperClasses: {
      type: [String, Object], // 複数の型の許容
      default: ''
    },
    tabNavClasses: {
      type: [String, Object],
      default: ''
    },
    tabContentClasses: {
      type: [String, Object],
      default: ''
    },
    vertical: Boolean,
    noContentSpace: Boolean,
    icons: Boolean,
    centered: Boolean,
    value: String,
    pills: Boolean
  },
  data() {
    return {
      tabs: []
    }
  },
  computed: {
    tabTypeClass() {
      const baseClass = this.pills ? 'pills' : 'tabs'
      if (this.type) {
        return `nav-${baseClass}-${this.type}`
      }
      return ''
    }
  },
  mounted() {
    console.log('mounted')
    console.log(this.tabs)
    // this.$nextTick(() => {
    //   // 更新済みのDOMに処理を行う
    //   if (this.value) {
    //     this.findAndActivateTab(this.value)
    //   }
    // })
  },
  methods: {
    findAndActivateTab(label) {
      // 押されたラベルに合致するラベルがあったら(true)ならactiveにする
      const tabToActivate = this.tabs.find((t) => t.label === label)
      if (tabToActivate) {
        this.activateTab(tabToActivate)
      }
    },
    activateTab(tab) {
      // if (this.handleClick) {
      //   this.handleClick(tab)
      // }
      this.deactivateTabs() // 一旦すべてのtabをfalseに
      tab.active = true
      // this.$emit('input', tab.label || tab.id)
    },
    deactivateTabs() {
      this.tabs.forEach((tab) => {
        tab.active = false
        console.log(tab.label)
      })
    },
    addTab(tab) {
      console.log('addTab')
      const index = this.$slots.default.indexOf(tab.$vnode)
      if (!this.activeTab && index === 0) {
        tab.active = true
      }
      if (this.activeTab === tab.name) {
        tab.active = true
      }
      this.tabs.splice(index, 0, tab)
    },
    removeTab(tab) {
      console.log('removeTab')
      const tabs = this.tabs
      const index = tabs.indexOf(tab)
      if (index > -1) {
        tabs.splice(index, 1)
      }
    },
    hello() {
      console.log('こんにちわ！こんにちわ！')
    }
  }
  // watch: {
  //   value(newVal) {
  //     console.log('newVal', newVal)
  //     this.findAndActivateTab(newVal)
  //   }
  // }
  // e
}
</script>
<style lang="scss" scoped>
.cm-tablist.active {
  @apply bg-white;
}
</style>
