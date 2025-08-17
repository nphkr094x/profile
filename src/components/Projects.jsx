import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import './style.css'

function Projects() {

    const [quoteIndex, setQuoteIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const quotes = [
        "“You have to believe in yourself when no one else does.” —Serena Williams",
        "“When you have a dream, you’ve got to grab it and never let go.” —Carol Burnett",
        "“The most important thing is to enjoy your life—to be happy—it’s all that matters.” —Steve Jobs",
        "“Spread love everywhere you go. Let no one ever come without leaving happier.” —Mother Teresa",
        "“Be yourself; everyone else is already taken.” —Oscar Wilde",
        "“The biggest adventure you can take is to live the life of your dreams.” —Oprah Winfrey",
        "“The only thing we have to fear is fear itself.” —Franklin D. Roosevelt",
        "“Some people want it to happen, some wish it would happen, others make it happen.” —Michael Jordan",
        "“You’ve got to be in it to win it.” —Tony Robbins",
        "“It does not matter how slowly you go, as long as you do not stop.” —Confucius",
        "“Find out who you are and do it on purpose.” —Dolly Parton",
        "“If you cannot do great things, do small things in a great way.” —Napoleon Hill",
        "“Always do your best. What you plant now, you will harvest later.” —Og Mandino",
        "“Failure is a great teacher and, if you are open to it, every mistake has a lesson to offer.” —Oprah Winfrey",
        "“If you don’t like the road you’re walking, start paving another one.” —Dolly Parton",
        "“Don’t let yesterday take up too much of today.”—Will Rogers",
    ];

    useEffect(() => {
        const text = quotes[quoteIndex];
        let i = -1;

        setDisplayedText("");
        setIsTyping(true);

        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => prev +text.charAt(i));
                i++
            } else {
                clearInterval(interval);
                setIsTyping(false);

                setTimeout(() => {
                    setQuoteIndex((prev) => (prev + 1) % quotes.length);
                }, 2000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [quoteIndex]);

    return (
        
        <section className="Content">
            <video autoPlay muted loop playsInline className="bg-video">
                <source src="background.mp4" type="video/mp4"/>
                Your browser does not support the video tag
            </video>

            <div className="profile-pc">
                <img src="rudues.jpg" alt="" />
            </div>
            <h1 className="color-change">nphkr094x_</h1>
            
            <div className="mb-6 h-8 flex items-center justify-center glow">
                <p className="text-lg font-mono whitespace-pre relative">
                    {displayedText}
                <span className="inline-block w-0.5 h-6 bg-white ml-1 animate-pulse"></span>
                </p>
            </div>
            
            <p className='glow'>
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '8px' }} />
                KhonKhen, TH
            </p>

            <div className="social-icons">
                <a href="https://www.instagram.com/nphkr_x09?igsh=MWJwdWx2MjNhbzI3eA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://github.com/nphkr094x" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://discord.com/users/1402271461330255954" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} size="2x" />
                </a>
            </div>
        </section>
    );
}

export default Projects;