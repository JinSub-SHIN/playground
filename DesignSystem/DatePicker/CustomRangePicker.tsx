// import type { DatePickerProps, RangePickerProps } from 'antd'
import type { RangePickerProps } from 'antd/es/date-picker'
import { DatePicker } from 'antd'
import styled, { css } from 'styled-components'

const { RangePicker } = DatePicker

type CustomRangePickerType = {
	placeholder: [string, string]
	size?: string // size? string | undefined
	onChange: RangePickerProps['onChange']
	// onChange?: DatePickerProps['onChange']
}

// props size 값으로 분기

const sizeStyle = css<{ datepickersize?: string }>`
	${props =>
		props.datepickersize === 'verysmall' &&
		css`
			width: 130px;
		`}
	${props =>
		props.datepickersize === 'small' &&
		css`
			width: 205px;
		`}
	${props =>
		props.datepickersize === 'medium' &&
		css`
			width: 330px;
		`}
	${props =>
		!props.datepickersize &&
		css`
			width: 428px;
		`}
`

// RangePicker 기본 스타일 정의
const CustomRangePickerTag = styled(RangePicker)`
	height: 44px;
	margin-top: 8px;
	background-color: #fcfcfc;
	&::placeholder {
		color: #acacac;
	}
	${sizeStyle}
`

const CustomRangePicker = ({
	placeholder,
	size,
	onChange,
}: CustomRangePickerType) => {
	// if (isRange) {
	// 	return (
	// 		<CustomRangePickerTag
	// 			datepickersize={size}
	// 			placeholder={['방문 시작 날짜', '방문 끝 날짜']}
	// 			onChange={onChangeRange}
	// 		/>
	// 	)
	return (
		<CustomRangePickerTag
			placeholder={placeholder}
			datepickersize={size}
			onChange={onChange}
		></CustomRangePickerTag>
	)
}

export default CustomRangePicker
