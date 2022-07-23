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
                v-for="headerLink in headerLinks"
                :key="headerLink.url"
                :href="headerLink.url"
              >
                <v-list-item-title>{{ headerLink.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <!-- sm 以上なら list -->
        <div class="d-none d-sm-flex">
          <a
            v-for="headerLink in headerLinks"
            :key="headerLink.url"
            :href="headerLink.url"
            class="text-decoration-none text-white pl-5"
          >
            {{ headerLink.title }}
          </a>
        </div>
      </v-app-bar>
      <v-main></v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
type HeaderLink = {
  title: string;
  url: string;
};

const headerLinks: HeaderLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/Tiramister/integer-information-spa",
  },
  {
    title: "作者 Twitter",
    url: "https://twitter.com/mistterpp",
  },
];
</script>
