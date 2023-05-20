import { FC } from 'react'
import { MainLayout } from '@/components/layout/MainLayout'
import SearchTemplate from '@/components/search/SearchTemplate'

const Page: FC & { layout?: typeof MainLayout } = SearchTemplate
Page.layout = MainLayout

export default Page
