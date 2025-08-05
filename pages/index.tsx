import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // In a real app, you'd send this to your backend
    console.log('Email submitted:', email)
  }

  return (
    <>
      <Head>
        <title>Welcome to Our Amazing Product</title>
        <meta name="description" content="Transform your workflow with our innovative solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
          <div className="text-white text-2xl font-bold">
            ProductName
          </div>
          <div className="space-x-6">
            <a href="#features" className="text-white hover:text-blue-200 transition-colors">
              Features
            </a>
            <a href="#about" className="text-white hover:text-blue-200 transition-colors">
              About
            </a>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              Sign In
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Workflow
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover the next generation of productivity tools designed to streamline your work and boost your team's efficiency.
          </p>
          
          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-400 outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  Get Started
                </button>
              </form>
            ) : (
              <div className="bg-green-500 text-white px-6 py-3 rounded-lg">
                Thanks! We'll be in touch soon.
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
              <p className="text-blue-100">
                Experience blazing-fast performance that keeps up with your pace.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">Secure & Private</h3>
              <p className="text-blue-100">
                Your data is protected with enterprise-grade security measures.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Easy to Use</h3>
              <p className="text-blue-100">
                Intuitive design that gets you productive from day one.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/20 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-8 text-center text-blue-100">
            <p>&copy; 2024 ProductName. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
}