
/**
 * method validate if var environment is defined.
 * @param name, name of environment
 */
export const environmentIsDefined = (name : string) =>{
    if (!process.env[name]){
        throw new Error(`var environment ${name} is not defined`);
    }
}

export const validationsEnvironment = ()=>{
    environmentIsDefined('BOOK_HAPPY_URL');
}