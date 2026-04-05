import type { Link } from "@/common/models/interfaces/link.ts";

export interface User {
    name: string;
    description: string;
    image: string;
    links: Link[];
}
