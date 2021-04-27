const app=new Vue({
    el:'#app',
    data:{
        books:[
            {
                id: 1,
                name:'《算法导论》',
                date:'2006-9',
                price:85.00,
                count:1,
            },
            {
                id: 2,
                name:'《UNIX编程艺术》',
                date:'2006-9',
                price:40.00,
                count:1,
            },
            {
                id:3 ,
                name:'《编程珠玑》',
                date:'2006-9',
                price:39.00,
                count:1,
            },
            {
                id:4,
                name:'《三体》',
                date:'2006-9',
                price:25.00,
                count:1,
            }
        ]
    },
    filters:{
      showPrice(price){
          return '¥'+price.toFixed(2)
      }
    },
    methods:{
        removeBook(bookindex){
            this.books.splice(bookindex,1)
        }
    },
    computed:{
        totalPrice(){
            /* let totalPrice=0;
            for(let i=0;i<this.books.length;i++){
                totalPrice= totalPrice+this.books[i].price*this.books[i].count;
            }
            return totalPrice;*/
            let totalPrice=0;
            for(let book of this.books){
                totalPrice=totalPrice+ book.price*book.count;
            }
            return totalPrice;

        }
    }
});
