import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/reducer/rootReducer'
import { Col, Input, Row, Form } from 'antd'
import { getSearchData } from 'api/axios/search/service'
import { CustomButton } from '../Button/CustomButton'
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
	margin-left: 10px;
`

const SearchInput = (params: SearchIconParams) => {
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
				</StyledRow>
			</Form>
		</>
	)
}

export default SearchInput
