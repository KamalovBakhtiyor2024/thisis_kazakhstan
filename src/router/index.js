import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageNotFound from "../views/PageNotFound.vue";
import CategoryView from "../views/CategoryView.vue";
import NationalWeatherForecastView from "../views/NationalWeatherForecastView.vue";
import PortalOfEducationView from "../views/PortalOfEducationView.vue";
import SigninView from "../views/SigninView.vue";
import SignupView from "../views/SignupView.vue";
import PortalProfileView from "../components/portal/PortalProfileView.vue";
import PortalStatisticsView from "../components/portal/PortalStatisticsView.vue";
import PortalResponsesView from "../components/portal/PortalResponsesView.vue";
import PortalPollsView from "../components/portal/PortalPollsView.vue";
import PortalPollCreateView from "../components/portal/PortalPollCreateView.vue";
import PortalMyPollsView from "../components/portal/PortalMyPollsView.vue";
import PortalSupportView from "../components/portal/PortalSupportView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/category/:category",
    name: "category",
    component: CategoryView,
  },
  {
    path: "/national-weather-forecast",
    name: "national-weather-forecast",
    component: NationalWeatherForecastView,
  },
  {
    path: "/portal-of-education",
    name: "portal-of-education",
    component: PortalOfEducationView,
    children: [
      {
        path: "/portal-of-education",
        component: PortalProfileView,
      },
      {
        path: "/portal-of-education/polls",
        component: PortalPollsView,
      },
      {
        path: "/portal-of-education/polls-create",
        component: PortalPollCreateView,
      },
      {
        path: "/portal-of-education/my-polls",
        component: PortalMyPollsView,
      },
      {
        path: "/portal-of-education/statistics",
        component: PortalStatisticsView,
      },
      {
        path: "/portal-of-education/responses",
        component: PortalResponsesView,
      },
      {
        path: "/portal-of-education/support",
        component: PortalSupportView,
      },
    ],
  },
  {
    path: "/signin",
    name: "signin",
    component: SigninView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "*",
    name: "404",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
