
export default {
  path: '/daybook',
  name: 'daybook',
  component: () => import(/* webpackChunkName: "DayBookLayout" */ '@/modules/daybook/layouts/DayBookLayout'),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () => import(/* webpackChunkName: "NoEntrySelected" */ '@/modules/daybook/views/NoEntrySelected'),
    }
  ]
}