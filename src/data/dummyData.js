export const Users = [
  {
    id: 1,
    profilePicture: 'img/person/1.jpeg',
    username: "Safak Kocaoglu",
    bio: 'Node developer',
    password: "123456",
    mail: "Safak@gmail.com",
    online: true,
    friendsID: [2, 4, 6, 7, 8, 9],
    git: 'https://github.com/hazandev',
    linkedin: `https://www.linkedin.com/in/idan-harel-hazan-7472401b3/`,
    city: 'New York'
  },
  {
    id: 2,
    profilePicture: 'img/person/2.jpeg',
    username: "Janell Shrum",
    bio: 'Angular developer',
    password: "123456",
    mail: "Janell@gmail.com",
    online: true,
    friendsID: [1, 5, 6, 7, 8, 9],
    git: 'https://github.com/hazandev',
    linkedin: `https://www.linkedin.com/in/idan-harel-hazan-7472401b3/`,
    city: 'New York'
  },
  {
    id: 3,
    profilePicture: 'img/person/3.jpeg',
    username: "Alex Durden",
    bio: 'Vue developer',
    password: "123456",
    mail: "Alex@gmail.com",
    online: true,
    friendsID: [2, 1, 6, 7, 8, 9],
    git: 'https://github.com/hazandev',
    linkedin: `https://www.linkedin.com/in/idan-harel-hazan-7472401b3/`,
    city: 'Florida'
  },
  {
    id: 4,
    profilePicture: 'img/person/4.jpeg',
    username: "Dora Hawks",
    bio: 'Frontend developer',
    password: "123456",
    mail: "Dora@gmail.com",
    online: true,
    friendsID: [2, 7, 8, 9],
    git: 'https://github.com/hazandev',
    linkedin: `https://www.linkedin.com/in/idan-harel-hazan-7472401b3/`,
    city: 'Florida'
  },
  {
    id: 5,
    profilePicture: 'img/person/5.jpeg',
    username: "Thomas Holden",
    bio: 'Slack developer',
    password: "123456",
    mail: "Thomas@gmail.com",
    online: true,
    friendsID: [2, 7, 8, 9],
    git: 'https://github.com/hazandev',
    linkedin: `https://www.linkedin.com/in/idan-harel-hazan-7472401b3/`,
    city: 'Florida'
  },
  {
    id: 6,
    profilePicture: 'img/person/6.jpeg',
    username: "Shirley Beauchamp",
    bio: 'React developer',
    password: "123456",
    mail: "Shirley@gmail.com",
    online: true,
    friendsID: [2, 4, 1, 7, 8, 9],
    git: 'https://github.com/hazandev',
    linkedin: `https://www.linkedin.com/in/idan-harel-hazan-7472401b3/`,
    city: 'Florida'
  },
  {
    id: 7,
    profilePicture: 'img/person/7.jpeg',
    username: "Travis Bennett",
    bio: 'React developer', password: "123456", mail: "Travis@gmail.com",
    online: true,
    friendsID: [2, 3, 6, 5, 8, 9],
    git: 'https://github.com/hazandev',
    linkedin: `https://www.linkedin.com/in/idan-harel-hazan-7472401b3/`,
    city: 'Tel Aviv'

  },
  {
    id: 8,
    profilePicture: 'img/person/8.jpeg',
    username: "Kristen Thomas",
    bio: 'React developer',
    password: "123456",
    mail: "Kristen@gmail.com",
    online: false,
    friendsID: [2, 4, 6, 7, 9, 10],
    git: 'https://github.com/hazandev',
    linkedin: `https://www.linkedin.com/in/idan-harel-hazan-7472401b3/`,
    city: 'Tel Aviv'

  },
  {
    id: 9,
    profilePicture: 'img/person/9.jpeg',
    username: "Gary Duty",
    bio: 'React developer',
    password: "123456",
    mail: "Gary@gmail.com",
    online: false,
    friendsID: [2, 4, 6, 7, 8, 9, 10],
    git: 'https://github.com/hazandev',
    linkedin: `https://www.linkedin.com/in/idan-harel-hazan-7472401b3/`
  },
  {
    id: 10,
    profilePicture: 'img/person/10.jpeg',
    username: "Safak Kocaoglu",
    bio: 'Django developer',
    password: "123456",
    mail: "Safak@gmail.com",
    online: true,
    friendsID: [2, 4, 6, 7, 8, 9],
    git: 'https://github.com/hazandev',
    linkedin: `https://www.linkedin.com/in/idan-harel-hazan-7472401b3/`,
    city: 'Tel Aviv'
  }
];

