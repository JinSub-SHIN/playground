import { Checkbox } from 'antd'
import styled from 'styled-components'

const CustomCheckBox = styled(Checkbox)<{ isChecked?: boolean }>`
	width: 200px;
	height: 44px;
	text-align: center;
	border-radius: 4px;
	justify-content: center;
	align-items: center;
	background-color: #fcfcfc;
	font: normal normal normal 16px/19px Pretendard;
	border: ${props =>
		props.isChecked ? '1px solid #1677ff' : '1px solid #d6d6d6'};
	color: ${props => (props.isChecked ? '#1677ff' : '#1c1c1c;')};

	&:hover {
		border: 1px solid #1677ff;
	}
	> span {
		&:first-child {
			top: 0.15em;
			left: -32px;
			> span {
				width: 20px;
				height: 20px;
				border-radius: 15px;
				&::after {
					margin-left: 2px;
				}
			}
		}
		&::after {
			border-radius: 15px;
		}
	}
`

// checkbox props parameter type
type CustomCheckBoxType = {
	onChange?: () => void
	isChecked?: boolean
	checked?: boolean
	title?: string
}

// component to export
const CustomCheck = ({
	onChange,
	isChecked,
	checked,
	title,
}: CustomCheckBoxType) => {
	return (
		<>
			<CustomCheckBox
				onChange={onChange}
				isChecked={isChecked}
				checked={checked}
			>
				{title}
			</CustomCheckBox>
		</>
	)
}

export default CustomCheck
