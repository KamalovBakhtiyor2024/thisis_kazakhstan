<template lang="pug">
v-app
  the-navigation
  router-view
  the-footer(v-if="hideFooter")
  // Dialogs
  language-dialog(:open="this.$store.state.language_dialog")
  portal-poll-create-delete-dialog(:open="this.$store.state.poll_create_delete_dialog")
  multi-dialog
</template>

<script>
// Components
import TheNavigation from "@/components/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";
import LanguageDialog from "@/components/dialogs/LanguageDialog.vue";
import MultiDialog from "@/components/dialogs/MultiDialog.vue";
import PortalPollCreateDeleteDialog from "@/components/dialogs/PortalPollCreateDeleteDialog.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    TheNavigation,
    TheFooter,
    LanguageDialog,
    MultiDialog,
    PortalPollCreateDeleteDialog,
  },
  computed: {
    hideFooter() {
      if (
        this.$route.path !== "/portal-of-education" &&
        this.$route.path !== "/portal-of-education/" &&
        this.$route.path !== "/portal-of-education/polls" &&
        this.$route.path !== "/portal-of-education/responses" &&
        this.$route.path !== "/portal-of-education/statistics" &&
        this.$route.path !== "/portal-of-education/support" &&
        this.$route.path !== "/portal-of-education/polls-create" &&
        this.$route.path !== "/portal-of-education/my-polls"
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
:root {
  --main-blue: #1d64f2;
  --weather-color: #ffdf7b;
}

*,
*::after,
*::before {
  box-sizing: border-box;
  word-break: break-word;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
div,
span {
  color: #2b2b2b;
  margin: 0;
}

body {
  background-color: #f5f5f7;
}

.container {
  max-width: 1400px;
  padding: 12px 16px !important;
}

.select {
  & > div > div {
    box-shadow: none !important;
  }
}

.v-input.portal-field {
  & > div > div {
    box-shadow: 0 0 8px 0 #ededed !important;
    border-radius: 15px !important;
  }
}

.v-application {
  font-family: "Montserrat", sans-serif !important;
  background-color: #f5f5f7 !important;
}

.v-dialog {
  overflow: hidden;
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 24px;
  }
}
</style>
