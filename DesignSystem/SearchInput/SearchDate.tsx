import styled, { CSSProperties } from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/reducer/rootReducer'
import { Col, Input, Row, Form, DatePicker } from 'antd'
import { CustomButton } from '../Button/CustomButton'
import { CalendarTwoTone, SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { ButtonTitle } from '../Button/ButtonTitle'

export interface SearchParam {
	whereToSearch: string
	searchData: string
}

export interface SearchIconParams {
	prefix?: React.ReactNode
	suffix?: React.ReactNode
}

const StyledRow = styled(Row)``

const HeaderCol = styled(Col)`
	font-weight: 700;
	/* margin-left: 1%; */
`

const dateStyle: CSSProperties = {
	width: '100%',
	fontSize: 16,
}

const SubmitArea = styled.div`
	width: 100%;
`

const SearchDate = () => {
	const [startDate, setStartDate] = useState<string>()
	const [endDate, setEndDate] = useState<string>()

	const whereToSearch = useSelector((state: RootState) => state.search)
	const onFinish = (values: any) => {
		console.log(values)
		console.log(startDate)
		console.log(endDate)
	}

	return (
		<>
			<Form onFinish={onFinish} initialValues={{}} colon={false}>
				<StyledRow>
					<HeaderCol flex="50%">
						<Form.Item name="startDate" label="신청일">
							<DatePicker
								placeholder=""
								onChange={(_, dateString) => setStartDate(dateString)}
								style={dateStyle}
								suffixIcon={<CalendarTwoTone />}
							/>
						</Form.Item>
					</HeaderCol>
					<HeaderCol flex="auto" style={{ marginLeft: 10 }}>
						<Form.Item name="endDate" label="~">
							<DatePicker
								placeholder=""
								onChange={(_, dateString) => setEndDate(dateString)}
								style={dateStyle}
								suffixIcon={<CalendarTwoTone />}
							/>
						</Form.Item>
					</HeaderCol>
				</StyledRow>
				<StyledRow>
					<HeaderCol flex="100%">
						<Form.Item name="searchData" label="담당자">
							<Input placeholder="" />
						</Form.Item>
					</HeaderCol>
				</StyledRow>
				<SubmitArea>
					<Form.Item style={{ textAlign: 'center' }}>
						<CustomButton
							type="defaultButton"
							size="default"
							htmlType="submit"
							title={<ButtonTitle title="검색" />}
						/>
					</Form.Item>
				</SubmitArea>
			</Form>
		</>
	)
}

export default SearchDate
