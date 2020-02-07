// server/server.js

let express = require("express");
let graphqlHTTP = require("express-graphql");
let { buildSchema } = require("graphql");
let cors = require("cors");

let schema = buildSchema(`
  type User {
    id: String!
    nickname: String!
    avatar: String!
  }
  type Post {
    id: String!
    user: User!
    caption: String!
    image : String!
  }
  type Query{
    user(id: String): User!
    post(user_id: String, post_id: String): Post!
    posts(user_id: String): [Post]
  }
`);

let userslist = {
  a: {
    id: 'a',
    nickname: "Jedi",
    avatar: "https://i.pinimg.com/originals/86/72/35/8672358eacf638354cb8e854c3c3233a.jpg"
  },
  b: {
    id: "b",
    nickname: "Sith",
    avatar: "https://i.pinimg.com/originals/6e/35/d5/6e35d5472caeb495825071f8857ad42a.jpg"
  }
};
let postslist = {
  a: {
    a: {
      id: "a",
      user: userslist["a"],
      caption: "Republic is Ready",
      image: "https://lumiere-a.akamaihd.net/v1/images/image_04ee5ee7.jpeg?region=0%2C0%2C4173%2C746"
    },
    b: {
      id: "b",
      user: userslist ["a"],
      caption: "Squad",
      image: "https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/c6bzg9yhvanwaycqqhv8.jpg"
    },
    c: {
      id: "c",
      user: userslist ["a"],
      caption: "Ugh endless meetings",
      image: "https://sacredicon.files.wordpress.com/2019/02/jedi-council-e1550526517359.png?w=1200"
    },
    d: {
      id: "d",
      user: userslist["a"],
      caption: "The Creed",
      image: "https://vignette.wikia.nocookie.net/starwars/images/b/b8/Jedi_Code-Backstories.png/revision/latest?cb=20170228130331"
    }
  }
}

let root = {
  user: function({ id}) {
    return userslist[id];
  },
  post: function({ user_id, post_id}) {
    return postslist[user_id][post_id];
  },
  posts: function({ user_id}) {
    return Object.values(postslist[user_id]);
  }
};

//express
let app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
//set application port
app.listen(4000);
console.log("Running a GraphQL API server at localhost:4000/graphql");
