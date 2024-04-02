import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import { FormControl, InputLabel, MenuItem, Select, Switch } from '@mui/material'

const Toolbar = () => {
    return (
        <div className="flex items-center gap-4 ">

            {/* First Item of Toolbar */}
            <div className='items-center flex gap-1 cursor-pointer'>
                <DriveFolderUploadIcon />
                <span className='text-sm font-medium text-gray-700'>Keep Local Path</span>
            </div>

            <div>
                <Switch defaultChecked />
                <span className='text-sm font-medium text-gray-700'>Auto Sync</span>
            </div>

            <div>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        className="w-28 h-12"
                        value={15}
                        defaultValue={15}
                        label="Mins"
                        onChange={() => console.log("Value Changed")}
                    >
                        <MenuItem value={15}>15 Mins</MenuItem>
                        <MenuItem value={20}>20 Mins</MenuItem>
                        <MenuItem value={30}>30 Mins</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div >

    )
}

export default Toolbar