export const Posts = [
  {
    id: 1,
    desc: "Love For All, Hatred For None.",
    photo: "img/post/1.jpeg",
    date: "5 mins ago",
    userId: 1,
    wise: 32,
    comment: 9,
    tech: 'React',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam hic eius mollitia
    expedita dolores porro harum aperiam voluptates tempore beatae, sit
    quo odit quas, inventore perferendis quam amet? Placeat, recusandae
    animi aspernatur explicabo facere, tempora et beatae voluptatem
    tempore repellat tenetur eos.`
  },
  {
    id: 2,
    photo: "img/post/2.jpeg",
    date: "15 mins ago",
    userId: 2,
    wise: 2,
    comment: 1,
    tech: 'Angular',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam hic eius mollitia
    expedita dolores porro harum aperiam voluptates tempore beatae, sit
    quo odit quas, inventore perferendis quam amet? Placeat, recusandae
    animi aspernatur explicabo facere, tempora et beatae voluptatem
    tempore repellat tenetur eos.`
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning.",
    photo: "img/post/3.jpeg",
    date: "1 hour ago",
    userId: 3,
    wise: 61,
    comment: 2,
    tech: 'Js',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam hic eius mollitia
    expedita dolores porro harum aperiam voluptates tempore beatae, sit
    quo odit quas, inventore perferendis quam amet? Placeat, recusandae
    animi aspernatur explicabo facere, tempora et beatae voluptatem
    tempore repellat tenetur eos.`
  },
  {
    id: 4,
    photo: "img/post/4.jpeg",
    date: "4 hours ago",
    userId: 4,
    wise: 7,
    comment: 3,
    tech: 'Node.js',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam hic eius mollitia
    expedita dolores porro harum aperiam voluptates tempore beatae, sit
    quo odit quas, inventore perferendis quam amet? Placeat, recusandae
    animi aspernatur explicabo facere, tempora et beatae voluptatem
    tempore repellat tenetur eos.`
  },
  {
    id: 5,
    photo: "img/post/5.jpeg",
    date: "5 hours ago",
    userId: 5,
    wise: 23,
    comment: 5,
    tech: 'SASS', text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam hic eius mollitia
    expedita dolores porro harum aperiam voluptates tempore beatae, sit
    quo odit quas, inventore perferendis quam amet? Placeat, recusandae
    animi aspernatur explicabo facere, tempora et beatae voluptatem
    tempore repellat tenetur eos.`
  },
  {
    id: 6,
    photo: "img/post/6.jpeg",
    date: "1 day ago",
    userId: 6,
    wise: 44,
    comment: 6,
    tech: 'HTML', text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam hic eius mollitia
    expedita dolores porro harum aperiam voluptates tempore beatae, sit
    quo odit quas, inventore perferendis quam amet? Placeat, recusandae
    animi aspernatur explicabo facere, tempora et beatae voluptatem
    tempore repellat tenetur eos.`
  },
  {
    id: 7,
    desc: "Never regret anything that made you smile.",
    photo: "img/post/7.jpeg",
    date: "2 days ago",
    userId: 7,
    wise: 52,
    comment: 3,
    tech: 'CSS', text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam hic eius mollitia
    expedita dolores porro harum aperiam voluptates tempore beatae, sit
    quo odit quas, inventore perferendis quam amet? Placeat, recusandae
    animi aspernatur explicabo facere, tempora et beatae voluptatem
    tempore repellat tenetur eos.`
  },
  {
    id: 8,
    photo: "img/post/8.jpeg",
    date: "3 days ago",
    userId: 8,
    wise: 15,
    comment: 1,
    tech: 'Vue',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam hic eius mollitia
    expedita dolores porro harum aperiam voluptates tempore beatae, sit
    quo odit quas, inventore perferendis quam amet? Placeat, recusandae
    animi aspernatur explicabo facere, tempora et beatae voluptatem
    tempore repellat tenetur eos.`
  },
  {
    id: 9,
    desc: "Change the world by being yourself.",
    photo: "img/post/9.jpeg",
    date: "5 days ago",
    userId: 9,
    wise: 11,
    comment: 2,
    tech: 'Slack',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam hic eius mollitia
    expedita dolores porro harum aperiam voluptates tempore beatae, sit
    quo odit quas, inventore perferendis quam amet? Placeat, recusandae
    animi aspernatur explicabo facere, tempora et beatae voluptatem
    tempore repellat tenetur eos.`
  },
  {
    id: 10,
    photo: "img/post/10.jpeg",
    date: "1 week ago",
    userId: 10,
    wise: 104,
    comment: 12,
    tech: 'Django',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam hic eius mollitia
    expedita dolores porro harum aperiam voluptates tempore beatae, sit
    quo odit quas, inventore perferendis quam amet? Placeat, recusandae
    animi aspernatur explicabo facere, tempora et beatae voluptatem
    tempore repellat tenetur eos.`
  }
];

