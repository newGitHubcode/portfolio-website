"use client"

import React, { useState } from 'react'
import { supabase } from '../utils/supabaseClient'


export default function Feedback() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [feedback, setFeedback] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')

        try {
            const {data, error} = await supabase
                .from('feedback')
                .insert({name, email, feedback})
            if(error) throw error

            setName('')
            setEmail('')
            setFeedback('')
            setMessage('Thank you for your feedback!')
        } catch(error) {
            setMessage('Failed to send feedback. Please try again later.')
        } finally {
            setLoading(false)
        }

        
    }



    return (
        <section id="feedback" className="bg-black text-gray-400 body-font py-24">
            <div className="container mx-auto px-5">
                <div className="text-center mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
                        I would like to hear your feedback
                    </h1>
                    <p>
                        Please let us know what your thoughts and suggestions of the website.
                    </p>
                </div>

                <div className="max-w-lg mx-auto bg-gray-500 p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-black">
                                Name
                            </label>

                            <input 
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-black">
                                Email
                            </label>

                            <input 
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="feedback" className="leading-7 text-sm text-black">
                                Feedback
                            </label>

                            <textarea
                                id="feedback"
                                name="feedback"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                required
                                rows={4}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white rounded py-2 px-4 hover:bg-indigo-600 transition-colors duration-200"
                        >
                            {loading ? 'Sending...' : 'Send Feedback'}
                        </button>
                    </form>
                    {message && <p className="mt-4 text-center text-sm text-gray-500">{message}</p>}
                </div>
            </div>
        </section>
    )
}
