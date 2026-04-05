import type { User } from "@/common/models/interfaces/user.ts";

export const USERS: User[] = [
    {
        name: "Andrey",
        description: "Vue js programmer, 28 yo, progressive human",
        image: "https://avatars.mds.yandex.net/i?id=22d99797d336c21858e00cb2a74aae2f_l-5876030-images-thumbs&n=13",
        links: [
            {
                label: "Github",
                path: "https://github.com/rampagka",
            },
            {
                label: "Telegram",
                path: "https://t.me/rampagka",
            },
            {
                label: "VK",
                path: "https://vk.com/rampagka",
            },
        ],
    },
    {
        name: "Claude",
        description:
            "Best model for AI agents. Claude outperforms other models in AI agent scenarios from customer support to coding.",
        image: "https://avatars.mds.yandex.net/i?id=c001fe8b735cf2edbb944f7b88de38e5_l-4841096-images-thumbs&n=13",
        links: [
            {
                label: "claude.ai",
                path: "https://claude.ai",
            },
            {
                label: "claude.com",
                path: "https://claude.com",
            },
        ],
    },
];
