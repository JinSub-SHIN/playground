import { Select } from 'antd'
import styled, { CSSProperties } from 'styled-components'

const CustomSelectBox = styled(Select)`
	width: 428px;
	height: 44px;
	margin-top: 8px;
	background-color: rgb(252, 252, 252);
	text-indent: 5px;
	> div:first-child {
		background-color: #fcfcfc !important;
	}
`

type optionsType = {
	initValue: string
	options: Object[]
}

const CustomSelect = (props: optionsType) => {
	return (
		<>
			<CustomSelectBox
				defaultValue={props.initValue}
				options={props.options}
				size={'large'}
			></CustomSelectBox>
		</>
	)
}

export default CustomSelect
