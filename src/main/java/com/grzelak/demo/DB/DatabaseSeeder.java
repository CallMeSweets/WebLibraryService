package com.grzelak.demo.DB;

import com.grzelak.demo.model.Book;
import com.grzelak.demo.model.Library;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Arrays;
import java.util.List;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    @Autowired
    private LibraryRepository libraryRepository;

    @Autowired
    private BookRepository bookRepository;



    @Override
    public void run(String... args) throws Exception {


        BufferedReader bufferedReader1 = null;
        BufferedReader bufferedReader2 = null;
        BufferedReader bufferedReader3 = null;
        try {
            bufferedReader1 = new BufferedReader(new FileReader(DatabaseSeeder.class.getClassLoader().getResource("Library1").getPath()));
            bufferedReader2 = new BufferedReader(new FileReader(DatabaseSeeder.class.getClassLoader().getResource("Library2").getPath()));
            bufferedReader3 = new BufferedReader(new FileReader(DatabaseSeeder.class.getClassLoader().getResource("Library2").getPath()));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        Library library1 = new Library(bufferedReader1.readLine(), bufferedReader1.readLine(), bufferedReader1.readLine());

        while(true){
            if(!bufferedReader1.ready()) break;
                library1.addBook(new Book(bufferedReader1.readLine(), bufferedReader1.readLine(), bufferedReader1.readLine(), library1));
        }

        Library library2 = new Library(bufferedReader2.readLine(), bufferedReader2.readLine(), bufferedReader2.readLine());

        while(true){
            if(!bufferedReader2.ready()) break;

            library2.addBook(new Book(bufferedReader2.readLine(), bufferedReader2.readLine(), bufferedReader2.readLine(), library2));
        }

        Library library3 = new Library(bufferedReader3.readLine(), bufferedReader3.readLine(), bufferedReader3.readLine());

        while(true){
            if(!bufferedReader3.ready()) break;

            library3.addBook(new Book(bufferedReader3.readLine(), bufferedReader3.readLine(), bufferedReader3.readLine(), library3));
        }


        bufferedReader1.close();
        bufferedReader2.close();
        bufferedReader3.close();

        libraryRepository.save(library1);
        libraryRepository.save(library2);
        libraryRepository.save(library3);

    }
}
