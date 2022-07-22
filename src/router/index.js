import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "@/views/WelcomeView.vue";
import AbortView from "@/views/AbortView.vue";
import CompleteView from "@/views/CompleteView.vue";
import ErrorView from "@/views/ErrorView.vue";
import HostnameView from "@/views/HostnameView.vue";
import UserView from "@/views/UserView.vue";
import ConfirmView from "@/views/ConfirmView.vue";
import SwapFileView from "@/views/SwapFileView.vue";
import LocaleView from "@/views/LocaleView.vue";
import MirrorView from "@/views/MirrorView.vue";
import RescueKitView from "@/views/RescueKitView.vue";
import PartitionView from "@/views/PartitionView.vue";
import VariantView from "@/views/VariantView.vue";
import InstallView from "@/views/InstallView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: WelcomeView,
      meta: { steps: 0 },
    },
    {
      path: "/rescue",
      name: "rescue",
      component: RescueKitView,
      meta: { steps: 0 },
    },
    {
      path: "/users",
      name: "users",
      component: UserView,
      meta: { steps: 1 },
    },
    {
      path: "/abort",
      name: "abort",
      component: AbortView,
    },
    {
      path: "/finish",
      name: "complete",
      component: CompleteView,
      meta: { steps: 4 },
    },
    {
      path: "/error",
      name: "error",
      component: ErrorView, // TODO: parameters
    },
    {
      path: "/swapfile",
      name: "swapfile",
      component: SwapFileView,
      meta: { steps: 1 },
    },
    {
      path: "/mirrors",
      name: "mirrors",
      component: MirrorView,
      meta: { steps: 0 },
    },
    {
      path: "/locales",
      name: "locales",
      component: LocaleView,
      meta: { steps: 1 },
    },
    {
      path: "/confirm",
      name: "confirm",
      component: ConfirmView,
      meta: { steps: 1 },
    },
    {
      path: "/hostname",
      name: "hostname",
      component: HostnameView,
      meta: { steps: 1 },
    },
    {
      path: "/partitions",
      name: "partitions",
      component: PartitionView,
      meta: { steps: 0 },
    },
    {
      path: "/variants",
      name: "variants",
      component: VariantView,
      meta: { steps: 0 },
    },
    {
      path: "/install",
      name: "install",
      component: InstallView,
      meta: { steps: 2 },
    },
  ],
});

export default router;