export const Courses = [
  {
    id: 1,
    photo: "img/product/HTML.jpg",
    mentor: 'Harel Hazan',
    sale: 85,
    price: 59.99,
    tech: 'HTML & CSS',
    rate: 4.5
  },
  {
    id: 2,
    photo: "img/product/JS.jpg",
    mentor: 'Harel Hazan',
    sale: 85,
    price: 49.99,
    tech: 'Java script',
    rate: 4.2
  },
  {
    id: 3,
    photo: "img/product/NODEJS.jpg",
    mentor: 'Brad Traversy',
    sale: 12,
    price: 59.99,
    tech: 'Node.js',
    rate: 4.7
  },
  {
    id: 4,
    photo: "img/product/Redis.jpg",
    mentor: 'Mor Cohen',
    sale: 31,
    price: 29.99,
    tech: 'Redis'
  }
]


export const Articles = [
  // {
  //   id: 1,
  //   date: "12/1/2021",
  //   userId: 3,
  //   view: 45,
  //   tech: 'Angular',
  //   subject: `Angular Dynamic Route`,
  //   content: {
  //     pre: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reiciendis adipisci qui',
  //     body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid dignissimos unde adipisci. Nulla, reprehenderit mollitia dicta in adipisci culpa maxime quis qui cupiditate a praesentium omnis, alias nobis laborum quae iure ullam ad aperiam possimus tempora eaque nostrum aliquid eos, velit minima inventore mollitia consequuntur esse libero vel.',
  //     end: 'Iure vel voluptas est ipsum, eius itaque soluta magnam perspiciatis ex saepe natus!'
  //   },
  //   tags: ['angular', 'frontend', 'css']
  // },
  {
    id: 1,
    date: "12/1/2021",
    userId: 3,
    view: 45,
    tech: 'Angular',
    subject: `Angular Dynamic Route`,
    content: {
      pre: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reiciendis adipisci qui',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid dignissimos unde adipisci. Nulla, reprehenderit mollitia dicta in adipisci culpa maxime quis qui cupiditate a praesentium omnis, alias nobis laborum quae iure ullam ad aperiam possimus tempora eaque nostrum aliquid eos, velit minima inventore mollitia consequuntur esse libero vel.',
      end: 'Iure vel voluptas est ipsum, eius itaque soluta magnam perspiciatis ex saepe natus!'
    },
    tags: ['angular', 'frontend', 'css']
  },
  {
    id: 2,
    date: "22/1/2021",
    userId: 4,
    view: 12,
    tech: 'Vue',
    subject: `How route at Vue`,
    content: {
      pre: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reiciendis adipisci qui',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid dignissimos unde adipisci. Nulla, reprehenderit mollitia dicta in adipisci culpa maxime quis qui cupiditate a praesentium omnis, alias nobis laborum quae iure ullam ad aperiam possimus tempora eaque nostrum aliquid eos, velit minima inventore mollitia consequuntur esse libero vel.',
      end: 'Iure vel voluptas est ipsum, eius itaque soluta magnam perspiciatis ex saepe natus!'
    },
    tags: ['angular', 'frontend', 'css']
  },
  {
    id: 3,
    date: "11/6/2021",
    userId: 7,
    view: 191,
    tech: 'Sass',
    subject: `Sass Loop`,
    content: {
      pre: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reiciendis adipisci qui',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid dignissimos unde adipisci. Nulla, reprehenderit mollitia dicta in adipisci culpa maxime quis qui cupiditate a praesentium omnis, alias nobis laborum quae iure ullam ad aperiam possimus tempora eaque nostrum aliquid eos, velit minima inventore mollitia consequuntur esse libero vel.',
      end: 'Iure vel voluptas est ipsum, eius itaque soluta magnam perspiciatis ex saepe natus!'
    },
    tags: ['angular', 'frontend', 'css']
  },
  {
    id: 4,
    date: "12/1/2021",
    userId: 2,
    view: 11,
    tech: 'NodeJS',
    subject: 'testing at node',
    content: {
      pre: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reiciendis adipisci qui',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid dignissimos unde adipisci. Nulla, reprehenderit mollitia dicta in adipisci culpa maxime quis qui cupiditate a praesentium omnis, alias nobis laborum quae iure ullam ad aperiam possimus tempora eaque nostrum aliquid eos, velit minima inventore mollitia consequuntur esse libero vel.',
      end: 'Iure vel voluptas est ipsum, eius itaque soluta magnam perspiciatis ex saepe natus!'
    },
    tags: ['angular', 'frontend', 'css']
  },
  {
    id: 5,
    date: "12/2/2020",
    userId: 10,
    view: 121,
    tech: 'JS',
    subject: `Js Map Function`,
    content: {
      pre: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reiciendis adipisci qui',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid dignissimos unde adipisci. Nulla, reprehenderit mollitia dicta in adipisci culpa maxime quis qui cupiditate a praesentium omnis, alias nobis laborum quae iure ullam ad aperiam possimus tempora eaque nostrum aliquid eos, velit minima inventore mollitia consequuntur esse libero vel.',
      end: 'Iure vel voluptas est ipsum, eius itaque soluta magnam perspiciatis ex saepe natus!'
    },
    tags: ['angular', 'frontend', 'css']
  },
  {
    id: 6,
    date: "22/6/2021",
    userId: 1,
    view: 31,
    tech: 'React',
    subject: `React Redux Dynamic Route`,
    content: {
      pre: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reiciendis adipisci qui',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid dignissimos unde adipisci. Nulla, reprehenderit mollitia dicta in adipisci culpa maxime quis qui cupiditate a praesentium omnis, alias nobis laborum quae iure ullam ad aperiam possimus tempora eaque nostrum aliquid eos, velit minima inventore mollitia consequuntur esse libero vel.',
      end: 'Iure vel voluptas est ipsum, eius itaque soluta magnam perspiciatis ex saepe natus!'
    },
    tags: ['React', 'JS', 'frontend', 'css']
  }, {
    id: 7,
    date: "11/5/2019",
    userId: 3,
    view: 37,
    tech: 'Angular',
    subject: `Angular Render Component`,
    content: {
      pre: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reiciendis adipisci qui',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid dignissimos unde adipisci. Nulla, reprehenderit mollitia dicta in adipisci culpa maxime quis qui cupiditate a praesentium omnis, alias nobis laborum quae iure ullam ad aperiam possimus tempora eaque nostrum aliquid eos, velit minima inventore mollitia consequuntur esse libero vel.',
      end: 'Iure vel voluptas est ipsum, eius itaque soluta magnam perspiciatis ex saepe natus!'
    },
    tags: ['angular', 'JS', 'frontend', 'css']
  },
  {
    id: 8,
    date: "19/9/2020",
    userId: 2,
    view: 11,
    tech: 'React Hooks',
    subject: `React Hooks handle`,
    content: {
      pre: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reiciendis adipisci qui',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid dignissimos unde adipisci. Nulla, reprehenderit mollitia dicta in adipisci culpa maxime quis qui cupiditate a praesentium omnis, alias nobis laborum quae iure ullam ad aperiam possimus tempora eaque nostrum aliquid eos, velit minima inventore mollitia consequuntur esse libero vel.',
      end: 'Iure vel voluptas est ipsum, eius itaque soluta magnam perspiciatis ex saepe natus!'
    },
    tags: ['Hooks', 'React', 'frontend', 'css']
  }, {
    id: 9,
    date: "22/7/2021",
    userId: 7,
    view: 12,
    tech: 'React',
    subject: `React css handle`,
    content: {
      pre: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reiciendis adipisci qui',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid dignissimos unde adipisci. Nulla, reprehenderit mollitia dicta in adipisci culpa maxime quis qui cupiditate a praesentium omnis, alias nobis laborum quae iure ullam ad aperiam possimus tempora eaque nostrum aliquid eos, velit minima inventore mollitia consequuntur esse libero vel.',
      end: 'Iure vel voluptas est ipsum, eius itaque soluta magnam perspiciatis ex saepe natus!'
    },
    tags: ['React', 'frontend', 'css']
  },
  {
    id: 10,
    date: "22/1/2021",
    userId: 8,
    view: 32,
    tech: 'Vue',
    subject: `Vue and Vuex`,
    content: {
      pre: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reiciendis adipisci qui',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid dignissimos unde adipisci. Nulla, reprehenderit mollitia dicta in adipisci culpa maxime quis qui cupiditate a praesentium omnis, alias nobis laborum quae iure ullam ad aperiam possimus tempora eaque nostrum aliquid eos, velit minima inventore mollitia consequuntur esse libero vel.',
      end: 'Iure vel voluptas est ipsum, eius itaque soluta magnam perspiciatis ex saepe natus!'
    },
    tags: ['Vue', 'frontend', 'css']
  },
  {
    id: 11,
    date: "14/5/2021",
    userId: 9,
    view: 11,
    tech: 'React',
    subject: `Why use React at front`,
    content: {
      pre: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reiciendis adipisci qui',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid dignissimos unde adipisci. Nulla, reprehenderit mollitia dicta in adipisci culpa maxime quis qui cupiditate a praesentium omnis, alias nobis laborum quae iure ullam ad aperiam possimus tempora eaque nostrum aliquid eos, velit minima inventore mollitia consequuntur esse libero vel.',
      end: 'Iure vel voluptas est ipsum, eius itaque soluta magnam perspiciatis ex saepe natus!'
    },
    tags: ['React', 'frontend', 'css']
  },
  {
    id: 12,
    date: "12/1/2021",
    userId: 2,
    view: 55,
    tech: 'Vue',
    subject: `Why use Vue at front`,
    content: {
      pre: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reiciendis adipisci qui',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid dignissimos unde adipisci. Nulla, reprehenderit mollitia dicta in adipisci culpa maxime quis qui cupiditate a praesentium omnis, alias nobis laborum quae iure ullam ad aperiam possimus tempora eaque nostrum aliquid eos, velit minima inventore mollitia consequuntur esse libero vel.',
      end: 'Iure vel voluptas est ipsum, eius itaque soluta magnam perspiciatis ex saepe natus!'
    },
    tags: ['Vue', 'frontend', 'css']
  }
]



