
export default {
  path: '/daybook',
  name: 'daybook',
  component: () => import(/* webpackChunkName: "DayBookLayout" */ '@/modules/daybook//layouts/DayBookLayout'),
  children: [
    
  ]
}