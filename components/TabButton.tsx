'use client'

export const TabButton = ({ selectTab, active, children }: any ) => {
    const btnClass = active  ? 'text-white border-b border-[#328d65]' : 'text-[#ADB7BE]';
    return (
        <button
            onClick={selectTab}
            className= {`mr-3 font-semibold hover:text-white ${btnClass}`}>
            { children }
        </button>
    )
}
