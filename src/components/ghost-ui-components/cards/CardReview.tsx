export default function CardReview () {
    return (
        <div className="max-w-sm w-full border-2 rounded-md p-3 break-inside-avoid">
            <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-full bg-white p-2" />
                <span className="text-xl font-semibold">Daniel Ramos</span>
            </div>
            <p className="text-lg  my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam debitis error ut fuga odit magni, iste voluptate velit sit perferendis dicta voluptates, unde, fugiat id ea repellat qui facere.</p>
            <div className="flex justify-between w-full my-3">
                <span>Hace un nes</span>
                <a>LinkedIn</a>
            </div>
        </div>
    )
}