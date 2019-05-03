import {Book} from './book';

export interface LibraryUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  gender?: boolean;
  birthDate?: Date;
  bookListBorrowedByUser?: Array<Book>;
  

}
