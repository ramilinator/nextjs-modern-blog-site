import postsJson from "./posts.json";
import categoriesJson from "./categories.json";
import authorsJson from "./authors.json";
import pagesJson from "./pages.json";

import type {
  Author,
  Category,
  Post,
  Page,
} from "@/src/types";

export const posts = postsJson as Post[];

export const categories = categoriesJson as Category[];

export const authors = authorsJson as Author[];

export const pages = pagesJson as Page[];