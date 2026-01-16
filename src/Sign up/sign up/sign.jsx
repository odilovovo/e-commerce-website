import React from 'react'

export default function sign() {
    return (
        <div>
            <div className='flex items-center justify-around'>
                <h2 className='text-3xl' >Exclusive</h2>
                <p>Home</p>
                <p>Contact</p>
                <p>About</p>
                <p>Sign Up</p>
                <input type="text" placeholder='What are you looking for?' className='outline-none' />
            </div>

            <div className='mt-14 flex justify-around'>
                <img src="/Side Image.png" alt="" width={500} />
                <div className='flex flex-col  mt-8'>
                    <h2 className='text-4xl mt-8'>Create an account</h2>
                    <p className='text-2xl mt-8'>Enter your details below</p>
                    <input type="text" placeholder=' Name' className='outline-none mt-8 border-b-2 border-gray-500' width={400} />
                    <input type="text" placeholder='Email or Phone Number' className='outline-none border-b-2 mt-8 border-gray-500' width={400} />
                    <input type="text" placeholder='Password' className='outline-none mt-8 border-b-2 border-gray-500' width={400} />
                    <button className='bg-red-500 mt-8 p-2 rounded-l text-amber-50'>Create Account</button>
                    <button className=' mt-8 flex gap-6 p-2  rounded-l border-2 border-gray-500'><img src="/Icon-Google.png" alt="" />Sign up with Google</button>
                    <p className='text-2xl mt-8 text-gray-500 text-center'> Already have account? Log in</p>
                </div>
            </div>
            <div className='bg-black text-amber-50 flex justify-around p-14 mt-'>
                <div>
                    <p className='mt-5'>Exclusive </p>
                    <p className='mt-5'>Subscribe</p>
                    <p className='mt-5'>Get 10% off your first order</p>
                    <input type="text" placeholder='Enter your email' className='outline-none border-2 mt-8 border-amber-50' />
                </div>
                <div>
                    <h3 className='mt-5'>Support</h3>
                    <p className='mt-5'>111 Bijoy sarani, Dhaka,
                        <br /> DH 1515, Bangladesh.</p>
                    <p className='mt-5'>exclusive@gmail.com</p>
                    <p className='mt-5'>+88015-88888-9999</p>
                </div>
                <div>
                    <h3 className='mt-5'>Account</h3>
                    <p className='mt-5'>My Account</p>
                    <p className='mt-5'>Login / Register</p>
                    <p className='mt-5'>Cart</p>
                    <p className='mt-5'>Wishlist</p>
                    <p className='mt-5'>Shop</p>
                </div>
                <div>
                    <h3 className='mt-5'>Quick Link</h3>
                    <p className='mt-5'>Privacy Policy</p>
                    <p className='mt-5'>Terms Of Use</p>
                    <p className='mt-5'>FAQ</p>
                    <p className='mt-5'> Contact</p>
                </div>
                <div>
                    <h3>Download App</h3>
                    <p>Save $3 with App New User Only</p>
                    <div className='flex items-center justify-around'>
                        <img src="/Qr Code.png" className='mt-5' alt="" />
                        <img src="/Frame 718.png" className='mt-5' alt="" />
                    </div>
                    <div className='flex items-center justify-around'>
                        <img src="/Icon-Facebook.png" className='mt-5' alt="" />
                        <img src="/icon-instagram.png" className='mt-5' alt="" />
                        <img src="/Icon-Linkedin.png" className='mt-5' alt="" />
                        <img src="/Icon-Twitter.png" className='mt-5' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

