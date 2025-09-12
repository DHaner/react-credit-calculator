
interface Props {
    content: string,
    onClick: () => void
}

export default function Button({ content, onClick }: Props) {
    return (
        <>
            <button className="bg-gray-600 rounded-full  size-10 flex items-center justify-center hover:ring-gray-900/50 hover:ring-4 hover:bg-gray-700 cursor-pointer font-bold text-2xl shrink-0 "
                onClick={onClick}>
                {content}
            </button>
        </>
    )
}
