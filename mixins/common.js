import config from '@/nuxt.config'
const mode = process.env.NODE_ENV === 'production'
export default {
  data() {
    return {
      isSm: false,
      isMd: false,
      isLg: false,
      isjobStatusDone: false,
      logText: '',
      initialURL: '',
      isProd: false
    }
  },
  created() {
    this.initialURL = config.env.INITIAL_URL // 現在のURLホスト (www.test.com or 10.0.0.8:5000)
    this.isProd = mode // 本番環境ならtrue
  },
  mounted() {
    this.checkWindowSize() // mobilesize
  },
  methods: {
    // break point check
    checkWindowSize() {
      if (window.innerWidth < 960) {
        this.isSm = true
      }
      if (window.innerWidth < 560) {
        this.isMd = true
      }
      if (window.innerWidth > 960) {
        this.isLg = true
      }
      console.log('isLg', this.isLg, 'isMd', this.isMd, 'isSm', this.isSm)
    },

    // json copy
    jsonParse(obj) {
      let tmpObj = {}
      tmpObj = JSON.stringify(obj)
      tmpObj = JSON.parse(tmpObj)
      return tmpObj
    },

    // sort
    sortbyOrder(result, ascOrDesc = 'asc') {
      // 昇順 asc / 降順 desc
      const tmp = []
      for (const n of result) {
        tmp.push(n)
      }
      tmp.sort(function(a, b) {
        // console.log('10')
        if (ascOrDesc === 'desc') {
          // console.log("降順");
          return a.order < b.order ? 1 : -1
        } else {
          // console.log("昇順");
          return a.order > b.order ? 1 : -1
        }
      })

      // console.log("result", result, "tmp", tmp);
      return tmp
    }
  }
  // computed: {
  //   jobStatusError() {
  //     return this.$store.getters['firestore_crud/jobStatusError']
  //   },
  //   jobStatusBusy() {
  //     return this.$store.getters['firestore_crud/jobStatusBusy']
  //   },
  //   jobStatusDone() {
  //     return this.$store.getters['firestore_crud/jobStatusDone']
  //   },
  //   jobStatusMessage() {
  //     return this.$store.getters['firestore_crud/jobStatusMessage']
  //   },
  //   isLogin() {
  //     return this.$store.getters.isLogin
  //   }
  // },
  // watch: {
  //   jobStatusDone(value) {
  //     if (value) {
  //       this.isjobStatusDone = true
  //     } else {
  //       this.isjobStatusDone = false
  //     }
  //   }
  // }
}
