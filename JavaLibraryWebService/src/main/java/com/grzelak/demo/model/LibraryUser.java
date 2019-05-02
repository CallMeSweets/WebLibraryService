package com.grzelak.demo.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class LibraryUser {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Size(min = 3, max = 25)
    private String firstName;
    @Size(min = 3, max = 25)
    private String lastName;
    @Size(min = 3, max = 25)
    private String emial;
    @Size(min = 8, max = 25)
    private String password;
    @Size(min = 9, max = 9)
    private String phoneNumber;
    @NotNull
    private boolean gender; // true male
    @NotNull
    private Date birthDate;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Book> bookListBorrowedByUser = new ArrayList<>();

    public LibraryUser(){}

    public LibraryUser(String firstName, String lastName, String emial, String password, String phoneNumber, boolean gender, Date birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emial = emial;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.birthDate = birthDate;
    }

    public void addBook(Book book){
        bookListBorrowedByUser.add(book);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Book> getBookListBorrowedByUser() {
        return bookListBorrowedByUser;
    }

    public void setBookListBorrowedByUser(List<Book> bookListBorrowedByUser) {
        this.bookListBorrowedByUser = bookListBorrowedByUser;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmial() {
        return emial;
    }

    public void setEmial(String emial) {
        this.emial = emial;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public void removeBook(Long bookId) {
       for(int i = 0; i < bookListBorrowedByUser.size(); i++){
           if(bookListBorrowedByUser.get(i).getId() == bookId){
               bookListBorrowedByUser.remove(i);
           }
       }
    }
}
