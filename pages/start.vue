<template>
  <div class="min-h-screen bg-gray-200 text-gray-600">
    <div class="inner w-11/12 mx-auto pt-4">
      <client-only>
        <h1 class="text-6xl font-semibold">h1.Title</h1>

        <section class="Sec- mt-12">
          <!-- please copy latest alfred snipetts // start -->
          <section class="">
            <h2 class="text-3xl border-l-2 border-blue-600 pl-4 text-blue-900">
              h2.Title
            </h2>
            <hr class="border-dotted border-gray-500 my-4" />
            <div class="inner tw-pre-inner">
              <div class="outer bg-yellow-500 w-full">
                <div class="flex">
                  <div
                    class="flex-1 flex justify-center self-center max-h overflow-y-auto"
                  >
                    <h3 class="text-xl font-semibold">
                      ボタン
                    </h3>
                    <c-button type="success" pill>Button</c-button>
                    <c-button type="danger">Button</c-button>
                  </div>
                  <!--// flex-1-->

                  <div class="flex-1 bg-blue-900 max-h overflow-y-auto">
                    <my-tabs class="bg-yellow-500">
                      <my-tab label="template" class="language-js">
                        <pre class="tw-pre">
                <code>
&lt;c-button&nbsp;type="success"&nbsp;pill&gt;Button&lt;/c-button&gt;
&lt;c-button&nbsp;type="danger"&gt;Button&lt;/c-button&gt;
                </code>
              </pre>
                      </my-tab>

                      <my-tab label="component" class="language-js">
                        <pre class="tw-pre">
                <code>
&lt;button&nbsp;class="btn&nbsp;btn-blue"&nbsp;:class="[TypeClass,&nbsp;{&nbsp;'rounded-full':&nbsp;pill&nbsp;}]"&gt;
&nbsp;&nbsp;&lt;slot&gt;&lt;/slot&gt;
&lt;/button&gt;
                </code>
              </pre>
                      </my-tab>
                    </my-tabs>
                  </div>
                  <!--// flex-1-->
                </div>
              </div>
            </div>
          </section>
          <!-- please copy latest alfred snipetts // end -->
        </section>
      </client-only>
    </div>
  </div>
</template>

<script>
import { Button, myTabs, myTab } from '@/components'
export default {
  components: {
    myTabs,
    myTab,
    [Button.name]: Button
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss" scoped></style>
