import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { default as Selection, SelectChangeEvent } from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      marginTop: 5
    },
  },
};

const names = ["Male", "Female"];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  console.log(theme, "theme");
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,

    outlined: {
      // Add your custom outline color here
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "red",
      },
      // Override the focus outline color as well
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "red",
      },
    },
  };
}

const Select = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl
      sx={{
        width: "100%",
        boxShadow: "none",
        ".MuiOutlinedInput-notchedOutline": { border: 0 },
      }}
    >
      <Selection
        displayEmpty
        value={personName}
        onChange={handleChange}
        input={
          <OutlinedInput
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#64748b !important",
                padding: 0,
                margin: 0,
              },
              "& .MuiOutlinedInput-input": {
                paddingLeft: "0.5rem",
              },
            }}
          />
        }
        renderValue={(selected) => {
          return selected.join(", ");
        }}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          ...MenuProps
        }}
        inputProps={{
          "aria-label": "Without label",
          style: {
            padding: 0,
          },
        }}
        style={{
          borderRadius: "0.375rem",
          padding: 0,
        }}
        className="rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border h-[42px]"
      >
        <MenuItem disabled value="" className="hidden">
          <em>Select Gender</em>
        </MenuItem>
        {names.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, personName, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Selection>
    </FormControl>
  );
};

export default Select;
