// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'stdout',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
})
prisma.$on('query', (e) => {
  console.log(`Query: \x1b[36m${e.query}\x1b[39m`)
  console.log(`Params: \x1b[35m${e.params}\x1b[39m`)
  console.log(`Duration: \x1b[32m${e.duration}ms\x1b[39m`)
})

export default prisma
