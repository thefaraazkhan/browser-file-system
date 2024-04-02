import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import data from "../data.json"
import customData from "../customData.js"
import { useMemo, useState } from 'react'
import FolderIcon from '@mui/icons-material/Folder'

// const columns: GridColDef<(typeof rows)[number]>[] = [
//     { field: "Name", headerName: "Name" },
//     { field: "Type", headerName: "Type" },
//     { field: "Size", headerName: "Size" },
// ]

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'name', headerName: 'Name' },
    { field: 'size', headerName: 'Size' },
    { field: 'type', headerName: 'Type' },
    { field: 'modified', headerName: 'Modified Date', width: 250 },
]

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ]

type TEntry = {
    name: string
    children?: TEntry[]
}

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

export default function FileBrowser() {
    const [currentFolder, setCurrentFolder] = useState(customData.name)
    // const [currentFolder, setCurrentFolder] = useState(main)

    // const jsonData = data
    // if (currentFolder === "app") {
    //     console.log(jsonData)
    // }

    const newRows = useMemo(() => {
        const fileData = customData
        console.log(fileData, "THIS IS FILE DATA")
        const entries = currentFolder === "app" ? fileData : fileData.children.map((ent) => {
            // console.log(ent)
            if (ent.name === currentFolder) {
                return ent
            } else {
                return ent
            }
        })

        const rows = []

        if (entries.children) {
            for (const ent of entries.children) {
                console.log(ent)
                rows.push({
                    id: ent.name,
                    name: ent.name,
                    size: ent.type === "folder" ? null : ent.size,
                    type: ent.type,
                    modified: "2024-04-02 20:30:05"
                })
            }
        }
        return rows

    }, [currentFolder])


    // const newRows = [
    //     { id: 1, name: 'Snow', size: 'Jon', type: 'folder', modified: 14 },
    //     { id: 2, name: 'Lannister', size: 'Cersei', type: 'folder', modified: 31 },
    //     { id: 3, name: 'Lannister', size: 'Jaime', type: 'folder', modified: 31 },
    // ]

    const traverseFolders = (destination) => {
        if ()
    }


    return (
        <>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    style={{
                        borderColor: "rgba(229,231, 235, 1)",
                    }}
                    rows={newRows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    onRowClick={(params: GridRowParams) => {
                        console.log(params.row.name, "has been clicked")
                        // console.log()
                        params.row.type === "folder" && (() => traverseFolders(params.row.name))
                        console.log("Current folder changed to", currentFolder)
                    }
                    }
                />
            </Box>

            <div>
                {customData.children.map((entry) => (
                    <Entry key={entry.name} entry={entry} depth={1} />
                ))}
            </div>
        </>
    )
}

