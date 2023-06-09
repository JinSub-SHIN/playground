import styled, { CSSProperties } from 'styled-components'
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/reducer/rootReducer'
import { Col, Input, Row, Form, DatePicker } from 'antd'
import { CustomButton } from '../Button/CustomButton'
import { CalendarTwoTone, SearchOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { ButtonTitle } from '../Button/ButtonTitle'
import { setInitSearchData, setSearchData } from 'redux/action/searchSlice'
import { getFormattedDate } from 'hook/getDate'

export interface SearchParam {
	whereToSearch: string
	searchData: string
}

export interface SearchIconParams {
	prefix?: React.ReactNode
	suffix?: React.ReactNode
}

export interface SearchTitle {
	dateTitle?: string
	searchTitle?: string
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

const SearchDate = ({
	dateTitle = '신청일',
	searchTitle = '담당자',
}: SearchTitle) => {
	const dispath = useDispatch()
	const [startDate, setStartDate] = useState<string>(getFormattedDate())
	const [endDate, setEndDate] = useState<string>(getFormattedDate())
	const [searchWord, setSearchWord] = useState<string>('')

	const whereToSearch = useSelector((state: RootState) => state.search)
	const enterSearchData = useSelector(
		(state: RootState) => state.search.searchData,
	)

	useEffect(() => {
		console.log(startDate, endDate)
		dispath(setInitSearchData)
	}, [])

	const onFinish = (values: any) => {
		console.log(values)
		console.log(startDate)
		console.log(endDate)
		dispath(
			setSearchData({
				search: searchWord!,
				startDate: startDate!,
				endDate: endDate!,
			}),
		)
	}

	return (
		<>
			<Form onFinish={onFinish} initialValues={{}} colon={false}>
				<StyledRow>
					<HeaderCol flex="50%">
						<Form.Item name="startDate" label={dateTitle}>
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
						<Form.Item name="searchData" label={searchTitle}>
							<Input
								placeholder=""
								onChange={event => setSearchWord(event.target.value)}
							/>
						</Form.Item>
					</HeaderCol>
				</StyledRow>
				<SubmitArea>
					<Form.Item style={{ textAlign: 'center' }}>
						<CustomButton
							type="primaryButton"
							size="auto"
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
