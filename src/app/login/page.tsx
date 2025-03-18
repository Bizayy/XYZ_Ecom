'use client'
import { useWixClientHook } from '@/hooks/useWixClientHook';
import { LoginState } from '@wix/sdk';
import React, { useState } from 'react'
import { FaLock, FaUser } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';

enum MODE {
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
    RESET_PASSWORD = "RESET_PASSWORD",
    EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}

const Page = () => {

    const [mode, setMode] = useState(MODE.LOGIN);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailCode, setEmailCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const formTitle = mode === MODE.LOGIN ? "LOGIN" : mode === MODE.REGISTER ? "REGISTER" : mode === MODE.RESET_PASSWORD ? "RESET PASSWORD" : "VERIFY EMAIL"

    const buttonTitle = mode === MODE.LOGIN ? "Login" : mode === MODE.REGISTER ? "Register" : mode === MODE.RESET_PASSWORD ? "Reset" : "Verify"

    const wixClient = useWixClientHook();

    // console.log(wixClient.auth)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            let response;
            switch (mode) {
                case MODE.LOGIN:
                    response = await wixClient.auth.login({
                        email,
                        password,
                    });
                    console.log(response);
                    break;
                case MODE.REGISTER:
                    response = await wixClient.auth.register({
                        email,
                        password,
                        profile: { nickname: username },
                    });
                    break;
                case MODE.RESET_PASSWORD:
                    response = await wixClient.auth.sendPasswordResetEmail(
                        email,
                        window.location.href,
                    );
                    break;
                case MODE.EMAIL_VERIFICATION:
                    response = await wixClient.auth.processVerification({
                        verificationCode: emailCode,
                    });
                    break;
                default:
                    break;
            }
            console.log(response)


            switch (response?.loginState) {
                case LoginState.SUCCESS:
                    setMessage("Login Successful! You are being redirected.")
                    break;
                case LoginState.FAILURE:
                    setMessage("Login failed!");
                    break;
                // case LoginState.EMAIL_VERIFICATION_REQUIRED:
                //
                //     break;
                // case LoginState.OWNER_APPROVAL_REQUIRED:
                //
                //     break;
                default:
                    break;
            }

        }
        catch (err) {
            console.log(err);
            setError("Something went wrong!");
        }
        finally {
            setIsLoading(false);
        }
    };


    return (
        <div className='h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-20 py-4 relative flex flex-col items-center justify-center gap-3'>

            <form className='flex flex-col items-center gap-4 p-4 shadow-2xl shadow-gray-600 rounded-md' onSubmit={handleSubmit}>
                <h1 className='text-2xl font-semibold text-center'>{formTitle}</h1>
                {mode === MODE.REGISTER ? (
                    // Username Div
                    <div className='flex flex-col items-start gap-2'>
                        <label className='text-gray-700 flex items-center gap-1'>
                            <span>Username</span>
                            <span><FaUser /></span>
                        </label>
                        <input type="text" name='username' placeholder='john doe' className='p-2 outline-none ring-1 ring-gray-400 rounded-md'
                            onChange={e => setUsername(e.target.value)} />
                    </div>
                ) : null}
                {
                    mode !== MODE.EMAIL_VERIFICATION ? (
                        // Email div
                        <div className='flex flex-col items-start gap-2'>
                            <label className='text-gray-700 flex items-center gap-1'>
                                <span>Email</span>
                                <span><IoMail /></span>
                            </label>
                            <input type="email" name='email' placeholder='johndoe@gmail.com' className='p-2 outline-none ring-1 ring-gray-400 rounded-md'
                                onChange={e => setEmail(e.target.value)} />
                        </div>
                    ) :
                        (
                            <div className='flex flex-col items-start gap-2'>
                                <label className='text-gray-700 flex items-center gap-1'>
                                    <span>Verification Code </span>
                                    <span><IoMail /></span>
                                </label>
                                <input type="text" name='emailCode' placeholder='1234' className='w-24 p-2 outline-none ring-1 ring-gray-400 rounded-md'
                                    onChange={e => setEmailCode(e.target.value)} />
                            </div>
                        )
                }
                {
                    mode === MODE.LOGIN || mode === MODE.REGISTER ? (
                        <div className='flex flex-col items-start gap-2'>
                            <label className='text-gray-700 flex items-center gap-1'>
                                <span>Password</span>
                                <span><FaLock /></span>
                            </label>
                            <input type="password" name='password' placeholder='Enter your password' className='p-2 outline-none ring-1 ring-gray-400 rounded-md'
                                onChange={e => setPassword(e.target.value)} />
                        </div>
                    ) :
                        null
                }
                {mode === MODE.LOGIN && (
                    <label className='text-sm underline cursor-pointer' onClick={() => setMode(MODE.RESET_PASSWORD)}>Forgot password?</label>
                )}
                <button className='bg-primary text-sm cursor-pointer py-2 px-4 disabled:bg-gray-200 disabled:cursor-not-allowed rounded-md text-white'
                    disabled={isLoading} >
                    {isLoading ? "Loading..." : buttonTitle}
                </button>
                {error && <div className='text-red-600 text-sm'>{error}</div>}
                {mode === MODE.LOGIN && (
                    <label className='text-sm' >
                        Don't have an account?
                        <span className='underline cursor-pointer' onClick={() => setMode(MODE.REGISTER)}>Click here</span>
                    </label>
                )}
                {mode === MODE.REGISTER && (
                    <label className='text-sm' >
                        Already have an account?
                        <span className='underline cursor-pointer' onClick={() => setMode(MODE.LOGIN)}>Click here</span>
                    </label>
                )}
                {mode === MODE.RESET_PASSWORD && (
                    <label className='text-sm cursor-pointer' onClick={() => setMode(MODE.LOGIN)}>
                        Go to login
                    </label>
                )}
                {message && <div className='text-sm text-green-700'>{message}</div>}
            </form >
        </div >
    )
}

export default Page
