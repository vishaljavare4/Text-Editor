import { useState, useReducer } from 'react';
import { RxLetterCaseUppercase } from "react-icons/rx";
import { RxLetterCaseLowercase } from "react-icons/rx";
import { MdOutlineFormatClear } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import { FaBackspace } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Summary from './Summary';
import Preview from './Preview';

function reducer(state, action) {
    switch (action.type) {
        case 'UPPERCASE':
            return {
                ...state,
                text: state.text.toUpperCase(),
            };
        case 'LOWERCASE':
            return {
                ...state,
                text: state.text.toLowerCase(),
            };
        case 'CLEAR':
            return {
                ...state,
                text: '',
            };
        case 'SET_TEXT':
            return {
                ...state,
                text: action.payload,
            };
        case 'WHITESPACE':
            return{
                ...state,
                text: state.text.replace(/\s/g, '')
            }
        default:
            return state;
    }
}

const initialState = {
    text: '',
}

const TextEditor = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleUppercase = () => {
        dispatch({ type: 'UPPERCASE' });
    };

    const handleLowercase = () => {
        dispatch({ type: 'LOWERCASE' });
    };

    const handleClear = () => {
        dispatch({ type: 'CLEAR' });
    };

    const handleTextChange = (e) => {
        dispatch({ type: 'SET_TEXT', payload: e.target.value });
    };
    const handleWhiteSpace = (e) => {
        dispatch({type: 'WHITESPACE', });
    };
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(state.text);
        toast.success('Text copied to clipboard');
    };

    return (
        <>
            <div className="flex flex-col w-[80%] items-center justify-center p-4 gap-10">
                <p className="text-[30px] font-serif">Text Editor: Word Counter, Character Counter, Remove ExtraSpace</p>
                <div className="flex flex-col w-full gap-2 justify-start items-start">
                    <p className="text-xl font-serif">Enter your Text Here:</p>
                    <textarea
                        className="w-[70%] p-4 focus:outline-none text-black shadow-xl rounded-lg h-[200px] text-start max-h-[200px]"
                        value={state.text}
                        onChange={handleTextChange}
                    />
                    <div className=' flex gap-2 w-[70%] justify-between'>
                        <div className='flex gap-1'>
                            <div className='p-2 rounded-xl shadow-xl text-xl bg-rose-400 text-white hover:bg-rose-600 transition-all cursor-pointer' onClick={handleUppercase}>
                                <RxLetterCaseUppercase />
                            </div>
                            <div className='p-2 rounded-xl shadow-xl text-xl bg-rose-400 text-white hover:bg-rose-600 transition-all cursor-pointer' onClick={handleLowercase}>
                                <RxLetterCaseLowercase />
                            </div>
                            <div className='p-2 rounded-xl shadow-xl text-xl bg-rose-400 text-white hover:bg-rose-600 transition-all cursor-pointer' onClick={handleClear}>
                                <MdOutlineFormatClear />
                            </div>
                        </div>
                        <div className='flex gap-1'>
                            <div className='p-2 rounded-xl shadow-xl text-xl bg-sky-400 text-white hover:bg-sky-600 transition-all cursor-pointer' onClick={handleCopyToClipboard}>
                                <FaCopy />
                            </div>
                            <div className='p-2 rounded-xl shadow-xl text-xl bg-sky-400 text-white hover:bg-sky-600 transition-all cursor-pointer' onClick={handleWhiteSpace}>
                                <FaBackspace />
                            </div>
                        </div>
                    </div>
                    <Summary textArea={state.text} />
                    <Preview text={state.text}/>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default TextEditor;