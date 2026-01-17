import React from 'react'

export default function Sign() {
    return (
        <div>

            <div className="flex items-center justify-around">
                <h2 className="text-3xl">Exclusive</h2>
                <p>Home</p>
                <p>Contact</p>
                <p>About</p>
                <p>Sign Up</p>
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="outline-none"
                />
            </div>


            <div className="mt-14 flex justify-around">
                <img src="/images/Side Image.png" alt="" width={500} />

                <div className="flex flex-col mt-8">
                    <h2 className="text-4xl mt-8">Create an account</h2>
                    <p className="text-2xl mt-8">Enter your detail below</p>

                    <input
                        type="text"
                        placeholder="Name"
                        className="outline-none mt-8 border-b-2 border-gray-500"
                    />
                    <input
                        type="text"
                        placeholder="Email or Phone Number"
                        className="outline-none mt-8 border-b-2 border-gray-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="outline-none mt-8 border-b-2 border-gray-500"
                    />

                    <button className="bg-red-500 mt-8 p-2 rounded text-white">
                        Create Account
                    </button>

                    <button className="mt-8 flex items-center gap-4 p-2 rounded border-2 border-gray-500">
                        <img src="/images/Icon-Google.png" alt="" />
                        Sign up with Google
                    </button>

                    <p className="text-2xl mt-8 text-gray-500 text-center">
                        Already have account? Log in
                    </p>
                </div>
            </div>


            <div className="bg-black text-white flex justify-around p-14 mt-14">

                <div>
                    <p className="mt-5">Exclusive</p>
                    <p className="mt-5">Subscribe</p>
                    <p className="mt-5">Get 10% off your first order</p>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="outline-none border-2 mt-8 border-white bg-black p-1"
                    />
                </div>

                <div>
                    <h3 className="mt-5">Support</h3>
                    <p className="mt-5">
                        111 Bijoy sarani, Dhaka <br /> DH 1515, Bangladesh.
                    </p>
                    <p className="mt-5">exclusive@gmail.com</p>
                    <p className="mt-5">+88015-88888-9999</p>
                </div>

                <div>
                    <h3 className="mt-5">Account</h3>
                    <p className="mt-5">My Account</p>
                    <p className="mt-5">Login / Register</p>
                    <p className="mt-5">Cart</p>
                    <p className="mt-5">Wishlist</p>
                    <p className="mt-5">Shop</p>
                </div>

                <div>
                    <h3 className="mt-5">Quick Link</h3>
                    <p className="mt-5">Privacy Policy</p>
                    <p className="mt-5">Terms Of Use</p>
                    <p className="mt-5">FAQ</p>
                    <p className="mt-5">Contact</p>
                </div>

                <div>
                    <h3>Download App</h3>
                    <p>Save $5 with App New User Only</p>

                    <div className="flex items-center gap-4 mt-5">
                        <img src="/images/Qr Code.png" alt="" />
                        <img src="/images/Frame 718.png" alt="" />
                    </div>

                    <div className="flex items-center gap-4 mt-5">
                        <img src="/images/Icon-Facebook.png" alt="" />
                        <img src="/images/Icon-instagram.png" alt="" />
                        <img src="/images/Icon-Linkedin.png" alt="" />
                        <img src="/images/Icon-Twitter.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
