<template>
  <v-app>
    <v-layout>
      <v-app-bar color="primary" density="comfortable">
        <v-app-bar-title>Integer Information</v-app-bar-title>
        <!-- sm 未満なら icon  -->
        <div class="d-flex d-sm-none">
          <v-menu bottom left>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props">
                <v-icon size="x-large" icon="mdi-menu" />
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                href="https://github.com/Tiramister/integer-information-spa"
              >
                <v-list-item-title>GitHub</v-list-item-title>
              </v-list-item>
              <v-list-item href="https://twitter.com/mistterpp">
                <v-list-item-title>Twitter (@mistterpp)</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <!-- sm 以上なら list -->
        <div class="d-none d-sm-flex">
          <a
            class="text-decoration-none text-white"
            href="https://github.com/Tiramister/integer-information-spa"
          >
            GitHub
          </a>
          <a
            class="text-decoration-none text-white pl-5"
            href="https://twitter.com/mistterpp"
          >
            Twitter (@mistterpp)
          </a>
        </div>
      </v-app-bar>
      <v-main></v-main>
    </v-layout>
  </v-app>
</template>
