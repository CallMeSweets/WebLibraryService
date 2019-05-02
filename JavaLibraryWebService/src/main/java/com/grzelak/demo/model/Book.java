package com.grzelak.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name = "Books")
public class Book implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Size(min = 3, max = 40)
    private String title;
    @Size(min = 3, max = 40)
    private String author;
    @Size(max = 300)
    private String descipriton;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    private Library library;

    public Book() {
    }

    public Book(@Size(min = 3, max = 25) String title, @Size(min = 3, max = 25) String author, @Size(max = 250) String descipriton) {
        this.title = title;
        this.author = author;
        this.descipriton = descipriton;
    }

    public Book(@Size(min = 3, max = 25) String title, @Size(min = 3, max = 25) String author, @Size(max = 250) String descipriton, Library library) {
        this.title = title;
        this.author = author;
        this.descipriton = descipriton;
        this.library = library;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDescipriton() {
        return descipriton;
    }

    public void setDescipriton(String descipriton) {
        this.descipriton = descipriton;
    }

    public Library getLibrary() {
        return library;
    }

    public void setLibrary(Library library) {
        this.library = library;
    }


}
