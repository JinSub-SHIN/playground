import { Button } from 'antd'
import styled, { CSSProperties, css } from 'styled-components'
type ButtonType = {
	type: string
	title: string
	size?: string
	onClick?: () => void
	htmlType?: 'button' | 'submit' | 'reset' | undefined
	style?: CSSProperties
}

// props size 값으로 분기
const defaultButton = {
	backgroundColor: 'white',
	color: '#1c1c1c',
}

const primaryButton = {
	backgroundColor: '#005fb8',
	color: '#fff',
}

const lightPrimaryButton = {
	backgroundColor: 'white',
	borderColor: '#005fb8',
	color: '#005fb8',
}

const buttonStyle = css<{ btnsize?: string; btntype: string }>`
	// button width resize
	${props =>
		props.btnsize === 'small' &&
		css`
			width: 68px;
			height: 46px;
		`}

	${props =>
		props.btnsize === 'default' &&
		css`
			width: 208px;
		`}

	${props =>
		props.btnsize === 'large' &&
		css`
			width: 432px;
		`}

	// button color style
	${props =>
		props.btntype === 'default' &&
		css`
			${defaultButton}
		`}
	${props =>
		props.btntype === 'primary' &&
		css`
			${primaryButton}
		`}
	${props =>
		props.btntype === 'lightPrimary' &&
		css`
			${lightPrimaryButton}
		`}
`

const CustomButtonTag = styled(Button)`
	height: 50px;
	${buttonStyle}
`

const CustomButton = ({
	type,
	title,
	size,
	onClick,
	htmlType,
	style,
}: ButtonType) => {
	return (
		<CustomButtonTag
			btnsize={size}
			btntype={type}
			onClick={onClick}
			htmlType={htmlType}
			style={style}
		>
			{title}
		</CustomButtonTag>
	)
}

export default CustomButton
