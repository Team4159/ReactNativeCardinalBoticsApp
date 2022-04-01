import * as React from "react"
import Svg, {Path} from "react-native-svg"
import config from "../config.json"

function SvgComponent(props) {
	return (
		<Svg viewBox="0 0 477.867 477.867" fill={props.color || config.icons.color} width={config.icons.size} height={config.icons.size}>
			<Path d="M119.467 0C110.041 0 102.4 7.641 102.4 17.067V51.2h34.133V17.067C136.533 7.641 128.892 0 119.467 0zM358.4 0c-9.426 0-17.067 7.641-17.067 17.067V51.2h34.133V17.067C375.467 7.641 367.826 0 358.4 0zM426.667 51.2h-51.2v68.267c0 9.426-7.641 17.067-17.067 17.067s-17.067-7.641-17.067-17.067V51.2h-204.8v68.267c0 9.426-7.641 17.067-17.067 17.067s-17.067-7.641-17.067-17.067V51.2H51.2C22.923 51.2 0 74.123 0 102.4v324.267c0 28.277 22.923 51.2 51.2 51.2h375.467c28.277 0 51.2-22.923 51.2-51.2V102.4c0-28.277-22.923-51.2-51.2-51.2zm17.066 375.467c0 9.426-7.641 17.067-17.067 17.067H51.2c-9.426 0-17.067-7.641-17.067-17.067V204.8h409.6v221.867z"/>
			<Path d="M353.408 243.942c-6.664-6.669-17.472-6.672-24.141-.009L204.8 368.401 148.599 312.2c-6.669-6.664-17.477-6.66-24.141.009-6.664 6.669-6.66 17.477.009 24.141l68.267 68.267c6.665 6.663 17.468 6.663 24.132 0L353.4 268.083c6.668-6.664 6.672-17.472.008-24.141z"/>
		</Svg>
	)
}

export default SvgComponent