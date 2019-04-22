package com.grzelak.demo.api.viewmodel;

import com.grzelak.demo.DB.LibraryRepository;
import com.grzelak.demo.extraEnums.Decision;
import com.grzelak.demo.extraEnums.DecisionBook;
import com.grzelak.demo.model.Book;
import com.grzelak.demo.model.Library;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/libraries")
@CrossOrigin
public class LibraryController {

    @Autowired
    private LibraryRepository libraryRepository;

    @GetMapping(value = "/all")//
    List<Library> findAll(){
        return libraryRepository.findAll();
    }

    @GetMapping(value = "/{id}")//
    Library findAll(@PathVariable Long id){
        return libraryRepository.findById(id).get();
    }


    @GetMapping(value = "/{id}/info")//
    List<String> getLibraryInfo(@PathVariable Long id){
        Library lib = libraryRepository.findById(id).get();
        List<String> infoList = new ArrayList<>();
        infoList.add(lib.getName());
        infoList.add(lib.getAddress());
        infoList.add(lib.getOpenTime());
        return infoList;
    }

    @GetMapping(value = "/all/info")//
    List<String> getAllInfo(){
        List<Library> libraryList = libraryRepository.findAll();
        List<String> infoList = new ArrayList<>();

        for(Library lib: libraryList){
            infoList.add(lib.getName());
            infoList.add(lib.getAddress());
            infoList.add(lib.getOpenTime());
        }
        return infoList;
    }

    @GetMapping(value = "/book/{id}")//
    List<Library> findByBookId(@PathVariable Long id){
        return libraryRepository.findLibraryByBookId(id);
    }

    @GetMapping(value = "/book", params = "author") //
    List<Library> findByBookAuthor(@RequestParam("author") String author){
        return libraryRepository.findLibraryByBookAuthor(author);
    }

    @GetMapping(value = "/book", params = "title") //
    List<Library> findByBookTitle(@RequestParam("title") String title){
        return libraryRepository.findLibraryByBookTitle(title);
    }


    @GetMapping(value = "/books", params = "libraryID") //
    List<Book> getAllBooksFromLibrary(@RequestParam Long libraryID){
        Library lib = libraryRepository.findById(libraryID).get();
        return lib.getBookList();
    }

    @GetMapping(value = "/books", params = "filter") //
    List<Book> getAllBooksSearchedByUser(@RequestParam String filter){
        return libraryRepository.findAllBooksFilter(filter);
    }





    @PostMapping(value = "/add") //
    @ResponseBody
    void addLibrary(@RequestBody Library library){
        libraryRepository.save(library);
    }

    @PostMapping(value = "/add/book", params = "libraryID") //
    @ResponseBody
    void addBook(@RequestParam Long libraryID, @RequestBody Book book){

        Library lib = libraryRepository.findById(libraryID).get();
        lib.addBook(book);
        book.setLibrary(lib);
        libraryRepository.save(lib);

    }




    // library modification

    @PostMapping(value = "/{id}/mod", params = {"decision", "change"}) //
    public void changeLibraryProperties(@PathVariable Long id, @RequestParam("decision") Decision decision, @RequestParam("change") String changes){

        Library lib = libraryRepository.findById(id).get();

        switch (decision){
            case NAME:
                lib.setName(changes);
                break;
            case ADDRESS:
                lib.setAddress(changes);
                break;
            case OPENHOURS:
                lib.setOpenTime(changes);
                break;
            default:
                break;
        }

        libraryRepository.save(lib);

    }

    // book modification

    @PostMapping(value = "book/{id}", params = {"decision", "change"}) //
    public void changeBooksProperties(@PathVariable Long id, @RequestParam("decision") DecisionBook decision, @RequestParam("change") String changes){

        List<Library> libList = libraryRepository.findLibraryByBookId(id);

        for(Library lib: libList){
            Book book = lib.findBookById(id);
            switch (decision){
                case TITLE:
                    book.setTitle(changes);
                    break;
                case AUTHOR:
                    book.setAuthor(changes);
                    break;
                case DESCRIPTION:
                    book.setDescipriton(changes);
                    break;
                default:
                    break;
            }

            libraryRepository.save(lib);
        }



    }



}
