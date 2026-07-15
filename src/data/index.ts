import postsJson from "./posts.json";
import categoriesJson from "./categories.json";
import authorsJson from "./authors.json";

import type {
  Author,
  Category,
  Post,
} from "@/src/types";

export const posts = postsJson as Post[];

export const categories = categoriesJson as Category[];

export const authors = authorsJson as Author[];