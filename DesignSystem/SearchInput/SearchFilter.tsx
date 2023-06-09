import { useState } from 'react'
import { Col, DatePicker, Form, Input, Row, TreeSelect } from 'antd'
import styled from 'styled-components'
import { SearchIconParams, SearchParam } from './SearchInput'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/reducer/rootReducer'
import { getSearchData } from 'api/axios/search/service'
import { CustomButton } from '../Button/CustomButton'
import { ButtonTitle } from '../Button/ButtonTitle'

const treeData = [
	{
		value: '와트',
		title: '와트',
		children: [
			{
				value: '개발부',
				title: '개발부',
				children: [
					{
						value: '웹팀',
						title: '웹팀',
					},
					{
						value: '앱팀',
						title: '앱팀',
					},
				],
			},
			{
				value: '운영부',
				title: '운영부',
				children: [
					{
						value: '관리팀',
						title: '관리팀',
					},
				],
			},
		],
	},
]

const { RangePicker } = DatePicker

const StyledRow = styled(Row)``

const HeaderCol = styled(Col)`
	margin-left: 10px;
`

const FilterDiv = styled.div`
	width: 100%;
	background-color: #f7f7f7;
	margin-bottom: 20px;
	padding: 20px 20px 20px 20px;
`

const ContentWrapper = styled.div`
	display: flex;
	margin-top: 5px;
`

const Title = styled.div`
	height: 45px;
	line-height: 45px;
	text-align: center;
`

const FlexBox = styled.div``

const FilterWrapper = styled.div`
	flex: 1;
`

export const SearchFilter = (params: SearchIconParams) => {
	const [value, setValue] = useState<string>()
	const [filterStatus, setFilterStatus] = useState<boolean>(false)

	const onChange = (newValue: string) => {
		console.log(newValue)
		setValue(newValue)
	}

	const handleShowFilterArea = () => {
		if (filterStatus) {
			setFilterStatus(false)
		} else {
			setFilterStatus(true)
		}
	}

	const whereToSearch = useSelector((state: RootState) => state.search)
	const onFinish = (values: SearchParam) => {
		const params: SearchParam = {
			whereToSearch: whereToSearch.where,
			searchData: values.searchData,
		}

		const response = getSearchData(params)
		response.then(res => console.log(res))
	}

	return (
		<>
			<Form onFinish={onFinish}>
				<StyledRow>
					<HeaderCol flex="auto">
						<Form.Item name="searchData">
							<Input
								placeholder=""
								prefix={params.prefix}
								suffix={params.suffix}
							/>
						</Form.Item>
					</HeaderCol>
					<HeaderCol>
						<Form.Item>
							<CustomButton
								type="primaryButton"
								size="auto"
								htmlType="submit"
								title={<ButtonTitle title="검색" />}
							/>
						</Form.Item>
					</HeaderCol>
					<HeaderCol>
						<Form.Item>
							<CustomButton
								type="defaultButton"
								size="auto"
								htmlType="button"
								title={<ButtonTitle title="필터" />}
								onClick={handleShowFilterArea}
							/>
						</Form.Item>
					</HeaderCol>
				</StyledRow>
			</Form>
			{filterStatus ? (
				<FilterDiv>
					<FlexBox>
						<FilterWrapper>
							<Row>
								<HeaderCol flex="80px">
									<Title>
										{/* <FilterOutlined style={{ marginTop: 15 }} /> */}
										참여자 필터
									</Title>
								</HeaderCol>
								<HeaderCol flex="auto">
									<ContentWrapper>
										<TreeSelect
											showSearch
											style={{ width: '100%' }}
											value={value}
											dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
											placeholder="참여자를 선택하세요."
											allowClear
											multiple
											treeDefaultExpandAll
											onChange={onChange}
											treeData={treeData}
										/>
									</ContentWrapper>
								</HeaderCol>
							</Row>
						</FilterWrapper>
						<FilterWrapper>
							<Row>
								<HeaderCol flex="80px">
									<Title>
										{/* <FilterOutlined style={{ marginTop: 15 }} /> */}
										소속 필터
									</Title>
								</HeaderCol>
								<HeaderCol flex="auto">
									<ContentWrapper>
										<TreeSelect
											showSearch
											style={{ width: '100%' }}
											value={value}
											dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
											placeholder="소속을 선택하세요."
											allowClear
											multiple
											treeDefaultExpandAll
											onChange={onChange}
											treeData={treeData}
										/>
									</ContentWrapper>
								</HeaderCol>
							</Row>
						</FilterWrapper>
						<FilterWrapper>
							<Row>
								<HeaderCol flex="80px">
									<Title>
										{/* <FilterOutlined style={{ marginTop: 15 }} /> */}
										날짜 필터
									</Title>
								</HeaderCol>
								<HeaderCol flex="auto">
									<ContentWrapper>
										<RangePicker
											placeholder={['기간을 선택하세요', '기간을 선택하세요']}
											picker="month"
											style={{ width: '100%' }}
										/>
									</ContentWrapper>
								</HeaderCol>
							</Row>
						</FilterWrapper>
					</FlexBox>
				</FilterDiv>
			) : (
				<></>
			)}
		</>
	)
}
