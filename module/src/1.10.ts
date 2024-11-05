{
// Union types

type FontEndDevelooperQuality = "Good" | "bad";
type BackEndDevelooperQuality = "Good" | "bad";

type Developer = FontEndDevelooperQuality | BackEndDevelooperQuality;

const develper: FontEndDevelooperQuality = "Good"

type User = {
    name : string;
    email?: string;
    gemder: "Mlae" | "Female";
    blood: "O+" | "AB+" | "A+";
}

const user:  User = {
    name : "Shahin",
    gemder: "Mlae",
    blood: "AB+",
}


// Intersection type

type FrontEnd = {
    skill : string[];
    designetion1 : "Front-End Developer"
}
type BackEnd = {
    skill : string[];
    designetion2 : "Back-End Developer"
}

type FullstackDeveloper = FrontEnd & BackEnd

const fullstackDeveloper : FullstackDeveloper = {
    skill: ["HTML", "CSS", "React", "Node", "Mongosse"],
    designetion1 : "Front-End Developer",
    designetion2 : "Back-End Developer"
}

}