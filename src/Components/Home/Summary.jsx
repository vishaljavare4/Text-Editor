import { useState, useEffect } from 'react';

const Summary = ({ textArea }) => {
    const [totalWords, setTotalWords] = useState(0);
    const [totalLetters, setTotalLetters] = useState(0);

    useEffect(() => {
        const processSummary = () => {
            if (textArea.length !== 0) {
                const words = textArea.trim().split(/\s+/);
                setTotalWords(words.length);
                setTotalLetters(textArea.replace(/\s/g, '').length);
                return;
            }
            setTotalWords(0);
            setTotalLetters(0);
        };

        processSummary();
    }, [textArea]);

    return (
        <>
            <div className='w-[20%] flex flex-col rounded-lg p-4 shadow-xl'>

                <p className='text-xl mb-3'>Session Summary </p>
                <div className='text-sm'>Total Words: {totalWords}</div>
                <div className='text-sm'>Total Letters: {totalLetters}</div>
            </div>
        </>
    );
};

export default Summary;