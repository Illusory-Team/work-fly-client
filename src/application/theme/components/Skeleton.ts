import { Theme } from "@mui/material"
import { ComponentsOverrides } from "@mui/material/styles/overrides"
import { ComponentsProps } from "@mui/material/styles/props"
import { ComponentsVariants } from "@mui/material/styles/variants"

interface MuiSkeletonType {
	defaultProps?: ComponentsProps["MuiSkeleton"]
	styleOverrides?: ComponentsOverrides<Theme>["MuiSkeleton"]
	variants?: ComponentsVariants["MuiSkeleton"]
}

export const MuiSkeleton: MuiSkeletonType = {
	defaultProps: { animation: "wave" }
}
