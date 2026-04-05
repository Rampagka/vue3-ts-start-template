<script setup lang="ts">
import { USERS } from "@/common/consts/users.ts";

import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import { AboutContent, useAboutStore } from "@/modules/about/";

const route = useRoute();
const { updateUser } = useAboutStore();

watchEffect(() => {
    if ("name" in route.params) {
        const user = USERS.find((user) => user.name === route.params.name);
        if (user) updateUser(user);
    }
});
</script>

<template>
    <section class="h-full pt-20">
        <about-content />
    </section>
</template>

<style scoped></style>
