// Taken from https://www.codementor.io/muhammedali956/implementing-dynamic-form-validators-in-reactjs-6j7q0l8e7
const validator = {
    email: {
        rules: [
            {
                test: (value: string) => {
                    return value.length > 0;
                },
                message: '*email cannot be empty'
            }
        ],
        errors: [],
        valid: false,
        state: '', 
    },
    password: {
        rules: [
            {
                test: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                message: '*password must contain at least one lowercase letter, one uppercase letter'
            },
            {
                test: (value: string) => {
                    return value.length >= 8;
                },
                message: '*password must be at least 8 characters'
            }
        ],
        errors: [],
        valid: false,
        state: '', 
    },
    fname: {
        rules: [
            {
                test: (value: string) => {
                    return value.length > 0;
                },
                message: '*first name cannot be empty'
            }
        ],
        errors: [],
        valid: false,
        state: '', 
    },
    lname: {
        rules: [
            {
                test: (value: string) => {
                    return value.length > 0;
                },
                message: '*last name cannot be empty'
            }
        ],
        errors: [],
        valid: false,
        state: '', 
    }
}

export type validatorType = {
    email: string;
    password: string;
    fname: string;
    lname: string;
}

export default validator;