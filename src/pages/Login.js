import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';

const Login = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const [touched, setTouched] = useState({
        username: false,
        password: false
    });
    const [error, setError] = useState({
        username: {
            required: true,
            not_found: false
        },
        password: {
            required: true,
            not_found: false
        }
    });

    const onChangeForm = (value, field, required) => {
        let isRequiredValid = true;
        let errorFields = error[field];
        if (errorFields.not_found) errorFields.not_found = false;

        setForm(prev => {
            const fields = {
                ...prev,
                [field]: value
            };
            return fields;
        });

        if (required) {
            if (value.length < 1) {
                errorFields.required = true;
                onError(errorFields, `${field}`);
                isRequiredValid = false
            } else {
                errorFields.required = false;
            }
        }
        
        // if (isRequiredValid) {
        //     switch(field) {
        //         case 'email': {
        //             errorFields['email'] = !String(value).toLowerCase()
        //                 .match(
        //                 /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //             );
        //             break;
        //         }
        //     }
        //     onError(errorFields, `${field}`);
        // }
    }

    const onTouched = (value, field) => {
        setTouched(prev => {
            return {
                ...prev,
                [field]: value
            }
        })
    }

    const onError = (value, field) => {
        setError(prev => {
            return {
                ...prev,
                [field]: value
            }
        })
    }

    const submitLogin = () => {
        
    }
    return (
        <div className="bg-purple-700 flex items-center justify-center h-screen">
            <div className="bg-white divide-y px-6 pt-8 pb-6  w-[450px] rounded-lg shadow-xl">
                <img src={require('../assets/img/logo.png')} 
                     className="w-48 mx-auto pb-5"/>
                <div className="">
                    <p className="text-gray-400 text-2xl text-center font-semibold py-3">LOGIN</p>
                    <div className="mb-2">
                        <p className="font-medium mb-2">Username <span className="text-danger text-[#eb0e14]"> * </span></p>
                        <Input onChange={(value) => onChangeForm(value, 'username', true)} 
                               error={
                                    touched.username &&
                                    (
                                        error.username.required
                                    )
                               }
                               touched={(value) => onTouched(value, 'username')} />
                        {
                            !touched.username ? null
                            : error.username.required ? (
                            <p className="text-danger text-[#eb0e14] text-sm">Username is required!</p>
                            ) : null
                        }
                    </div>
                    <div className="mb-6">
                        <p className="font-medium mb-2">Password <span className="text-danger text-[#eb0e14]"> * </span></p>
                        <Input onChange={(value) => onChangeForm(value, 'password', true)} 
                               error={
                                    touched.password &&
                                    (
                                        error.password.required
                                    )
                               }
                               touched={(value) => onTouched(value, 'password')} />
                        {
                            !touched.password ? null
                            : error.password.required ? (
                            <p className="text-danger text-[#eb0e14] text-sm">Password is required!</p>
                            ) : null
                        }
                    </div>
                    <div className="flex mb-6">
                        <Checkbox label="Remember me" />
                        <Link to="/forget-password" className="ml-auto">
                            <p className="text-purple-700 text-sm">Forget password?</p>
                        </Link>
                    </div>
                    <div className="mb-2">
                        <Button block={true}
                                loading={loading}
                                disabled={!isFormValid}
                                onClick={submitLogin}>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;