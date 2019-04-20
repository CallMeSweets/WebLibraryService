package com.grzelak.demo.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Library implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Size(min = 3, max = 25)
    private String address;
    @Size(min = 3, max = 25)
    private String openTime;
    @Size(min = 3, max = 25)
    private String name;


    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Book> bookList = new ArrayList<>();


    public Library() {
    }

    public Library(@Size(min = 3, max = 25) String address, @Size(min = 3, max = 25) String openTime, @Size(min = 3, max = 25) String name) {
        this.address = address;
        this.openTime = openTime;
        this.name = name;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getOpenTime() {
        return openTime;
    }

    public void setOpenTime(String openTime) {
        this.openTime = openTime;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Book> getBookList() {
        return bookList;
    }

    public void setBookList(List<Book> bookList) {
        this.bookList = bookList;
    }

    public void addBook(Book book){
        bookList.add(book);
    }

    public Book findBookById(Long id) {

        for(Book book: bookList){
            if(book.getId() == id)
                return book;
        }
        return null;
    }
}
