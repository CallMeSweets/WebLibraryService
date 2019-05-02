package com.grzelak.demo.DB;

import com.grzelak.demo.model.Book;
import com.grzelak.demo.model.LibraryUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LibraryUserRepository extends JpaRepository<LibraryUser, Long> {



    @Query("SELECT book FROM LibraryUser libUser JOIN libUser.bookListBorrowedByUser book WHERE libUser.id = :id")
    List<Book> findAllUserBooks(Long id);


}
