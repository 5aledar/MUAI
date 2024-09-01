import { logo } from '../assets'

const Hero = () => {
    return (
        <div>
            <header className='w-screen flex justify-center items-center flex-col'>
                <nav className='flex justify-between items-center  w-full  mb-10 pt-3 px-6'>
                    <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
                    <button type='button'
                        onClick={() => window.open('https://github.com/5aledar/Ai-summorizer')}
                        className='black_btn'>
                        GitHub
                    </button>
                </nav>

                <h1 className='head_text'>
                    Summarize articles with<br className='max-md:hidden' />
                    <span className='orange_gradient'>OpenAI GPT-4</span>
                </h1>
                <h2 className='desc'>
                    Simplify your reading with Sumz, an open-source article summarizer
                    that transforms lengthy articles into clear and concise summaries
                </h2><br />
                <p className='desc'>
                    paste the article link and get the summary with one click
                </p>
            </header>
        </div>
    )
}

export default Hero
