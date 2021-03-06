// import lang from 'element-ui/lib/locale/lang/en'
// import locale from 'element-ui/lib/locale'

// export default () => {
//   // configure language
//   locale.use(lang)
// }

import Vue from 'vue'
// import ElementUI from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ja'
import locale from 'element-ui/lib/locale'

locale.use(lang)

import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  PageHeader,
  CascaderPanel,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui'

Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Autocomplete)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Alert)
Vue.use(Slider)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Upload)
Vue.use(Progress)
Vue.use(Spinner)
Vue.use(Badge)
Vue.use(Card)
Vue.use(Rate)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Cascader)
Vue.use(ColorPicker)
Vue.use(Transfer)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Link)
Vue.use(Divider)
Vue.use(Image)
Vue.use(Calendar)
Vue.use(Backtop)
Vue.use(PageHeader)
Vue.use(CascaderPanel)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

// import Vue from 'vue'
// import { Tree, Tag, Button } from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/ja'
// Vue.component(Tree.name, Tree)
// Vue.component(Tag.name, Tag)
// Vue.component(Button.name, Button)
// Vue.use({ locale })

// import Vue from 'vue'
// export default () => {
//   Vue.component('ElTree', () => import('element-ui/lib/tree'))
//   Vue.component('ElTag', () => import('element-ui/lib/tag'))
//   Vue.component('ElButton', () => import('element-ui/lib/button'))
// }

// export default () => {
//   Vue.component('ElTree', () =>
//     import(/* webpackChunkName: 'element-ui-tree' */ 'element-ui/lib/tree')
//   )
//   Vue.component('ElTag', () =>
//     import(/* webpackChunkName: 'element-ui-tag' */ 'element-ui/lib/tag')
//   )
//   Vue.component('ElButton', () =>
//     import(/* webpackChunkName: 'element-ui-button' */ 'element-ui/lib/button')
//   )
//   Vue.component('ElMessage', () =>
//     import(
//       /* webpackChunkName: 'element-ui-message' */ 'element-ui/lib/message'
//     )
//   )
//   Vue.component('ElTooltip', () =>
//     import(
//       /* webpackChunkName: 'element-ui-tooltip' */ 'element-ui/lib/tooltip'
//     )
//   )
//   Vue.component('ElNotification', () =>
//     import(/* webpackChunkName: 'element-ui-notification' */ 'element-ui')
//   )
//   // Vue.component('ElForm', () => import(/* webpackChunkName: 'element-ui-form' */ 'element-ui/lib/form'))
//   // Vue.component('ElFormItem', () => import(/* webpackChunkName: 'element-ui-form-item' */ 'element-ui/lib/form-item'))
//   // Vue.component('ElInput', () => import(/* webpackChunkName: 'element-ui-input' */ 'element-ui/lib/input'))
//   // Vue.component('ElContainer', () => import(/* webpackChunkName: 'element-ui-container' */ 'element-ui/lib/container'))
//   // Vue.component('ElDivider', () => import(/* webpackChunkName: 'element-ui-divider' */ 'element-ui/lib/divider'))
//   // Vue.component('ElDialog', () => import(/* webpackChunkName: 'element-ui-dialog' */ 'element-ui/lib/dialog'))
//   // Vue.component('ElMain', () => import(/* webpackChunkName: 'element-ui-main' */ 'element-ui/lib/main'))
//   // Vue.component('ElRow', () => import(/* webpackChunkName: 'element-ui-row' */ 'element-ui/lib/row'))
//   // Vue.component('ElCol', () => import(/* webpackChunkName: 'element-ui-col' */ 'element-ui/lib/col'))
// }
