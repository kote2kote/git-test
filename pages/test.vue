<template>
  <div class="min-h-screen bg-gray-200 text-gray-600">
    <div class="inner w-11/12 mx-auto pt-4">
      <client-only>
        <h1 class="text-6xl font-semibold">h1.Title</h1>

        <section class="Sec-flex mt-12">
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
                    <el-tag class="h-12 py-2 px-12 mr-4">Tag 1</el-tag>
                    <el-tag type="success">Tag 2</el-tag>
                    <el-tag type="info">Tag 3</el-tag>
                    <el-tag type="warning">Tag 4</el-tag>
                    <el-tag type="danger">Tag 5</el-tag>
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
          <section class="">
            <h2 class="text-3xl border-l-2 border-blue-600 pl-4 text-blue-900">
              element ui + tailwind
            </h2>
            <hr class="border-dotted border-gray-500 my-4" />
            <div class="inner tw-pre-inner">
              <div class="outer bg-yellow-500">
                <div class="flex">
                  <div class="flex-1">
                    <el-row>
                      <el-button>Default</el-button>
                      <el-button
                        type="primary"
                        class="bg-pink-600 hover:bg-pink-500 border-pink-400 hover:border-pink-300"
                        >Primary</el-button
                      >
                      <el-button type="success">Success</el-button>
                      <el-button type="info">Info</el-button>
                      <el-button type="warning">Warning</el-button>
                      <el-button type="danger">Danger</el-button>
                    </el-row>

                    <el-row>
                      <el-button plain>Plain</el-button>
                      <el-button type="primary" plain>Primary</el-button>
                      <el-button type="success" plain>Success</el-button>
                      <el-button type="info" plain>Info</el-button>
                      <el-button type="warning" plain>Warning</el-button>
                      <el-button type="danger" plain>Danger</el-button>
                    </el-row>

                    <el-row>
                      <el-button round>Round</el-button>
                      <el-button type="primary" round>Primary</el-button>
                      <el-button type="success" round>Success</el-button>
                      <el-button type="info" round>Info</el-button>
                      <el-button type="warning" round>Warning</el-button>
                      <el-button type="danger" round>Danger</el-button>
                    </el-row>

                    <el-row>
                      <el-button icon="el-icon-search" circle></el-button>
                      <el-button
                        type="primary"
                        icon="el-icon-edit"
                        circle
                      ></el-button>
                      <el-button
                        type="success"
                        icon="el-icon-check"
                        circle
                      ></el-button>
                      <el-button
                        type="info"
                        icon="el-icon-message"
                        circle
                      ></el-button>
                      <el-button
                        type="warning"
                        icon="el-icon-star-off"
                        circle
                      ></el-button>
                      <el-button
                        type="danger"
                        icon="el-icon-delete"
                        circle
                      ></el-button>
                    </el-row>
                  </div>
                  <!--// flex-1-->

                  <div class="flex-1 bg-blue-900">
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

          <section class="">
            <h2 class="text-3xl border-l-2 border-blue-600 pl-4 text-blue-900">
              element ui component test
            </h2>
            <hr class="border-dotted border-gray-500 my-4" />
            <div class="inner tw-pre-inner">
              <div class="outer bg-yellow-500">
                <div class="flex">
                  <div class="flex-1 flex justify-center self-center">
                    <el-button plain @click="open1">
                      Top Right
                    </el-button>
                    <el-button plain @click="open2">
                      Bottom Right
                    </el-button>
                    <el-button plain @click="open3">
                      Bottom Left
                    </el-button>
                    <el-button plain @click="open4">
                      Top Left
                    </el-button>
                  </div>
                  <!--// flex-1-->

                  <div class="flex-1 bg-blue-900">
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

          <section class="">
            <h2 class="text-3xl border-l-2 border-blue-600 pl-4 text-blue-900">
              h2.Title
            </h2>
            <hr class="border-dotted border-gray-500 my-4" />
            <div class="inner tw-pre-inner">
              <div class="outer bg-white w-full">
                <div class="flex">
                  <div
                    class="flex-1 flex justify-center self-center max-h overflow-y-auto"
                  >
                    <div
                      class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
                    >
                      <div class="absolute inset-0">
                        <div class="bg-white h-1/3 sm:h-2/3"></div>
                      </div>
                      <div class="relative max-w-7xl mx-auto">
                        <div class="text-center">
                          <h2
                            class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
                          >
                            From the blog
                          </h2>
                          <p
                            class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4"
                          >
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ipsa libero labore natus atque, ducimus sed.
                          </p>
                        </div>
                        <div
                          class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
                        >
                          <div
                            class="flex flex-col rounded-lg shadow-lg overflow-hidden"
                          >
                            <div class="flex-shrink-0">
                              <img
                                class="h-48 w-full object-cover"
                                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                                alt=""
                              />
                            </div>
                            <div
                              class="flex-1 bg-white p-6 flex flex-col justify-between"
                            >
                              <div class="flex-1">
                                <p
                                  class="text-sm leading-5 font-medium text-indigo-600"
                                >
                                  <a href="#" class="hover:underline">
                                    Blog
                                  </a>
                                </p>
                                <a href="#" class="block">
                                  <h3
                                    class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                                  >
                                    Boost your conversion rate
                                  </h3>
                                  <p
                                    class="mt-3 text-base leading-6 text-gray-500"
                                  >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Architecto accusantium
                                    praesentium eius, ut atque fuga culpa,
                                    similique sequi cum eos quis dolorum.
                                  </p>
                                </a>
                              </div>
                              <div class="mt-6 flex items-center">
                                <div class="flex-shrink-0">
                                  <a href="#">
                                    <img
                                      class="h-10 w-10 rounded-full"
                                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div class="ml-3">
                                  <p
                                    class="text-sm leading-5 font-medium text-gray-900"
                                  >
                                    <a href="#" class="hover:underline">
                                      Roel Aufderhar
                                    </a>
                                  </p>
                                  <div
                                    class="flex text-sm leading-5 text-gray-500"
                                  >
                                    <time datetime="2020-03-16">
                                      Mar 16, 2020
                                    </time>
                                    <span class="mx-1">
                                      &middot;
                                    </span>
                                    <span>
                                      6 min read
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="flex flex-col rounded-lg shadow-lg overflow-hidden"
                          >
                            <div class="flex-shrink-0">
                              <img
                                class="h-48 w-full object-cover"
                                src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                alt=""
                              />
                            </div>
                            <div
                              class="flex-1 bg-white p-6 flex flex-col justify-between"
                            >
                              <div class="flex-1">
                                <p
                                  class="text-sm leading-5 font-medium text-indigo-600"
                                >
                                  <a href="#" class="hover:underline">
                                    Video
                                  </a>
                                </p>
                                <a href="#" class="block">
                                  <h3
                                    class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                                  >
                                    How to use search engine optimization to
                                    drive sales
                                  </h3>
                                  <p
                                    class="mt-3 text-base leading-6 text-gray-500"
                                  >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Velit facilis asperiores
                                    porro quaerat doloribus, eveniet dolore.
                                    Adipisci tempora aut inventore optio animi.,
                                    tempore temporibus quo laudantium.
                                  </p>
                                </a>
                              </div>
                              <div class="mt-6 flex items-center">
                                <div class="flex-shrink-0">
                                  <a href="#">
                                    <img
                                      class="h-10 w-10 rounded-full"
                                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div class="ml-3">
                                  <p
                                    class="text-sm leading-5 font-medium text-gray-900"
                                  >
                                    <a href="#" class="hover:underline">
                                      Brenna Goyette
                                    </a>
                                  </p>
                                  <div
                                    class="flex text-sm leading-5 text-gray-500"
                                  >
                                    <time datetime="2020-03-16">
                                      Mar 16, 2020
                                    </time>
                                    <span class="mx-1">
                                      &middot;
                                    </span>
                                    <span>
                                      6 min read
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="flex flex-col rounded-lg shadow-lg overflow-hidden"
                          >
                            <div class="flex-shrink-0">
                              <img
                                class="h-48 w-full object-cover"
                                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                alt=""
                              />
                            </div>
                            <div
                              class="flex-1 bg-white p-6 flex flex-col justify-between"
                            >
                              <div class="flex-1">
                                <p
                                  class="text-sm leading-5 font-medium text-indigo-600"
                                >
                                  <a href="#" class="hover:underline">
                                    Case Study</a
                                  >
                                </p>
                                <a href="#" class="block">
                                  <h3
                                    class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                                  >
                                    Improve your customer experience
                                  </h3>
                                  <p
                                    class="mt-3 text-base leading-6 text-gray-500"
                                  >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Sint harum rerum
                                    voluptatem quo recusandae magni placeat
                                    saepe molestiae, sed excepturi cumque
                                    corporis perferendis hic.
                                  </p>
                                </a>
                              </div>
                              <div class="mt-6 flex items-center">
                                <div class="flex-shrink-0">
                                  <a href="#">
                                    <img
                                      class="h-10 w-10 rounded-full"
                                      src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div class="ml-3">
                                  <p
                                    class="text-sm leading-5 font-medium text-gray-900"
                                  >
                                    <a href="#" class="hover:underline">
                                      Daniela Metz
                                    </a>
                                  </p>
                                  <div
                                    class="flex text-sm leading-5 text-gray-500"
                                  >
                                    <time datetime="2020-03-16">
                                      Mar 16, 2020
                                    </time>
                                    <span class="mx-1">
                                      &middot;
                                    </span>
                                    <span>
                                      6 min read
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--// flex-1-->

                  <div class="flex-1 bg-blue-900 max-h overflow-y-auto">
                    <my-tabs class="bg-yellow-500">
                      <my-tab label="template" class="language-js bg-blue-900">
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
        </section>
      </client-only>
    </div>
  </div>
</template>

<script>
import { Button, myTabs, myTab } from '@/components'
// import Tabs from '~/components/mystudy/tabs/Tabs'
// import TabPane from '~/components/mystudy/tabs/Tab'
export default {
  components: {
    myTabs,
    myTab,
    [Button.name]: Button
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    open1() {
      this.$notify({
        title: 'Custom Position',
        message: "I'm at the top right corner"
      })
    },

    open2() {
      this.$notify({
        title: 'Custom Position',
        message: "I'm at the bottom right corner",
        position: 'bottom-right'
      })
    },

    open3() {
      this.$notify({
        title: 'Custom Position',
        message: "I'm at the bottom left corner",
        position: 'bottom-left'
      })
    },

    open4() {
      this.$notify({
        title: 'Custom Position',
        message: "I'm at the top left corner",
        position: 'top-left'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '~/assets/scss/_tw-util'; // tailwind common apply tags
</style>
