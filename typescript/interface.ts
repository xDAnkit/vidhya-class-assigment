

interface IpostComment {
    postId : number;
    id:number;
    name:string;
    email: string,
    body: string;
}

const comment = <IpostComment>{
  postId: 1,
  id: 2,
  name: "quo vero reiciendis velit similique earum",
  email: "Jayne_Kuhic@sydney.",
  body:
    "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
};

const _comments : Array<IpostComment> = 
[
  {
    postId: 2,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body:
      "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    postId: 3,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body:
      "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
];

console.log("Post ID: " + comment.postId + "\n post: " + comment.body);
console.log("Post ID: " + _comments[0].postId + "\n post: " + _comments[0].body);
console.log("Post ID: " + _comments[1].postId + "\n post: " + _comments[1].body);

