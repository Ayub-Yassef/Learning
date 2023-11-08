type user = {
    name: string;
    age: number;
    isMarried: boolean;
    hobbies: string[];
    gender?: string;
}

const user: user = {
    name: "John Doe",
    age: 28,
    isMarried: false,
    hobbies: ["Films", "Tennis"],
    gender: "Not Disclosed",
};

const userTwo: user = {
    name: "John Doe",
    age: 28,
    isMarried: false,
    hobbies: ["Films", "Tennis"],
    gender: "Not Disclosed",
};

const users: user[] = [user];