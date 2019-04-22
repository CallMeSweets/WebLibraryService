package com.grzelak.demo.DB;

import com.grzelak.demo.model.Book;
import com.grzelak.demo.model.Library;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LibraryRepository extends JpaRepository<Library, Long> {

    @Query("SELECT lib FROM Library lib JOIN lib.bookList book WHERE book.id = :id")
    List<Library> findLibraryByBookId(Long id);

    @Query("SELECT lib FROM Library lib JOIN lib.bookList book WHERE book.title = :title")
    List<Library> findLibraryByBookTitle(String title);

    @Query("SELECT lib FROM Library lib JOIN lib.bookList book WHERE book.author = :author")
    List<Library> findLibraryByBookAuthor(String author);

    @Query("SELECT book FROM Library lib JOIN lib.bookList book WHERE book.author LIKE %:filter% OR book.title LIKE %:filter%")
    List<Book> findAllBooksFilter(String filter);


}
