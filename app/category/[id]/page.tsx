"use client"

import { useParams } from "next/navigation"
import { AppConfig } from "@/lib/app-config"
import { notFound } from "next/navigation"
import { CategoryPageContent } from "@/components/category-page-content"

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params.id as string
  const category = AppConfig.categories.find((c) => c.id === categoryId)

  if (!category) {
    notFound()
  }

  return <CategoryPageContent category={category} />
}
