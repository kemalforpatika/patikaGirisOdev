import axios from 'axios';

// user id değerini değiştirerek farklı kullanıcıların verilerine ulaşılabilir
const userId=1;

(async () => {
    const {data:users} = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
    const {data:posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId);

    console.log(users);
    console.log(posts);
})();