export const CommentsArticle = [
  {
    id: 1,
    date: "12/1/2021",
    articleId: 1,
    userId: 2,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  },
  {
    id: 2,
    date: "22/1/2021",
    articleId: 1,
    userId: 3,
    content: `Lorem ipsum dolor, sit amet`
  },
  {
    id: 3,
    date: "12/1/2021",
    articleId: 1,
    userId: 3,
    content: `Lorem , sit amet consectetur adipisicing elit. Alias quas
    officia quos!  provident culpa numquam`
  },
  {
    id: 4,
    date: "12/1/2021",
    articleId: 2,
    userId: 2,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  },
  {
    id: 5,
    date: "10/1/2021",
    articleId: 3,
    userId: 2,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  }, {
    id: 6,
    date: "22/1/2021",
    articleId: 5,
    userId: 5,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  },
  {
    id: 7,
    date: "12/1/2021",
    articleId: 5,
    userId: 4,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  }, {
    id: 8,
    date: "12/1/2021",
    articleId: 6,
    userId: 3,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  }, {
    id: 9,
    date: "12/1/2021",
    articleId: 7,
    userId: 10,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  }, {
    id: 10,
    date: "12/2/2021",
    articleId: 8,
    userId: 7,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  },
  {
    id: 11,
    date: "12/3/2020",
    articleId: 8,
    userId: 7,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  }
  , {
    id: 12,
    date: "12/4/2021",
    articleId: 4,
    userId: 7,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  }
  , {
    id: 13,
    date: "12/5/2021",
    articleId: 2,
    userId: 7,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  },
  {
    id: 14,
    date: "12/6/2021",
    articleId: 3,
    userId: 7,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  },
  {
    id: 15,
    date: "12/1/2021",
    articleId: 6,
    userId: 9,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  }, {
    id: 16,
    date: "12/1/2021",
    articleId: 8,
    userId: 8,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  },
  {
    id: 17,
    date: "12/8/2021",
    articleId: 8,
    userId: 4,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  },
  {
    id: 18,
    date: "12/1/2021",
    articleId: 8,
    userId: 10,
    content: `Lorem ipsum dolorni, qui provident culpa numquam`
  }
]

