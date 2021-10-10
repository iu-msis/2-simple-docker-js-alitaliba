const Offer = {
    data() {
      return {
            "students": [],
            "offers": [],
            "selectedStudent": null
        }
    },
    computed: {
        // prettyBirthday() {
        //     return dayjs(this.person.dob.date)
        //     .format('D MMM YYYY');
        // }
    },
    methods: {
        fetchBooksData() {
            fetch("/api/books/")
            .then(response => response.json())
            .then((parsedJson) => {
                console.log(parsedJson);
                this.offers = parsedJson
            })
            .catch( err => {
                console.error(err)
            })
        }
    },
    created() {
        this.fetchBooksData();
    }
  }
  
Vue.createApp(Offer).mount('#offerApp');