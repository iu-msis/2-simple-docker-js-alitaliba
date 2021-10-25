const book = {
  data() {
    return {
      books: [],
      bookForm: {},
      selectedBook: null
    }
  },
  computed: {},
  methods: {
    fetchBooksData() {
      fetch("/api/books/")
      .then( response => response.json())
      .then( (responseJson) => {
        console.log(responseJson);
        this.books = responseJson;
      })
      .catch( err => {
        console.error(err)
      })
    },
    postNewBook(evt) {      
      console.log("Posting:", this.bookForm);
      // alert("Posting!");

      fetch('api/books/update.php', {
        method:'POST',
        body: JSON.stringify(this.bookForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.books = json;
        
        // reset the form
        this.bookForm = {};
      });
    },
    postDeleteBook(o) {  
      if ( !confirm("Are you sure you want to delete the book from " + o.companyName + "?") ) {
          return;
      }  
      
      console.log("Delete!", o);

      fetch('api/books/delete.php', {
          method:'POST',
          body: JSON.stringify(o),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.books = json;
          
          // reset the form
          this.handleResetEdit();
        });
    },
    handleEditBook(book) {
      this.selectedBook = book;
      this.bookForm = Object.assign({}, this.selectedBook);
    },
    handleResetEdit() {
      this.selectedBook = null;
      this.bookForm = {};
    }
  },
  created() {
      this.fetchBooksData();
  }
}
  
Vue.createApp(book).mount('#bookApp');
