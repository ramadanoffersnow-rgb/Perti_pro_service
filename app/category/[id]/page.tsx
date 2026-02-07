import { AppConfig } from "@/lib/app-config"
import { notFound } from "next/navigation"
import { CategoryPageContent } from "@/components/category-page-content"

export function generateStaticParams() {
  return AppConfig.categories.map((c) => ({ id: c.id }))
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const category = AppConfig.categories.find((c) => c.id === id)

  if (!category) {
    notFound()
  }

  return <CategoryPageContent category={category} />
}
