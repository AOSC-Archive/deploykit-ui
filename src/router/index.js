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
    },
    {
      path: "/rescue",
      name: "rescue",
      component: RescueKitView,
    },
    {
      path: "/users",
      name: "users",
      component: UserView,
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
    },
    {
      path: "/mirrors",
      name: "mirrors",
      component: MirrorView,
    },
    {
      path: "/locales",
      name: "locales",
      component: LocaleView,
    },
    {
      path: "/confirm",
      name: "confirm",
      component: ConfirmView,
    },
    {
      path: "/hostname",
      name: "hostname",
      component: HostnameView,
    },
    {
      path: "/partitions",
      name: "partitions",
      component: PartitionView,
    },
    {
      path: "/variants",
      name: "variants",
      component: VariantView,
    },
    {
      path: "/install",
      name: "install",
      component: InstallView,
    },
  ],
});

export default router;
