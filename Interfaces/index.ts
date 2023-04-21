interface Course {
    description: {
        name: string;
        instructor: {
            name: string;
        }
    };
    prerequisites: Prerequisites
}

interface Prerequisites {
    courses: string[]
}

let myCourse: Course

myCourse = {
    description: {
        name: 'Learn Typescript',
        instructor: {
            name: 'Esmeralda Techs'
        },
    },
    prerequisites: {
        courses: ['JS']
    }
}

























// interface Setting {
//     place: string;
//     year: number;
// }

// interface Novel {
//     author: {
//         name: string;
//     };
//     setting: Setting
// }

// let myNovel: Novel

// myNovel = {
//     author: {
//         name: "Jane Austen",
//     },
//     setting: {
//         place: 'England',
//         year: 1812
//     }
// }