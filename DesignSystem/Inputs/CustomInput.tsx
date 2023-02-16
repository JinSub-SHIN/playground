import { Input } from 'antd'
import styled, { css } from 'styled-components'

type InputType = {
	placeholder: string
	size?: string // size? string | undefined
	onChange?: React.ChangeEventHandler<HTMLInputElement>
}

// props size 값으로 분기
const sizeStyle = css<{ inputsize?: string }>`
	${props =>
		props.inputsize === 'tableinput' &&
		css`
			width: 72px;
			height: 34px;
			border: none;
			:hover: ;
		`}

	${props =>
		props.inputsize === 'verysmall' &&
		css`
			width: 130px;
		`}
	${props =>
		props.inputsize === 'small' &&
		css`
			width: 200px;
		`}
	${props =>
		props.inputsize === 'medium' &&
		css`
			width: 330px;
		`}
	${props =>
		!props.inputsize &&
		css`
			width: 428px;
		`}
`

// 버튼 기본 스타일 정의
const CustomInputButton = styled(Input)`
	height: 44px;
	margin-top: 8px;
	background-color: #fcfcfc;
	text-indent: 5px;
	&::placeholder {
		color: #acacac;
	}
	${sizeStyle}
`

const CustomInput = ({ placeholder, size, onChange }: InputType) => {
	return (
		<CustomInputButton
			placeholder={placeholder}
			inputsize={size}
			onChange={onChange}
		></CustomInputButton>
	)
}

export default CustomInput
