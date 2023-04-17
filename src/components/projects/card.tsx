
export {Card}

type props = {
    children?: React.ReactElement | React.ReactElement[]
}

function Card({children}: props): React.ReactElement {
    return(
        <div className="shadow-lg shadow-black max-w-sm">
            {children}
        </div>
    )
}