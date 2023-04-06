import styled, { CSSProperties, css } from 'styled-components'
import { Button } from 'antd'

type ButtonType = {
	type: string
	title: string | React.ReactNode
	size?: string
	onClick?: () => void
	htmlType?: 'button' | 'submit' | 'reset' | undefined
	style?: CSSProperties
}

// props size 값으로 분기
const primaryButton = {
	backgroundColor: ' #005BAC',
	color: '#ffffff',
}

const defaultButton = {
	backgroundColor: ' #ffffff',
	color: 'black',
}

const warningButton = {
	backgroundColor: ' #ffffff',
	color: 'red',
	borderColor: 'red',
}

const buttonStyle = css<{ btnsize?: string; btntype: string }>`
	${props =>
		props.btnsize === 'default' &&
		css`
			width: 150px;
			height: 32px;
		`}
	// button color style
	${props =>
		props.btntype === 'primaryButton' &&
		css`
			${primaryButton}
			&:hover {
				color: #ffffff !important;
			}
		`}

	${props =>
		props.btntype === 'defaultButton' &&
		css`
			${defaultButton}
			&:hover {
				color: black !important;
				border-color: #d9d9d9 !important;
			}
		`}

	${props =>
		props.btntype === 'warningButton' &&
		css`
			${warningButton}
			&:hover {
				color: red !important;
				border-color: red !important;
			}
		`}
`

const StyledButton = styled(Button)`
	width: 100%;
	height: 32px;
	${buttonStyle}
`

/**
 * @필수 (type) primaryButton | defaultButton | warningButton
 * @필수 (title) string or ReactNode
 * @선택 (size) default
 * @선택 (htmlType) 'button' | 'submit' | 'reset' | undefined
 * @선택 (style) CSSProperties
 * @returns
 */
export const CustomButton = (params: ButtonType) => {
	return (
		<StyledButton
			btnsize={params.size}
			btntype={params.type}
			htmlType={params.htmlType}
			onClick={params.onClick}
			style={params.style}
		>
			{params.title}
		</StyledButton>
	)
}