export const CommentsPost = [
  {
    id: 1,
    date: "12/1/2021",
    postId: 1,
    userId: 2,
    comments: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  },
  {
    id: 2,
    date: "22/1/2021",
    postId: 1,
    userId: 3,
    comments: `Lorem ipsum dolor, sit amet`
  },
  {
    id: 3,
    date: "12/1/2021",
    postId: 1,
    userId: 3,
    comments: `Lorem , sit amet consectetur adipisicing elit. Alias quas
    officia quos!  provident culpa numquam`
  },
  {
    id: 4,
    date: "12/1/2021",
    postId: 2,
    userId: 2,
    comments: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  },
  {
    id: 5,
    date: "10/1/2021",
    articleId: 3,
    userId: 2,
    comments: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  }, {
    id: 6,
    date: "22/1/2021",
    postId: 5,
    userId: 5,
    comments: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  },
  {
    id: 7,
    date: "12/1/2021",
    postId: 5,
    userId: 4,
    comments: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  }, {
    id: 8,
    date: "12/1/2021",
    postId: 6,
    userId: 3,
    comments: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  }, {
    id: 9,
    date: "12/1/2021",
    postId: 7,
    userId: 10,
    comments: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  }, {
    id: 10,
    date: "12/1/2021",
    postId: 8,
    userId: 7,
    comments: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  },
  {
    id: 11,
    date: "12/3/2020",
    postId: 8,
    userId: 7,
    comments: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  }
  , {
    id: 12,
    date: "12/4/2021",
    postId: 4,
    userId: 7,
    comments: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  }
  , {
    id: 13,
    date: "12/5/2021",
    postId: 2,
    userId: 7,
    comments: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  },
  {
    id: 14,
    date: "12/6/2021",
    postId: 3,
    userId: 7,
    comments: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  },
  {
    id: 15,
    date: "12/1/2021",
    postId: 6,
    userId: 9,
    comments: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  }, {
    id: 16,
    date: "12/1/2021",
    postId: 8,
    userId: 8,
    comments: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  },
  {
    id: 17,
    date: "12/8/2021",
    postId: 8,
    userId: 4,
    comments: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas
    officia quos! Magni, qui provident culpa numquam`
  }, {
    id: 18,
    date: "12/1/2021",
    postId: 8,
    userId: 10,
    comments: `Lorem ipsum dolorni, qui provident culpa numquam`
  }
]

export const techOption = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "React",
    label: "React",
  },
  {
    value: "Vue",
    label: "Vue",
  },
  {
    value: "Angular",
    label: "Angular",
  },
  {
    value: "Nodejs",
    label: "Nodejs",
  },
];