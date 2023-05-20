import { UserRecord } from '@prisma/client'
import { getRestPages, getProgress } from './levelUtils'
import { ClientUserRecord } from '@/types/ClientUserRecord'

type Arg = {
  bookCount: number
  pageCount: number
} & UserRecord

export default class UserRecordSerializer {
  userRecord: Arg
  constructor(userRecord: Arg) {
    this.userRecord = userRecord
  }
  execute(): ClientUserRecord {
    const level = this.userRecord.level
    const totalPages = this.userRecord.total_pages
    return {
      level,
      totalPages,
      restPages: getRestPages(level, totalPages),
      progress: getProgress(level, totalPages),
      bookCount: this.userRecord.bookCount,
      pageCount: this.userRecord.pageCount,
    }
  }
}
