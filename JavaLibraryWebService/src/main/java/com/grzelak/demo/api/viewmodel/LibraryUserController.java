package com.grzelak.demo.api.viewmodel;

import com.grzelak.demo.DB.LibraryUserRepository;
import com.grzelak.demo.model.Book;
import com.grzelak.demo.model.LibraryUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/users")
public class LibraryUserController {

    @Autowired
    private LibraryUserRepository libraryUserRepository;

    @GetMapping(value = "/all")
    public List<LibraryUser> getAllUsers(){
      return libraryUserRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public LibraryUser getUserById(@PathVariable Long id){
        return libraryUserRepository.findById(id).get();
    }

    @GetMapping("/{id}/books")
    public List<Book> getAllUserBooks(@PathVariable Long id){
       return libraryUserRepository.findAllUserBooks(id);
    }

    @PostMapping(value = "/add")
    @ResponseBody
    public void addLibraryUser(@RequestBody LibraryUser libraryUser){
        libraryUserRepository.save(libraryUser);
    }

    @PostMapping(value = "/add/book", params = "userId")
    @ResponseBody
    public void addBookToUser( @RequestParam("userId") Long userId, @RequestBody Book book){
        LibraryUser libraryUser = libraryUserRepository.findById(userId).get();
        libraryUser.addBook(book);
        libraryUserRepository.save(libraryUser);
    }

    @PostMapping(value = "/remove/book", params = {"userId", "bookId"})
    public void removeUserBook(@RequestParam("userId") Long userId, @RequestParam("bookId") Long bookId){
      LibraryUser libraryUser = libraryUserRepository.findById(userId).get();
      libraryUser.removeBook(bookId);
      libraryUserRepository.save(libraryUser);
    }

}
