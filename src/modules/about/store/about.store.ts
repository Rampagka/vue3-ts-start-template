import type { User } from "@/common/models/interfaces/user.ts";

import { defineStore } from "pinia";
import { ref } from "vue";

type ReadonlyUser<T> = {
    readonly [K in keyof T]: T[K];
};

export const useAboutStore = defineStore("about", () => {
    const defaultUser: ReadonlyUser<User> = {
        name: "Default",
        description: "It is a default user",
        image: "https://avatars.mds.yandex.net/i?id=7615b89352e1b39dca8f9356725c98ad_l-9149651-images-thumbs&n=13",
        links: [],
    };
    const user = ref<User>(structuredClone(defaultUser));

    const updateUser = (currentUser: User) => {
        user.value = currentUser;
    };

    const reset = () => {
        user.value = structuredClone(defaultUser);
    };

    return {
        user,
        updateUser,
        reset,
    };
});
