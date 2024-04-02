import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import { FormControl, InputLabel, MenuItem, Select, Switch } from '@mui/material'
import AutorenewIcon from "@mui/icons-material/Autorenew";
import SearchIcon from "@mui/icons-material/Search";

const Toolbar = () => {
    return (
        <div className="px-3 py-2 border-t border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 cursor-pointer">
            <DriveFolderUploadIcon />
            <span className="text-sm font-medium text-gray-700">
              Keep Local Path
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Switch defaultChecked />
            <span className="text-sm font-medium text-gray-700">Auto Sync</span>
          </div>

          <div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Mins</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                className="w-28 h-12"
                id="demo-simple-select"
                value={15}
                defaultValue={15}
                label="Mins"
                onChange={() => console.log("value changed")}
              >
                <MenuItem value={15}>15 Mins</MenuItem>
                <MenuItem value={20}>20 Mins</MenuItem>
                <MenuItem value={30}>30 Mins</MenuItem>
                <MenuItem value={40}>40 Mins</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <AutorenewIcon />
          </div>
        </div>

        <div>
          <div className="border border-gray-300 rounded-xl px-2 py-1 w-60 flex items-center">
            <input
              type="text"
              className="h-full border border-none text-sm outline-none flex-1"
              placeholder="Scene Name/Job ID"
            />
            <SearchIcon />
          </div>
        </div>
      </div>

    )
}

export default Toolbar