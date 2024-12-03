"use server";
import { db } from "@/shared/lib/db";

export async function createPost(data = null) { 
  await db.post.create({
    data: {
      title: "Title 1",
      content: "Content 1",
    },
  });
}

export async function getPost(data = null) {
  const res = await db.post.findMany();
  return res;
}
