import React from "react";
import { useState } from 'react';


const Cards = () => {
    const pairs = [
        { Question: "What did YouTube start out as?", Answer: "A dating site" },
        { Question: "How many zettabytes did the overall datasphere reach in 2020?", Answer: "64 zettabytes (Source: IDC)" },
        { Question: "Around what percent of the world's currency exists only on computers?", Answer: "90%" },
        { Question: "What was the first computer programming language that was widely used?", Answer: "FORTRAN" },
        { Question: "What does IBM stand for?", Answer: "International Business Machines" },
        { Question: "What is one-hot code?", Answer: "In machine learning, it is where we use a vector of length k, where we convert input values 0<i<=k into a vector in which all values are 0.0, except for the ith term, which is 1.0" },
        { Question: "Was Python or Java created first?", Answer: "Python" },
        { Question: "When was the first TV invented?", Answer: "1927" },
        { Question: "Are there computers that can detect fake smiles?", Answer: "Yes, MIT and the University of Bradford seems to have some." },
        { Question: "Is AI a subfield of Machine Learning or is it the other way around?", Answer: "Machine Learning is a subfield of artificial intelligence." },
    ];
    const [cards, setCards] = useState(pairs);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [showFront, setShowFront] = useState(true); 

    const currentCard = cards[currentCardIndex];

    const handleNextCard = () => {
        const nextIndex = (currentCardIndex + Math.floor(Math.random() * pairs.length)) % cards.length;
        setCurrentCardIndex(nextIndex);
        setShowFront(true); // Show front of next card by default
    };

    const handleFlipCard = () => {
        setShowFront(!showFront);
    };

    return (
        <div className="flashcards">
            <h3>All About Tech</h3>
            <p>Total cards: {pairs.length}</p>
            <div className="card" onClick={handleFlipCard}>
                    {showFront ? (
                        <div className="card-front">
                            <p>{currentCard.Question}</p>
                        </div>
                    ) : (
                        <div className="card-back">
                            <p>{currentCard.Answer}</p>
                        </div>
                    )}
            </div>
            <p></p>

            <button onClick={handleNextCard}>Next Card</button>
        </div>
    );
};

export default Cards;