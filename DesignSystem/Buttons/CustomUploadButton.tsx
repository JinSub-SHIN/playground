import { Button, Upload } from 'antd'
import styled, { CSSProperties, css } from 'styled-components'
type ButtonType = {
	title: string
	onClick?: () => void
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

const CustomButtonTag = styled(Button)`
	width: 84px;
	height: 44px;
	margin-top: 8px;
	border: 1px solid #005fb8;
	color: #005fb8;
	font-weight: 600;
`

const CustomUploadButton = ({ title }: ButtonType) => {
	return (
		<Upload>
			<CustomButtonTag className="uploadBtn">{title}</CustomButtonTag>
		</Upload>
	)
}

export default CustomUploadButton
