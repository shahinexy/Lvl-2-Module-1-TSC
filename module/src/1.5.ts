// Reference Type --> Object 

const user: {
    firstName : string;
    lastNmae? : string; // optional type
    isStudent : boolean;
    course : 'Level 2 Complete Web Development Course'; // type --> Literal type
    readonly job : string;
} = {
    firstName : 'Shahin',
    // lastNmae : 'Alam',
    isStudent : true,
    course : 'Level 2 Complete Web Development Course',
    job: 'Full-Stack Developer'
}

// user.job= 'frontend' can not assing