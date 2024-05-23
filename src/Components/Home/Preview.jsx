const Preview = ({text}) => {
    return (
        <>
            <div className="flex flex-col w-[40%] rounded-lg shadow-xl p-4 gap-2 border border-solid border-white">
                <p className="text-xl">Preview</p>
                <div>
                    {text}
                </div>
            </div>
        </>
    )
}
export default Preview;