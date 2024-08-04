import React from 'react'
import Navbar from '../components/Navbar'
import './signup.css'

const page = () => {
    return (
        <main id='mainContainer'>
            <div className='mainAssist'>
                <Navbar />
                <section className='contact_section'>
                    <div className="first-half both-halfs">
                        <h1>Get Started Now</h1>
                        <form action="" method=''>
                            <label htmlFor="name">Name</label>
                            <input type="text" name='' id='' placeholder='Jane Smith' />
                            <label htmlFor="email">Email address</label>
                            <input type="text" name='' id='' placeholder='email@janesfakedomain.net'/>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="" id="" placeholder='Password'/>
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <input type="text" name='' id='' placeholder='Confirm password'/>
                            <div className="terms_conditions">
                                <input type="checkbox" name="" id="" />
                                I agree to the <span></span><a href="#"> terms & policy</a>
                            </div>
                            <button type="submit"><span>Sigunup</span></button>
                        </form>
                    </div>
                    <div className="second-half both-halfs">
                        <img src="/singupimage.png" alt="" />
                    </div>
                </section>
            </div>
        </main>
    )
}

export default page
