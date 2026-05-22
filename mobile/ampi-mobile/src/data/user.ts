export type UserProfile = {
    id?: string,
    name: string,
    pronouns: string,
    age: string,
    role: string,
    genres: string[],
    location: string,
    image: any,
    prompts: ProfilePrompt[],
};

export type ProfilePrompt = {
    id?: string,
    heading: string,
    response: string,
}