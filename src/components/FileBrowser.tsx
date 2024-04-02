import Box from '@mui/material/Box'
import data from "../data.json"
import { useMemo, useState } from 'react'
import FolderIcon from '@mui/icons-material/Folder'
import { DataGrid, GridColDef, GridPagination, GridRowParams } from "@mui/x-data-grid";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import Toolbar from '../components/Toolbar'
import BreadCrumb from '../components/BreadCrumb'
import { Switch } from '@mui/material'

type TEntry = {
    name: string;
    children?: TEntry[];
    size?: string;
    type: string;
  };

export default function FileBrowser() {
    const [currentFolder, setCurrentFolder] = useState(["root", "app"])

    const traverseFolders = (dir: TEntry): TEntry | undefined => {
        if (!dir) return

        if (dir.name === currentFolder[currentFolder.length - 1]) return dir

        if (dir.children) {
            for (const child of dir.children) {
                if (child.type === "folder") {
                    const result = traverseFolders(child)
                    if (result) return result
                }
            }
        }
    }

    const rows = useMemo(() => {
        const values =
          currentFolder[currentFolder.length - 1] === "root"
            ? Object.values(data)
            : traverseFolders(data.app)?.children || [];
    
        const rows = [];
    
        for (const value of values) {
          rows.push({
            id: value.name,
            name: value?.name || "",
            type: value?.type || "",
            // @ts-expect-error : size
            size: value.type === "folder" ? "-" : value?.size || "",
            modified: "2024-04-02 21:42:03"
          });
        }
    
        return rows;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currentFolder]);

    const columns: GridColDef<(typeof rows)[number]>[] = [
        {
          field: "name",
          headerName: "Name",
          renderCell: (params) => (
            <div className="flex gap-1 items-center">
              {params.row.type === "folder" ? <FolderIcon style={{ color: 'orange' }} /> : <FilePresentIcon style={{ color: 'grey' }} />}
              <span>{params.value}</span>
            </div>
          ),
    
          minWidth: 200,
        },
        { field: "type", headerName: "Type" },
        { field: "size", headerName: "Size" },
        { field: "modified", headerName: "Modified Date", minWidth: 250},
      ];

    return (
        <div >
        <div className="px-3 py-2">
        <BreadCrumb
          breadCrumbs={currentFolder}
          setBreadCrumbs={setCurrentFolder}
        />
      </div>
        <div className='border-t border-gray-200 border-r m-1'>
          <Toolbar />
        </div>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    style={{
                        borderColor: "rgba(229,231, 235, 1)",
                    }}
                    className='cursor-pointer'
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    slots={{
                      footer: () => (
                        <div className='border-t border-gray-200'>
                          <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                            <div>
                            <Switch defaultChecked />
                            <span className="text-sm font-medium text-gray-700">Dense Padding</span>
                            </div>
                          <GridPagination />
                          </Box>
                          
                        </div>
                      ),
                    }}
                    // pageSizeOptions={[5]}
                    pageSizeOptions={[5, 10, 25]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    onRowClick={(params: GridRowParams) =>
                        params.row.type === "folder" &&
                        setCurrentFolder((p) => [...p, params.row.name])
                      }
                />
            </Box>
            
        </div>
    )
}

