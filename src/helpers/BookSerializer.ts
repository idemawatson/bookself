import { ClientBook } from "@/types/BooksResponse";
import { BookStatuses } from "@/types/IBookForm";
import { Book } from "@prisma/client";

export default class BookSerializer {
  book: Book;
  constructor(book: Book) {
    this.book = book;
  }
  execute(): ClientBook {
    return {
      id: this.book.id,
      book_id: this.book.book_id,
      title: this.book.title,
      author: this.book.author || undefined,
      publishedAt: this.book.published_at?.toISOString() || undefined,
      imageUrl: this.book.image_url || undefined,
      pageCount: this.book.page_count || 0,
      description: this.book.description || "",
      comment: this.book.comment || undefined,
      status: this.book.status as BookStatuses,
      completedAt: this.book.completed_at?.toISOString() || undefined,
    };
  }
}
