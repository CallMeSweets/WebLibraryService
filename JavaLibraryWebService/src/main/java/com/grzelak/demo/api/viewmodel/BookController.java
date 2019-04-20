package com.grzelak.demo.api.viewmodel;

import com.grzelak.demo.DB.LibraryRepository;
import com.grzelak.demo.model.Library;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "books")
public class BookController {

    @Autowired
    private LibraryRepository libraryRepository;

    @GetMapping(value = "{id}")
    Library findAll(@PathVariable Long id){
        return libraryRepository.findById(id).get();
    }

    @GetMapping("/x")
    String getB(){
        return "gdsgds";
    }


}
