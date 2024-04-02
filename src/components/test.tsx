import customData from "../customData.js"


type TEntry = {
    name: string;
    children?: TEntry[];
};


function Entry({ entry, depth }: { entry: TEntry, depth: number }) {
    return <div>
        {entry.name}
        {entry.children && '>'}
        <div style={{ paddingLeft: `${depth * 15}px` }}>
            {entry.children?.map((entry) => (
                <Entry key={entry.name} entry={entry} depth={depth + 1} />
            ))}
        </div>
    </div>
}

const test = () => {
  return (
            <div>
                {customData.children.map((entry) => (
                    <Entry key={entry.name} entry={entry} depth={1} />
                ))}
            </div> 
  )
}

export default test