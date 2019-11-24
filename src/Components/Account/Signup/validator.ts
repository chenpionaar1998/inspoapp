// Taken from https://www.codementor.io/muhammedali956/implementing-dynamic-form-validators-in-reactjs-6j7q0l8e7
const validator: validatorType= {
    email: {
        rules: [
            {
                test: (value: string) => {
                    return value.length > 0;
                },
                message: 'Email cannot be empty'
            }
        ],
        errors: [],
        valid: false,
        state: '', 
    },
    password: {
        rules: [
            {
                test: (value: string) => {
                    const reg = RegExp(/^(?=.*[a-z])(?=.*[A-Z]).*$/);
                    return reg.test(value) || value.length >= 8 ;
                },
                message: 'Password must contain at least one lowercase letter, one uppercase letter and be at least 8 characters long'
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
                message: 'First name cannot be empty'
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
                message: 'Last name cannot be empty'
            }
        ],
        errors: [],
        valid: false,
        state: '', 
    }
}

export type validatorType = {
    [key: string]: validatorObject;
}

export type validatorObject = {
    rules: Array<ruleType>;
    errors: Array<string>;
    valid: boolean;
    state: string;
}

type ruleType = {
    test: (value: string) => boolean;
    message: string;
}

export default validator;